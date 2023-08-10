---
section: developers
date: Last Modified
title: "Bridge ERC20 through the Custom Gateway"
lang: "en"
permalink: "developers/guides/bridge-erc20-through-the-custom-gateway"
excerpt: "This guide will walk through how to use Scroll's bridge for ERC20s that need custom functionality using the Custom Gateway."
isMd: true
---

This guide will walk through how to use Scroll's bridge for ERC20s that need custom functionality using the Custom Gateway.

## Step 1: Launch a token on Sepolia

There is no need for a particular implementation for a token to be compatible with L2. If you already have a token, feel free to skip this step. If you want to deploy a new token, you can use the following contract of a simple ERC20 token that mints 1 million tokens to the deployer when launched.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract L1Token is ERC20 {
  constructor() ERC20("My Token L1", "MTL1") {
    _mint(msg.sender, 1_000_000 ether);
  }
}
```

## Step 2: Launch the counterpart token on Scroll testnet

The next step is launching the token on Scroll testnet which represents the original token on Sepolia. This token can implement custom logic to match the same logic as the L1 token or even add more features on top of it.

For this to work:

- The token must implement the IScrollStandardERC20 interface in order to be compatible with the bridge.
- The contract should provide the gateway address and the counterpart token addresses (the L1 token we just launched) under the `gateway()` and `counterpart()` functions. It should also allow the L2 gateway to call the token `mint()` and `burn()` functions that will be called when a token is deposited and withdrawn.

The following is a complete example of a token compatible with the bridge. As the constructor, you should pass the `TODO: 0xa07Cb742657294C339fB4d5d6CdF3fdBeE8C1c68` address as the official Scroll gateway and the address of the token we just launched on Sepolia.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@scroll-tech/contracts@0.1.0/libraries/token/IScrollERC20Extension.sol";

contract L2Token is ERC20, IScrollERC20Extension {
  // We store the gateway and the L1 token address to provide the gateway() and counterpart() functions which are needed from the Scroll Standard ERC20 interface
  address _gateway;
  address _counterpart;

  // In the constructor we pass as parameter the Custom L2 Gateway and the L1 token address as parameters
  constructor(address gateway_, address counterpart_) ERC20("My Token L2", "MTL2") {
    _gateway = gateway_;
    _counterpart = counterpart_;
  }

  function gateway() public view returns (address) {
    return _gateway;
  }

  function counterpart() external view returns (address) {
    return _counterpart;
  }

  // We allow minting only to the Gateway so it can mint new tokens when bridged from L1
  function transferAndCall(address receiver, uint256 amount, bytes calldata data) external returns (bool success) {
    transfer(receiver, amount);
    data;
    return true;
  }

  // We allow minting only to the Gateway so it can mint new tokens when bridged from L1
  function mint(address _to, uint256 _amount) external onlyGateway {
    _mint(_to, _amount);
  }

  // Similarly to minting, the Gateway is able to burn tokens whem bridged from L2 to L1
  function burn(address _from, uint256 _amount) external onlyGateway {
    _burn(_from, _amount);
  }

  modifier onlyGateway() {
    require(gateway() == _msgSender(), "Ownable: caller is not the gateway");
    _;
  }
}
```

## Step 3: Add the token to the Scroll Bridge

