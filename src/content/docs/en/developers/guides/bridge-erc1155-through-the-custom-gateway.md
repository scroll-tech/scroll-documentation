---
section: developers
date: Last Modified
title: "Bridge ERC1155 through the Custom Gateway"
lang: "en"
permalink: "developers/guides/bridge-erc1155-through-the-custom-gateway"
excerpt: "Whenever you want to bridge an ERC1155 NFT, you may interact with the Gateway and NFT contracts on Sepolia and Scroll testnet. In this guide, we'll cover different approaches to doing so."
---

Whenever you want to bridge an ERC1155 NFT, you may interact with the Gateway and NFT contracts on Sepolia and Scroll testnet. In this guide, we'll cover different approaches to doing so.

## Step 1: Launch an 1155 Contract on Sepolia

If you already have an existing token on Sepolia, feel free to skip this step. If you don't have an ERC1155 on L1, you can grab the following minimal example and launch it on L1.

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract MockNFT is ERC1155 {
  constructor() ERC1155("") {}

  function mint(address to, uint256 id, uint256 amount) public {
    _mint(to, id, amount, "");
  }
}
```

## Step 2: Launch the Gateway on Sepolia

This step is needed only if you want to launch your own Gateway. Launching your own gateway is fully permissionless and also allows you to have custom logic called every time a token is deposited. You can skip this step if you use the Scroll ERC1155 bridge launched at `TODO: TODO: 0xd1bE599aaCBC21448fD6373bbc7c1b4c7806f135`. More information is available [here](https://github.com/scroll-tech/token-list). This contract will allow you to send ERC1155 tokens from Sepolia to Scroll testnet.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@scroll-tech/contracts@0.1.0/L1/gateways/L1ERC1155Gateway.sol";

contract MyL1ERC1155Gateway is L1ERC1155Gateway {
  function _depositERC1155(
    address _token,
    address _to,
    uint256 _tokenId,
    uint256 _amount,
    uint256 _gasLimit
  ) internal override nonReentrant {
    super._depositERC1155(_token, _to, _tokenId, _amount, _gasLimit);
    /*custom logic goes here*/
  }

  function _batchDepositERC1155(
    address _token,
    address _to,
    uint256[] calldata _tokenIds,
    uint256[] calldata _amounts,
    uint256 _gasLimit
  ) internal override nonReentrant {
    super._batchDepositERC1155(_token, _to, _tokenIds, _amounts, _gasLimit);
    /*custom logic goes here*/
  }
}
```

## Step 3: Launch the Gateway on Scroll

