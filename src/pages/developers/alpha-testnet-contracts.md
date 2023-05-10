---
layout: ../../layouts/MainLayout.astro
section: developers
date: Last Modified
title: "Alpha Testnet Contracts"
lang: "en"
permalink: "developers/alpha-testnet-contracts"
excerpt: "The network info and contract addresses you need to start with Scroll Alpha Testnet."
---

## Network Info

| Network Name       | Scroll Alpha Testnet                                             | Goerli Testnet                                                                                             |
| ------------------ | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| RPC URL            | [https://alpha-rpc.scroll.io/l2](https://alpha-rpc.scroll.io/l2) | [https://endpoints.omniatech.io/v1/eth/goerli/public](https://endpoints.omniatech.io/v1/eth/goerli/public) |
| Chain ID           | 534353                                                           | 5                                                                                                          |
| Currency Symbol    | ETH                                                              | ETH                                                                                                        |
| Block Explorer URL | [https://blockscout.scroll.io](https://blockscout.scroll.io/)    | [https://goerli.etherscan.io](https://goerli.etherscan.io)                                                 |

## Scroll Contracts

### Rollup

- L1 Rollup: `0x3C584eC7f0f2764CC715ac3180Ae9828465E9833`

### Bridge

- L1 Messenger: `0x5260e38080BFe97e6C4925d9209eCc5f964373b6`
- L1 Gateway Router: `0xe5E30E7c24e4dFcb281A682562E53154C15D3332`
- L2 Messenger: `0xb75d7e84517e1504C151B270255B087Fd746D34C`
- L2 Gateway Router: `0x6d79Aa2e4Fbf80CF8543Ad97e294861853fb0649`

### L2 Predeploys

- Message Queue: `0x5300000000000000000000000000000000000000`
- Block Container: `0x5300000000000000000000000000000000000001`
- Gas Price Oracle: `0x5300000000000000000000000000000000000002`
- Whitelist: `0x5300000000000000000000000000000000000003`
- WETH L2: `0xa1EA0B2354F5A344110af2b6AD68e75545009a03`
- Transaction Fee Vault: `0x5300000000000000000000000000000000000005`

## Protocols

### Uniswap V3

- Frontend website: [https://uniswap-v3.scroll.io/](https://uniswap-v3.scroll.io/)
- Main Contracts
  - Core Factory: `0x6E7E0d996eF50E289af9BFd93f774C566F014660`
  - NFT Position Manager: `0xbd1A5920303F45d628630E88aFbAF012bA078F37`
  - Router: `0xD9880690bd717189cC3Fbe7B9020F27fae7Ac76F`
- Additional Contracts
  - multicall2Address: `0x2117f703867a2B7E6813c7e5Edd96bf9a8d8eC30`
  - proxyAdminAddress: `0x7023D099DcAE54c3ed93B8C07bC8948150A68bb4`
  - tickLensAddress: `0xf39a3f98Bc7e03cB9A8dBF8246B8C66a1A5c025F`
  - nftDescriptorLibraryAddressV1_3_0: `0x9590F386eC21A221646A19ac03984683713366d7`
  - nonfungibleTokenPositionDescriptorAddressV1_3_0: `0xdbb991616CE0E6a0553258bd34bC1478042C03C2`
  - descriptorProxyAddress: `0x9590F386eC21A221646A19ac03984683713366d7`
  - v3MigratorAddress: `0x5Db25d2b7dba65c8aA2b16465438Ec44f75b0511`
  - v3StakerAddress: `0xF957376105987D25EFe7D403eA63929e0dAc9E0c`
  - quoterV2Address: `0xbf1c1FE1e9e900aFd5ba2Eb67480c44266D5eD84`

## Tokens

> ℹ️ **Note**
>
> Bridged tokens from Goerli using the native bridge can be added to the [token-list](https://github.com/scroll-tech/token-list) repo.

- Goerli USDC: `0x67aE69Fd63b4fc8809ADc224A9b82Be976039509`
