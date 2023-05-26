---
section: developers
date: Last Modified
title: "Developer Quickstart"
lang: "en"
permalink: "developers/developer-quickstart"
---

With Scroll, your favorite tools for building and testing smart contracts just work.

Since Scroll is bytecode equivalent with the EVM, you’ll just need to point your favorite builder tools at a Scroll Alpha Testnet RPC Provider.

If you run into any issues, please reach out in [our Discord](https://discord.gg/scroll).

## Acquiring Testnet Ether

To start building on Scroll, you'll first need to acquire some testnet ETH. See the [Faucet](/user-guide/faucet) page for tips on getting test tokens on Goerli. After this, you can bridge your testnet ETH to the Scroll Alpha Testnet (Layer 2) using our [Bridge](/user-guide/bridge).

For a walkthrough, start with the User Guide's [Setup](/user-guide/setup) page.

## Network Configuration

Use the table below for configuring your Ethereum tools to the Scroll Alpha Testnet.

| Network Name       | Scroll Alpha Testnet                                             | Goerli test network                                                                                        |
| ------------------ | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| RPC URL            | [https://alpha-rpc.scroll.io/l2](https://alpha-rpc.scroll.io/l2) | [https://endpoints.omniatech.io/v1/eth/goerli/public](https://endpoints.omniatech.io/v1/eth/goerli/public) |
| Chain ID           | 534353                                                           | 5                                                                                                          |
| Currency Symbol    | ETH                                                              | ETH                                                                                                        |
| Block Explorer URL | [https://blockscout.scroll.io](https://blockscout.scroll.io/)    | [https://goerli.etherscan.io](https://goerli.etherscan.io)                                                 |

## Configure your tooling

### Hardhat

Modify your Hardhat config file `hardhat.config.ts` to point at the Scroll Alpha Testnet public RPC.

```jsx
...

const config: HardhatUserConfig = {
  ...
  networks: {
    scrollAlpha: {
      url: "https://alpha-rpc.scroll.io/l2" || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
};

...
```

### Foundry

To deploy using the Scroll Alpha Testnet Public RPC, run:

`forge create ... --rpc-url=https://alpha-rpc.scroll.io/l2`

### Remix Web IDE

After compiling your contracts, the easiest way to deploy using Remix is by [setting up Metamask](/user-guide/setup#metamask), then selecting the **Scroll Alpha Testnet** network.

<figure><img src="../.gitbook/assets/image (11).png" alt=""><figcaption><p>Metamask with the Scroll Alpha Testnet selected as Network</p></figcaption></figure>

Now, in the “Deploy and Run Transactions” tab, use the “Environment” drop down and select “Injected Provider - MetaMask.”

<figure><img src="../.gitbook/assets/image (18).png" alt=""><figcaption><p>Remix using MetaMask as a Network Provider for accessing the Scroll Alpha Testnet</p></figcaption></figure>

Connect your wallet and select the Scroll Alpha Testnet. Your account should be selected automatically in Remix, and you can click “Deploy.”

### Truffle

Assuming you already have a truffle environment setup, go to the Truffle [configuration file](https://trufflesuite.com/docs/truffle/reference/configuration/), `truffle.js`. Make sure to have installed HDWalletProvider: `npm install @truffle/hdwallet-provider@1.4.0`

```jsx
const HDWalletProvider = require("@truffle/hdwallet-provider")
...
module.exports = {
  networks: {
    scrollAlpha: {
      provider: () =>
        new HDWalletProvider(process.env.PRIVATE_KEY, "https://alpha-rpc.scroll.io/l2"),
      network_id: '*',
    },
  }
}
```

### Brownie

To add the Scroll Alpha Testnet, run the following command:

```bash
brownie networks add Ethereum scrollAlpha host=https://alpha-rpc.scroll.io/l2 chainid=534353
```

To set this as your default network, add the following in your project config file:

```yaml
networks:
  default: scrollAlpha
```

### ethers.js

Setting up a Scroll Alpha Testnet provider in an `ethers` script:

```jsx
import { ethers } from "ethers"

const provider = new ethers.providers.JsonRpcProvider("https://alpha-rpc.scroll.io/l2")
```

### scaffold-eth

To deploy using Scaffold-eth, you’ll need to point both your Hardhat and React settings at the Scroll Alpha Testnet.

#### Configure Hardhat

In the `packages/hardhat/hardhat.config.js` file, you’ll add the network and select it as the default network.

```jsx
...
//
// Select the network you want to deploy to here:
//
const defaultNetwork = "scrollAlpha";
...
module.exports = {
...
	networks: {
...
          scrollAlpha: {
            url: "https://alpha-rpc.scroll.io/l2",
            accounts: {
              mnemonic: mnemonic(),
            },
          },
	}
...
}
```

Be sure to fund the deployment wallet as well! Run `yarn generate` to create the wallet and `yarn account` to check its funds. Once funded, run `yarn deploy --network scrollAlpha` to deploy on the Alpha testnet.

> ⚠️ Warning
>
> On some project forks, you'll want to disable the contract verification which relies on Etherscan. This can be commented out in `packages/hardhat/deploy/00_deploy_your_contract.js`

#### Configure the Frontend

To configure your frontend, you need to add the Scroll Alpha Testnet as a network option, then select it as default.

To add the network, modify `packages/react-app/src/constants.js` .

```jsx
...
export const NETWORKS = {
...
  scrollAlpha: {
    name: "scrollAlpha",
    color: "#e9d0b8",
    chainId: 534353,
    rpcUrl: "https://alpha-rpc.scroll.io/l2",
    blockExplorer: "https://blockscout.scroll.io",
  },
...
}
```

Next, in `packages/react-app/src/App.jsx` modify

```jsx
...
/// 📡 What chain are your contracts deployed to?
const initialNetwork = NETWORKS.scrollAlpha;
...
```