This step is needed only if you want to launch your own Gateway. Launching your own gateway is fully permissionless and also allows you to have custom logic called every time a token is deposited. You can skip this step if you use the Scroll ERC1155 bridge launched at `TODO: 0xfe5Fc32777646bD123564C41f711FF708Dd48360`. More information is available [here](https://github.com/scroll-tech/token-list). This contract will allow you to send ERC1155 tokens from Sepolia to Scroll testnet.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity =0.8.16;

import "@scroll-tech/contracts@0.1.0/L2/gateways/L2ERC1155Gateway.sol";

contract MyL2ERC1155Gateway is L2ERC1155Gateway {
  function _withdrawERC1155(
    address _token,
    address _to,
    uint256 _tokenId,
    uint256 _amount,
    uint256 _gasLimit
  ) internal override nonReentrant {
    super._withdrawERC1155(_token, _to, _tokenId, _amount, _gasLimit);
    /*custom logic goes here*/
  }

  function _batchWithdrawERC1155(
    address _token,
    address _to,
    uint256[] calldata _tokenIds,
    uint256[] calldata _amounts,
    uint256 _gasLimit
  ) internal override nonReentrant {
    super._batchWithdrawERC1155(_token, _to, _tokenIds, _amounts, _gasLimit);
    /*custom logic goes here*/
  }
}
```

## Step 3: Launch the custom token on Scroll testnet

This contract has to follow the IScrollERC1155 standard interface. It has to allow the gateway to mint tokens on deposit and burn on withdrawal. The following example shows a sample implementation by passing as constructor parameters the L2 gateway (either the one you just launched or Scroll's at `TODO: 0xd1bE599aaCBC21448fD6373bbc7c1b4c7806f135`) and your token address on Sepolia.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@scroll-tech/contracts@0.1.0/libraries/token/IScrollERC1155.sol";

contract MockNFT is ERC1155, IScrollERC1155 {
  address GATEWAY;
  address COUNTERPART;

  constructor(address _gateway, address _counterpart) ERC1155("") {
    GATEWAY = _gateway;
    COUNTERPART = _counterpart;
  }

  /// @notice Return the address of Gateway the token belongs to.
  function gateway() public view returns (address) {
    return GATEWAY;
  }

  /// @notice Return the address of counterpart token.
  function counterpart() public view returns (address) {
    return COUNTERPART;
  }

  /// @notice Mint some token to recipient's account.
  /// @dev Gateway Utilities, only gateway contract can call
  /// @param _to The address of recipient.
  /// @param _tokenId The token id to mint.
  function mint(address _to, uint256 _tokenId, uint256 _amount, bytes memory _data) external {
    require(msg.sender == gateway(), "Only gateway can mint");
    _mint(_to, _tokenId, _amount, _data);
  }

  /// @notice Burn some token from account.
  /// @dev Gateway Utilities, only gateway contract can call
  /// @param _tokenId The token id to burn.
  function burn(address _from, uint256 _tokenId, uint256 _amount) external {
    require(msg.sender == gateway(), "Only gateway can mint");
    _burn(_from, _tokenId, _amount);
  }

  function batchMint(
    address _to,
    uint256[] calldata _tokenIds,
    uint256[] calldata _amounts,
    bytes calldata _data
  ) public {
    require(msg.sender == gateway(), "Only gateway can mint");
    _mintBatch(_to, _tokenIds, _amounts, _data);
  }

  /// @notice Batch burn some token from account.
  /// @dev Gateway Utilities, only gateway contract can call
  /// @param _from The address of account to burn token.
  /// @param _tokenIds The list of token ids to burn.
  /// @param _amounts The list of corresponding amount of token to burn.
  function batchBurn(address _from, uint256[] calldata _tokenIds, uint256[] calldata _amounts) public {
    require(msg.sender == gateway(), "Only gateway can Burn");
    _burnBatch(_from, _tokenIds, _amounts);
  }
}
```

## Step 4: Initialize the Gateways

This step is only needed if you're launching your own custom Gateways. If you're using Scroll's Gateway, the Scroll team will take care of this.

On Sepolia, first call the `initialize` function on the Sepolia L1 Gateway by passing the following params:

- `counterpart` : L2 gateway you just launched on Scroll testnet.
- messenger: The messenger contract on Sepolia at `TODO: 0x5260e38080BFe97e6C4925d9209eCc5f964373b6`

Next, you will need to call the `updateTokenMapping` to `bind the L1 and L2 tokens.`

- `l1 token`: Token launched on Sepolia
- `l2 token`: Token launched on Scroll testnet

Now let's move to Scroll testnet and call the initialize function on your Scroll testnet L2 Gateway:

- `counterpart`: L1 gateway you just launched on Sepolia.
- `messenger`: The messenger contract on Scroll testnet at `TODO: 0xb75d7e84517e1504C151B270255B087Fd746D34C`

Finally, let's bind the tokens on Scroll testnet by calling `updateTokenMapping` on the same contract:

- `l2 token` : Token launched on Scroll testnet
- `l1 Token`: Token launched on Sepolia

## Step 5: Deposit from Sepolia to Scroll testnet

Deposits can be made by first approving the Gateway on L1 and then calling the `depositERC1155` function by passing the following parameters. Notice that this is a payable function, so if you send 0.0001 ETH, it should be more than enough to confirm your transaction on L2:

1. `token`: token address on Sepolia
2. `token id`: token id that you want to deposit
3. `amount`: amount of tokens you want to deposit
4. `gas limit`: 4000 should be enough
