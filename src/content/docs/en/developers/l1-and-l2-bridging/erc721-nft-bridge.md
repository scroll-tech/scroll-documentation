---
section: developers
date: Last Modified
title: "ERC721 NFT Bridge"
lang: "en"
permalink: "TODO"
excerpt: "TODO"
---

# ERC721 NFT Bridge

## Deposit ERC721 tokens from Goerli

NFT bridging from Goerli to Scroll Alpha is done via the `L1ERC721Gateway` contract instead of using a router. The contract address is deployed on Scroll Alpha at `0x1C441Dfc5C2eD7A2AA8636748A664E59CB029157`. Similarly to bridging ERC20 tokens, we use the `depositERC721` function to send tokens to Scroll Alpha, and we can later retrieve them back to Goerli using `withdrawERC721` on the `L2ERC721Gateway` contract deployed on Scroll.

NFT contracts on both Goerli and Scroll must be launched and connected through the Gateways to enable bridging. This means deposit and withdraw transactions will revert if a contract on either L1 or L2 is missing or not mapped through the `updateTokenMapping` function.

{% hint style="info" %}
**`depositERC721`** is a payable function. The amount of ETH sent to this function will be used to pay for L2 fees. If the amount is not enough, the transaction will not be sent. All excess eth will be sent back to the sender. `0.00001 ETH` should be more than enough to process a token deposit.
{% endhint %}

### Creating a ScrollERC721 token on L2

To deposit an ERC721 token to Scroll Alpha, a token contract compatible with the `IScrollERC721` standard has to be launched and mapped on a `L1ERC721Gateway` and `L2ERC721Gateway` on Goerli and Scroll Alpha, respectively. This contract has to grant permission to the Gateway on Scroll Alpha to mint when a token is deposited and burn when the token is withdrawn.

The following interface is the `IScrollERC721` needed for deploying ERC721 tokens compatible with the `L2ERC721Gateway` on Scroll Alpha.

```jsx
interface IScrollERC721 {
    /// @notice Return the address of Gateway the token belongs to.
    function gateway() external view returns (address);

    /// @notice Return the address of counterpart token.
    function counterpart() external view returns (address);

    /// @notice Mint some token to recipient's account.
    /// @dev Gateway Utilities, only gateway contract can call
    /// @param _to The address of recipient.
    /// @param _tokenId The token id to mint.
    function mint(address _to, uint256 _tokenId) external;

    /// @notice Burn some token from account.
    /// @dev Gateway Utilities, only gateway contract can call
    /// @param _tokenId The token id to burn.
    function burn(uint256 _tokenId) external;
}
```

### Adding ERC721 NFTs to the Scroll Bridge

All assets can be bridged securely and permissionlessly through Gateway contracts deployed by any developer. However, Scroll also manages an ERC721 Gateway contract where all NFTs created by the community are welcome. Being part of the Scroll-managed Gateway means you won't need to deploy the Gateway contracts, and your token will appear in the Scroll frontend. To be part of the Scroll Gateway, you must contact the Scroll team to add the NFT on both Goerli and Scroll Alpha Gateway contracts. To do so, follow the instructions on the [token lists](https://github.com/scroll-tech/token-list) repository to add a new token to the Scroll official frontend.

## Withdraw ERC721 tokens from Scroll

The `L2ERC721Gateway` contract deployed at `0x8Fee20e0C0Ef16f2898a8073531a857D11b9C700` is used to send tokens from Scroll Alpha to Goerli. Before bridging, the `L2ERC721Gateway` contract has to be approved by the NFT contract. Once that is done, `withdrawERC721` can be called to perform the asset bridge.

{% hint style="info" %}
**`withdrawERC721`** is a payable function, and the amount of ETH sent to this function will be used to pay for L1 fees. If the amount is not enough, the transaction will not be sent. All excess ETH will be sent back to sender. Fees depend on Goerli activity but `0.005 ETH` should be enough to process a token withdrawal.
{% endhint %}

{% hint style="warning" %}
**Make sure the transaction won't revert on Goerli** while sending from Scroll Alpha. There is no way to recover the NFT bridged if you're transaction reverts on Goerli. All assets are burnt on Scroll Alpha when the transaction is sent, and it's impossible to mint them again.
{% endhint %}

## L1ERC721Gateway API

Please visit the [npm library](https://www.npmjs.com/package/@scroll-tech/contracts?activeTab=code) for the complete Scroll contract API documentation.

### depositERC721

```solidity
function depositERC721(address _token, address _to, uint256 _tokenId, uint256 _gasLimit) external payable;
```

Deposit an ERC721 NFT from Goerli to a recipient's account on Scroll Alpha.

| Parameter | Description                                                 |
| --------- | ----------------------------------------------------------- |
| token     | The address of ERC721 NFT contract on Goerli.               |
| to        | The address of recipient's account on Scroll Alpha.         |
| tokenId   | The NFT id to deposit.                                      |
| gasLimit  | Gas limit required to complete the deposit on Scroll Alpha. |

### updateTokenMapping

```solidity
function updateTokenMapping(address _l1Token, address _l2Token) external;
```

Update the mapping that connects an NFT contract from Goerli to Scroll Alpha.

| Parameter | Description                                      |
| --------- | ------------------------------------------------ |
| \_l1Token | The address of ERC721 token in L1.               |
| \_l2Token | The address of corresponding ERC721 token in L2. |

## L2ERC721Gateway API

### withdrawERC721

```solidity
function depositERC721(address _token, address _to, uint256 _tokenId, uint256 _gasLimit) external payable;
```

Send an ERC721 NFT from Scroll Alpha to a recipient's account on Goerli.

| Parameter | Description                                                              |
| --------- | ------------------------------------------------------------------------ |
| token     | The address of ERC721 NFT token contract on Scroll Alpha.                |
| to        | The address of recipient's account on Goerli.                            |
| tokenId   | The NFT id to deposit.                                                   |
| gasLimit  | Unused, but included for potential forward compatibility considerations. |

### updateTokenMapping

```solidity
function updateTokenMapping(address _l1Token, address _l2Token) external;
```

Update the mapping that connects an NFT contract from Scroll Alpha to Goerli.

| Parameter | Description                                      |
| --------- | ------------------------------------------------ |
| \_l2Token | The address of ERC721 token in L2.               |
| \_l1Token | The address of corresponding ERC721 token in L1. |
