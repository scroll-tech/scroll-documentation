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
        { title: "Roll-up Explorer", url: "https://scroll.io/alpha/rollupscan" },
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
          title: "Reserch Forum",
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
        { title: "Roll-up Explorer", url: "https://scroll.io/alpha/rollupscan" },
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
          title: "Scroll Architecture",
          url: "architecture-overview/architecture-overview",
          children: [
            {
              title: "Child Page A",
              url: "architecture-overview/architecture-request-model",
            },
            {
              title: "Child Page B",
              url: "architecture-overview/architecture-request-model",
            },
          ],
        },
      ],
    },
    {
      section: "Another Section",
      contents: [
        {
          title: "Introduction to Rollups",
          url: "data-feeds",
        },
      ],
    },
  ],
  learn: [
    {
      section: "zkEVM",
      contents: [{ title: "Overview", url: "/" }],
    },
    {
      section: "Section",
      contents: [
        {
          title: "zkEVM Overview",
          url: "/",
        },
      ],
    },
    {
      section: "Resources",
      contents: [
        { title: "Getting Help", url: "resources/getting-help" },
        {
          title: "Off-site Link (Doesn't work)",
          url: "https://scroll.io/",
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
