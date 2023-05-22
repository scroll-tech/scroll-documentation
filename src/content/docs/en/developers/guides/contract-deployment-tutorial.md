---
section: developers
date: Last Modified
title: "Contract Deployment Tutorial"
lang: "en"
permalink: "developers/guides/contract-deployment-tutorial"
excerpt: "Our Alpha Testnet allows the community to deploy smart contracts on Scroll. In this tutorial, we will teach you how to deploy a contract on the Scroll Testnet."
---

Our Alpha Testnet allows the community to deploy smart contracts on Scroll. In this tutorial, we will teach you how to deploy a contract on the Scroll Testnet. This [demo repo](https://github.com/scroll-tech/scroll-contract-deploy-demo) illustrates contract deployment with [Hardhat](https://hardhat.org/) and [Foundry](https://github.com/foundry-rs/foundry).

> ℹ️ **Note**
>
> Before you start deploying the contract, you need to request test tokens from a Goerli faucet and use the [bridge](https://scroll.io/alpha/bridge) to transfer some test ETH from _Goerli_ to _Scroll Alpha_.

### Deploy contracts with Hardhat

1. If you haven't already, install [nodejs](https://nodejs.org/en/download/) and [yarn](https://classic.yarnpkg.com/lang/en/docs/install).
2. Clone the repo and install dependencies

```shell
git clone https://github.com/scroll-tech/scroll-contract-deploy-demo.git
cd scroll-contract-deploy-demo
yarn install
```

3\. Create a `.env` file following the example `.env.example` in the root directory. Change `PRIVATE_KEY` to your own account private key in the `.env`.

4\. Run `yarn compile` to compile the contract.

5\. Run `yarn deploy:scrollTestnet` to deploy the contract on the Scroll Alpha Testnet.

6\. Run `yarn test` for hardhat tests.

### Deploy contracts with Foundry

1. Clone the repo.

```shell
git clone https://github.com/scroll-tech/scroll-contract-deploy-demo.git
cd scroll-contract-deploy-demo
```

2\. Install Foundry.

```shell
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

3\. Run `forge build` to build the project.

4\. Deploy your contract with Foundry

```bash
forge create --rpc-url https://alpha-rpc.scroll.io/l2 \
  --value <lock_amount> \
  --constructor-args <unlock_time> \
  --private-key <your_private_key> \
  --legacy \
  contracts/Lock.sol:Lock
```

- `<lock_amount>` is the amount of test `ETH` to be locked in the contract. Try setting this to some small amount, like `0.0000001ether`.&#x20;
- `<unlock_time>` is the Unix timestamp after which the funds locked in the contract will become available for withdrawal. Try setting this to some Unix timestamp in the future, like `1696118400` (this Unix timestamp corresponds to October 1, 2023).

For example:

```bash
forge create --rpc-url https://alpha-rpc.scroll.io/l2 \
  --value 0.00000000002ether \
  --constructor-args 1696118400 \
  --private-key 0xabc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc1 \
  --legacy contracts/Lock.sol:Lock
```

### Questions and Feedback

Thank you for participating in and developing on the Scroll Alpha Testnet. If you encounter any issues, join our [Discord](https://discord.gg/scroll) and ask us in the `developers` channel.

#### Developer Notes

1. The `SELFDESTRUCT` opcode is disabled and will not be supported in Scroll, as it is slated to be removed from the EVM at a later date.
2. For now, we have set Layer 2 gas prices to be the same as on Ethereum Layer 1. However, these gas prices are subject to change and will be set in the future to match proving costs. We will endeavor to minimize these changes, primarily applying them to ZK-unfriendly precompiles when necessary for security.
