export const SIDEBAR = {
  gettingStarted: [
    {
      section: "Getting Started",
      contents: [
        { title: "Overview", url: "getting-started/overview" },
        {
          title: "Deploy Your First Contract",
          url: "getting-started/deploy-your-first-contract",
        },
      ],
    },
    {
      section: "Pre-Alpha Testnet",
      contents: [
        { title: "Introduction", url: "/" },
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
              title: "Swap",
              url: "user-guide/swap",
            },
            {
              title: "Common Errors",
              url: "user-guide/common-errors",
            },
          ],
        },
        { title: "Roll-up Explorer", url: "/pre-alpha/rollup-explorer" },
        { title: "L1 & L2 Block Explorer", url: "/pre-alpha/block-explorer" },
      ],
    },
    {
      section: "Resources",
      contents: [
        {
          title: "Other stuff",
          url: "getting-started/other-tutorials",
        },
      ],
    },
    {
      section: "Next Steps",
      contents: [
        {
          title: "Something else to do",
          url: "architecture-overview/architecture-overview",
        },
      ],
    },
  ],
  developers: [
    {
      section: "Developers",
      contents: [{ title: "Overview", url: "/" }],
    },
    {
      section: "Section",
      contents: [
        {
          title: "Using Scroll",
          url: "",
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
  research: [
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
  zkevm: [
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
