![Contribute to Scroll](./src/assets/banner.png)

[![Twitter Follow](https://img.shields.io/twitter/follow/Scroll_ZKP?style=social)](https://twitter.com/Scroll_ZKP)
[![Discord](https://img.shields.io/discord/984015101017346058?color=%235865F2&label=Discord&logo=discord&logoColor=%23fff)](https://discord.gg/scroll)

This repository contains the open-source project for Scroll's documentation.

## Getting Started

To start developing locally, run the following commands:

```bash
npm install && npm run dev
```

## Documentation Structure

- All articles are written in Markdown and stored under `/src/content/docs/`.
- Navigation for the documentation is managed in `/src/config/sidebar.ts`.

## Adding Tools to Scroll

To add an entry to the [tooling list](http://docs.scroll.xyz/en/developers/scroll-contracts), follow these steps:

1. Create a new pull request (PR).
2. Add a new `.mdx` file to the [tooling content folder](src/content/tools).
3. Use the following template for your entry:

```yaml
---
name: "Safe"
category: ["Identity", "Wallet"]
excerpt: "Safe allows you to create smart wallets on-chain."
logo: { src: "https://app.safe.global/images/safe-logo-green.png", alt: "Safe Logo" }
website: "https://app.safe.global"
network: ["Mainnet", "Testnet"]
noAdditionalInfo: false
---

Add any additional details here, such as contract addresses, tutorials, or API URLs for integrating this tool with Scroll.
```

Refer to existing entries in the folder for guidance if needed.

## Acknowledgments

Special thanks to the Chainlink team, whose documentation served as the basis for this project. Their repository is available [here](https://github.com/smartcontractkit/documentation), and their documentation can be viewed at [https://docs.chain.link/](https://docs.chain.link/).
