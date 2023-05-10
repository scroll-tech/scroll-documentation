import { t } from "i18next"

export const getSidebar = () => {
  return {
    gettingStarted: [
      {
        section: t("sidebar.gettingStarted.gettingStarted"),
        contents: [{ title: t("sidebar.gettingStarted.overview"), url: "getting-started/overview" }],
      },
      {
        section: t("sidebar.gettingStarted.alphaTestnet"),
        contents: [
          {
            title: t("sidebar.gettingStarted.userGuide"),
            url: "user-guide/",
            children: [
              {
                title: t("sidebar.gettingStarted.setup"),
                url: "user-guide/setup",
              },
              {
                title: t("sidebar.gettingStarted.faucet"),
                url: "user-guide/faucet",
              },
              {
                title: t("sidebar.gettingStarted.bridge"),
                url: "user-guide/bridge",
              },
              {
                title: t("sidebar.gettingStarted.transferTokens"),
                url: "user-guide/transfer-tokens",
              },
              {
                title: t("sidebar.gettingStarted.commonErrors"),
                url: "user-guide/common-errors",
              },
            ],
          },
          { title: t("sidebar.gettingStarted.rollupExplorer"), url: "https://scroll.io/alpha/rollupscan" },
          { title: t("sidebar.gettingStarted.alphaBlockExplorer"), url: "https://blockscout.scroll.io/" },
          { title: t("sidebar.gettingStarted.goerliBlockExplorer"), url: "https://goerli.etherscan.io/" },
        ],
      },
      {
        section: t("sidebar.gettingStarted.community"),
        contents: [
          {
            title: "Discord",
            url: "https://discord.gg/scroll",
          },
          {
            title: t("sidebar.gettingStarted.communityForum"),
            url: "https://community.scroll.io/",
          },
        ],
      },
    ],
    developers: [
      {
        section: "Developers",
        contents: [
          { title: t("sidebar.developers.buildingOnScroll"), url: "developers" },
          { title: t("sidebar.developers.developerQuickstart"), url: "developers/developer-quickstart" },
          { title: t("sidebar.developers.alphaTestnetContracts"), url: "developers/alpha-testnet-contracts" },
          { title: t("sidebar.developers.integrations"), url: "developers/integrations" },
          {
            title: t("sidebar.developers.ethereum&AlphaTestnetDifferences"),
            url: "developers/ethereum-and-alpha-testnet-differences",
          },
        ],
      },
      {
        section: "Guides",
        contents: [
          {
            title: t("sidebar.developers.contractDeploymentTutorial"),
            url: "developers/guides/contract-deployment-tutorial",
          },
        ],
      },
      {
        section: "Resources",
        contents: [
          { title: t("sidebar.developers.rollupExplorer"), url: "https://scroll.io/alpha/rollupscan" },
          { title: t("sidebar.developers.alphaBlockExplorer"), url: "https://blockscout.scroll.io/" },
          { title: t("sidebar.developers.goerliBlockExplorer"), url: "https://goerli.etherscan.io/" },
        ],
      },
    ],
    technology: [
      {
        section: t("sidebar.technology.overview"),
        contents: [
          {
            title: t("sidebar.technology.scrollArchitecture"),
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
        contents: [{ title: t("sidebar.learn.zkEVMOverview"), url: "/" }],
      },
      {
        section: "Section",
        contents: [
          {
            title: t("sidebar.learn.zkEVMOverview"),
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
            title: t("sidebar.infrastructure.introduction"),
            url: "",
          },
        ],
      },
    ],
  }
}
