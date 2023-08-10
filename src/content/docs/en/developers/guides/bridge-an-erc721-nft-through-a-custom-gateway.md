---
section: developers
date: Last Modified
title: "Bridge an ERC721 NFT through a Custom Gateway"
lang: "en"
permalink: "developers/guides/bridge-an-erc721-nft-through-a-custom-gateway"
excerpt: "Whenever you want to bridge an ERC721 NFT, you may interact with the Gateway and NFT contracts on Sepolia and Scroll testnet. In this guide, we'll cover different ways of doing so."
isMd: true
---

Whenever you want to bridge an ERC721 NFT, you may interact with the Gateway and NFT contracts on Sepolia and Scroll testnet. In this guide, we'll cover different ways of doing so.

## Step 1: Launch an NFT on Sepolia

If you already have an existing token on Sepolia, feel free to skip this step. If you don't have an NFT on L1, you can grab the following minimal example of an ERC721 and launch it on L1.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MockNFT is ERC721 {
  constructor() ERC721("Mock NFT", "MNFT") {}

  function mint(address to, uint nftId) public {
    _mint(to, nftId);
  }
}
```

## Step 2: Launch the Gateway on Sepolia

This step is needed only if you want to launch your own Gateway. Launching your own gateway is fully permissionless and also allows you to have custom logic called every time a token is deposited. You can skip this step if you use the Scroll ERC721 bridge launched at `TODO: 0x1C441Dfc5C2eD7A2AA8636748A664E59CB029157.` More information is available [here](https://github.com/scroll-tech/token-list). This contract will allow you to send NFTs from Sepolia to Scroll testnet.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity =0.8.16;

import "@scroll-tech/contracts@0.1.0/L1/gateways/L1ERC721Gateway.sol";

contract MyL1ERC721Gateway is L1ERC721Gateway {
  function _depositERC721(
    address _token,
    address _to,
    uint256 _tokenId,
    uint256 _gasLimit
  ) internal override nonReentrant {
    super._depositERC721(_token, _to, _tokenId, _gasLimit);
    /*custom logic goes here*/
  }

  function _batchDepositERC721(
    address _token,
    address _to,
    uint256[] calldata _tokenIds,
    uint256 _gasLimit
  ) internal override nonReentrant {
    super._batchDepositERC721(_token, _to, _tokenIds, _gasLimit);
    /*custom logic goes here*/
  }
}
```

## Step 3: Launch the Gateway on Scroll testnet

You can also skip this step if you use the Scroll ERC721 Gateway launched at `TODO: 0x8Fee20e0C0Ef16f2898a8073531a857D11b9C700`. This contract lets you bridge tokens from Scroll testnet back to Sepolia.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity =0.8.16;

import "@scroll-tech/contracts@0.1.0/L2/gateways/L2ERC721Gateway.sol";

contract MyL2ERC721Gateway is L2ERC721Gateway {
  function _withdrawERC721(
    address _token,
    address _to,
    uint256 _tokenId,
    uint256 _gasLimit
  ) internal override nonReentrant {
    super._withdrawERC721(_token, _to, _tokenId, _gasLimit);
    /*custom logic goes here*/
  }

  function _batchWithdrawERC721(
    address _token,
    address _to,
    uint256[] calldata _tokenIds,
    uint256 _gasLimit
  ) internal override nonReentrant {
    super._batchWithdrawERC721(_token, _to, _tokenIds, _gasLimit);
    /*custom logic goes here*/
  }
}
```

## Step 4: Launch the custom token on Scroll testnet

This contract has to follow the IScrollERC721 standard interface. It has to allow the gateway to mint tokens on deposit and burn on withdrawal. The following example shows a sample implementation by passing as constructor parameters the L2 gateway (either the one you just launched or Scroll's at `TODO: 0x1C441Dfc5C2eD7A2AA8636748A664E59CB029157`) and your token address on Sepolia.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@scroll-tech/contracts@0.1.0/libraries/token/IScrollERC721.sol";

contract MockNFT is ERC721, IScrollERC721 {
  address GATEWAY;
  address COUNTERPART;

  constructor(address _gateway, address _counterpart) ERC721("Mock NFT", "MNFT") {
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
  function mint(address _to, uint256 _tokenId) external {
    require(msg.sender == gateway(), "Only gateway can mint");
    _mint(_to, _tokenId);
  }

  /// @notice Burn some token from account.
  /// @dev Gateway Utilities, only gateway contract can call
  /// @param _tokenId The token id to burn.
  function burn(uint256 _tokenId) external {
    require(msg.sender == gateway(), "Only gateway can mint");
    _burn(_tokenId);
  }
}
```

## Step 5: Initialize the Gateways

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

## Step 6: Deposit from Sepolia to Scroll testnet

Deposits can be made by first approving the Gateway on L1 and then calling the `depositERC721` function by passing the following parameters. Notice that this is a payable function, so if you send 0.0001 ETH, it should be more than enough to confirm your transaction on L2:&#x20;

1. `token`: token address on Sepolia
2. `token id`: token id that you want to deposit
3. `gas limit`: 4000 should be enough

After confirming first on L1 and then waiting around 20mins for your confirmation on L2, you should be able to see your NFT on any block explorer.
