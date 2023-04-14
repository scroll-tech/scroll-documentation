export const SIDEBAR = {
  gettingStarted: [
    {
      section: "Getting Started",
      contents: [{ title: "Overview", url: "getting-started/overview" }],
    },
    {
      section: "Alpha Testnet",
      contents: [
        // { title: "Introduction", url: "https://l2scan.scroll.io/" },
        {
          title: "User Guide",
          url: "user-guide/",
          children: [
            {
              title: "Setup",
              url: "user-guide/setup",
            },
            {
              title: "Faucet",
              url: "user-guide/faucet",
            },
            {
              title: "Bridge",
              url: "user-guide/bridge",
            },
            {
              title: "Transfer Tokens",
              url: "user-guide/transfer-tokens",
            },
            {
              title: "Common Errors",
              url: "user-guide/common-errors",
            },
          ],
        },
        { title: "Rollup Explorer", url: "https://scroll.io/alpha/rollupscan" },
        { title: "Alpha Block Explorer", url: "https://blockscout.scroll.io/" },
        { title: "Goerli Block Explorer", url: "https://goerli.etherscan.io/" },
      ],
    },
    {
      section: "Community",
      contents: [
        {
          title: "Discord",
          url: "https://discord.gg/scroll",
        },
        {
          title: "Community Forum",
          url: "https://community.scroll.io/",
        },
      ],
    },
  ],
  developers: [
    {
      section: "Developers",
      contents: [
        { title: "Building on Scroll", url: "developers" },
        { title: "Developer Quickstart", url: "developers/developer-quickstart" },
        { title: "Verifying Smart Contracts", url: "developers/verifying-smart-contracts" },
        { title: "Alpha Testnet Contracts", url: "developers/alpha-testnet-contracts" },
        { title: "Integrations", url: "developers/integrations" },
        { title: "Ethereum & Alpha Testnet Differences", url: "developers/ethereum-and-alpha-testnet-differences" },
      ],
    },
    {
      section: "Guides",
      contents: [
        {
          title: "Contract Deployment Tutorial",
          url: "developers/guides/contract-deployment-tutorial",
        },
      ],
    },
    {
      section: "Resources",
      contents: [
        { title: "Rollup Explorer", url: "https://scroll.io/alpha/rollupscan" },
        { title: "Alpha Block Explorer", url: "https://blockscout.scroll.io/" },
        { title: "Goerli Block Explorer", url: "https://goerli.etherscan.io/" },
      ],
    },
  ],
  technology: [
    {
      section: "Overview",
      contents: [
        {
          title: "Intro to zkEVM",
          url: "technology/intro-to-zkevm",
        },
        {
          title: "zkEVM Overview",
          url: "technology/zkevm-overview",
        },
      ],
    },
  ],
  learn: [
    {
      section: "Ethereum & Protocols",
      contents: [{ title: "Intro to Rollups", url: "learn/intro-to-rollups" }],
    },
    {
      section: "Zero Knowledge",
      contents: [
        {
          title: "What is ZK?",
          url: "learn/what-is-zk",
        },
      ],
    },
  ],
  infrastructure: [
    {
      section: "EXTERNAL ADAPTERS",
      contents: [
        {
          title: "Introduction",
          url: "",
        },
      ],
    },
  ],
}
