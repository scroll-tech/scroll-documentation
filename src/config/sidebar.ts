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
      section: "Architecture",
      contents: [
        {
          title: "Scroll Architecture",
          url: "technology/intro-to-zkevm",
        },
        {
          title: "Principles",
          url: "technology/intro-to-zkevm",
        },
      ],
    },
    {
      section: "zkEVM",
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
    {
      section: "Bridge",
      contents: [
        {
          title: "Bridge",
          url: "technology/intro-to-zkevm",
        },
        {
          title: "Proof Validation",
          url: "technology/zkevm-overview",
        },
      ],
    },
    {
      section: "Sequencer",
      contents: [
        {
          title: "Execution Client",
          url: "technology/intro-to-zkevm",
        },
        {
          title: "zk trie",
          url: "technology/zkevm-overview",
        },
        {
          title: "Sync Service",
          url: "technology/zkevm-overview",
        },
      ],
    },
    {
      section: "Prover",
      contents: [
        {
          title: "Proof Generation",
          url: "technology/zkevm-overview",
        },
        {
          title: "CPU Prover Repo",
          url: "https://github.com/",
        },
      ],
    },
  ],
  learn: [
    {
      section: "Ethereum & Protocols",
      contents: [
        { title: "The Scalability Problem", url: "learn/the-scalability-problem" },
        { title: "Intro to Rollups", url: "learn/intro-to-rollups" },
      ],
    },
    {
      section: "Zero Knowledge",
      contents: [
        {
          title: "What is ZK?",
          url: "learn/zero-knowledge/what-is-zk",
        },
        {
          title: "Polynomial Commitment Schemes",
          url: "learn/zero-knowledge/polynomial-commitment-schemes",
        },
        {
          title: "KZG Commitment Scheme",
          url: "learn/zero-knowledge/kzg-commitment-scheme",
        },
      ],
    },
  ],
}