You need to contact the Scroll team to add the token to `L2CustomERC20Gateway` contract in Scroll and `L1CustomERC20Gateway` contract in L1. In addition, follow the instructions on the [token lists](https://github.com/scroll-tech/token-list) repository to add your token to the Scroll official frontend.

## Step 4: Deposit tokens

Once your token has been approved by the Scroll team, you should be able to deposit tokens from L1. To do so you must approve the `TODO: 0x920f906B814597cF5DC76F95100F09CBAF9c5748` address that hosts the L1CustomGateway contract on Sepolia. Then, deposit tokens by calling the `depositERC20` function from the `L1CustomGateway` contract. You can do this using [the bridge](TODO: https://scroll.io/sepolia/bridge), [sepolia scan](TODO: https://sepolia.etherscan.io/address/0x920f906B814597cF5DC76F95100F09CBAF9c5748#writeProxyContract), or a smart contract.

## Step 5: Withdraw tokens

You will follow similar steps to send tokens back from L2 to L1. First, approve the L2CustomGateway on `TODO: 0xa07Cb742657294C339fB4d5d6CdF3fdBeE8C1c68` and then withdraw the tokens calling the `withdrawERC20` from the `L2CustomGateway` contract.

## Alternative Approach: Launch and set up a custom L1 gateway contract

Adding your token to the Scroll official bridge is the recommended way of bridging tokens. This will make them easier to discover and safer for holders. However, it will still need approval from the Scroll team. If you want to launch a custom token without going through the official approval process, you can launch a custom gateway yourself. To do so, you would need to launch a `L1CustomERC20Gateway` contract on L1 and a `L2CustomERC20Gateway` on L2.

### Launch an L1 Custom Gateway

Let’s start by launching the following contract on Sepolia.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity =0.8.16;

import "@scroll-tech/contracts@0.1.0/L1/gateways/L1CustomERC20Gateway.sol";

contract MyL1Gateway is L1CustomERC20Gateway {
  function _deposit(
    address _token,
    address _to,
    uint256 _amount,
    bytes memory _data,
    uint256 _gasLimit
  ) internal override nonReentrant {
    super._deposit(_token, _to, _amount, _data, _gasLimit);
    /*custom logic goes here*/
  }
}
```

### Launch an L2 Custom Gateway

Now let’s launch the counterpart contract on Scroll testnet.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity =0.8.16;

import "@scroll-tech/contracts@0.1.0/L2/gateways/L2CustomERC20Gateway.sol";

contract MyL2Gateway is L2CustomERC20Gateway {
  function _withdraw(
    address _token,
    address _to,
    uint256 _amount,
    bytes memory _data,
    uint256 _gasLimit
  ) internal override nonReentrant {
    super._withdraw(_token, _to, _amount, _data, _gasLimit);
    /*custom logic goes here*/
  }
}
```

### Setup your Gateway contract on Sepolia

Once the contracts are launched, call the following functions to initialize the contracts and bind them to the corresponding tokens and gateway on the other side of the bridge.

First, call the `initialize` function on the `MyL1Gateway` contract with the following parameters:

- `_counterpart`: The address of `MyL2Gateway` we just launched on Scroll testnet.
- `_router`: Set it to `TODO: 0xe5E30E7c24e4dFcb281A682562E53154C15D3332`, the Scroll router contract on Sepolia.
- `_messenger`: Set it t[^1]o `TODO: 0x5260e38080BFe97e6C4925d9209eCc5f964373b6`, the Scroll messenger contract on Sepolia.

A custom gate can host multiple token bridges. In this case, we will only be allowing bridging between L1Token and L2Token by calling the `updateTokenMapping` function on the `MyL1Gateway` contract with the following parameters:

- `_l1Token`: The address of the `L1Token` contract we previously launched on Sepolia.
- `_l2Token`: The address of the `L2Token` contract we previously launched on Scroll testnet.

### Setup your Gateway contract Scroll testnet

Now let’s switch to the Scroll testnet chain and initialize `MyL2Gateway` in a similar way.

First, we call the `initialize` function from `MyL2Gateway`:

- `_counterpart`: The address of `MyL1Gateway` we just launched on Sepolia.
- `_router`: Set it to `TODO: 0x6d79Aa2e4Fbf80CF8543Ad97e294861853fb0649`, the Scroll router contract on Scroll testnet.
- `_messenger`: Set it `TODO: 0xb75d7e84517e1504C151B270255B087Fd746D34C`, the Scroll messenger contract on Scroll testnet.

And then call the `updateTokenMapping` on the `MyL2Gateway` contract:

- `_l2Token`: The address of the `L2Token` contract we previously launched on Scroll testnet.
- `_l1Token`: The address of the `L1Token` contract we previously launched on Sepolia.

### Bridging tokens

We can now call `depositERC20` from `MyL1Gateway` and `withdrawERC20` from `MyL2Gateway` in a similar way to the official Scroll bridge.
