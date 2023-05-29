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
            title: t("sidebar.gettingStarted.discord"),
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
        section: t("sidebar.technology.architecture"),
        contents: [
          {
            title: t("sidebar.technology.scrollArchitecture"),
            url: "technology/architecture/scroll-architecture",
          },
          {
            title: t("sidebar.technology.principles"),
            url: "technology/architecture/principles",
          },
        ],
      },
      {
        section: t("sidebar.technology.zkevm"),
        contents: [
          {
            title: t("sidebar.technology.introToZkevm"),
            url: "technology/zkevm/intro-to-zkevm",
          },
          {
            title: t("sidebar.technology.zkevmOverview"),
            url: "technology/zkevm/zkevm-overview",
          },
        ],
      },
      {
        section: t("sidebar.technology.bridge"),
        contents: [
          {
            title: t("sidebar.technology.bridgeOverview"),
            url: "technology/bridge/bridge-overview",
          },
          {
            title: t("sidebar.technology.proofValidation"),
            url: "technology/bridge/proof-validation",
          },
        ],
      },
      {
        section: t("sidebar.technology.sequencer"),
        contents: [
          {
            title: t("sidebar.technology.executionClient"),
            url: "technology/sequencer/execution-client",
          },
          {
            title: t("sidebar.technology.zkTrie"),
            url: "technology/sequencer/zktrie",
          },
          {
            title: t("sidebar.technology.syncService"),
            url: "technology/sequencer/sync-service",
          },
        ],
      },
      {
        section: t("sidebar.technology.prover"),
        contents: [
          {
            title: t("sidebar.technology.proofGeneration"),
            url: "technology/prover/proof-generation",
          },
          {
            title: t("sidebar.technology.cpuProverRepo"),
            url: "https://github.com/",
          },
        ],
      },
    ],
    learn: [
      {
        section: t("sidebar.learn.ethereumAndProtocols"),
        contents: [
          {
            title: t("sidebar.learn.theScalabilityProblem"),
            url: "learn/the-scalability-problem",
          },
          {
            title: t("sidebar.learn.introToRollups"),
            url: "learn/intro-to-rollups",
          },
        ],
      },
      {
        section: t("sidebar.learn.zeroKnowledge"),
        contents: [
          {
            title: t("sidebar.learn.polynomialCommitmentSchemes"),
            url: "learn/zero-knowledge/polynomial-commitment-schemes",
          },
          {
            title: t("sidebar.learn.zkgCommitmentScheme"),
            url: "learn/zero-knowledge/kzg-commitment-scheme",
          },
        ],
      },
    ],
  }
}
