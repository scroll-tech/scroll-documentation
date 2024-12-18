import i18next, { t } from "i18next"

const formatUrl = (url) => `${i18next.language}/${url}`

export const getSidebar = () => {
  return {
    gettingStarted: [
      {
        section: t("sidebar.gettingStarted.gettingStarted"),
        contents: [{ title: t("sidebar.gettingStarted.overview"), url: "getting-started/overview" }],
      },
      {
        section: t("sidebar.gettingStarted.scrollSepoliaTestnet"),
        contents: [
          {
            title: t("sidebar.gettingStarted.userGuide"),
            url: formatUrl("user-guide/"),
            children: [
              {
                title: t("sidebar.gettingStarted.setup"),
                url: formatUrl("user-guide/setup"),
              },
              {
                title: t("sidebar.gettingStarted.faucet"),
                url: formatUrl("user-guide/faucet"),
              },
              {
                title: t("sidebar.gettingStarted.bridge"),
                url: formatUrl("user-guide/bridge"),
              },
              {
                title: t("sidebar.gettingStarted.transferTokens"),
                url: formatUrl("user-guide/transfer-tokens"),
              },
              {
                title: t("sidebar.gettingStarted.commonErrors"),
                url: formatUrl("user-guide/common-errors"),
              },
            ],
          },
          {
            title: t("sidebar.gettingStarted.scrollSepoliaBlockExplorer"),
            url: "https://sepolia.scrollscan.com/",
          },
          { title: t("sidebar.gettingStarted.sepoliaBlockExplorer"), url: "https://sepolia.etherscan.io/" },
          { title: t("sidebar.gettingStarted.rollupExplorer"), url: "https://sepolia.scroll.io/rollupscan" },
        ],
      },
      {
        section: t("sidebar.gettingStarted.scrollMainnet"),
        contents: [
          {
            title: t("sidebar.gettingStarted.scrollscan"),
            url: "https://scrollscan.com/",
          },
          { title: t("sidebar.gettingStarted.rollupExplorer"), url: "https://scroll.io/rollupscan" },
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
        section: t("sidebar.developers.developers"),
        contents: [
          { title: t("sidebar.developers.buildingOnScroll"), url: formatUrl("developers") },
          { title: t("sidebar.developers.developerQuickstart"), url: formatUrl("developers/developer-quickstart") },
          {
            title: t("sidebar.developers.verifyingSmartContracts"),
            url: formatUrl("developers/verifying-smart-contracts"),
          },
          {
            title: t("sidebar.developers.scrollContracts"),
            url: formatUrl("developers/scroll-contracts"),
          },
          {
            title: t("sidebar.developers.ethereumAndScrollDifferences"),
            url: formatUrl("developers/ethereum-and-scroll-differences"),
          },
          {
            title: t("sidebar.developers.l1AndL2Bridging"),
            url: formatUrl("developers/l1-and-l2-bridging"),
            children: [
              {
                title: t("sidebar.developers.ethAndErc20TokenBridge"),
                url: formatUrl("developers/l1-and-l2-bridging/eth-and-erc20-token-bridge"),
              },
              {
                title: t("sidebar.developers.erc721NftBridge"),
                url: formatUrl("developers/l1-and-l2-bridging/erc721-nft-bridge"),
              },
              {
                title: t("sidebar.developers.erc1155TokenBridge"),
                url: formatUrl("developers/l1-and-l2-bridging/erc1155-token-bridge"),
              },
              {
                title: t("sidebar.developers.theScrollMessenger"),
                url: formatUrl("developers/l1-and-l2-bridging/the-scroll-messenger"),
              },
            ],
          },
          {
            title: t("sidebar.developers.transactionFeesOnScroll"),
            url: formatUrl("developers/transaction-fees-on-scroll"),
            // children: [
            //   {
            //     title: t("sidebar.developers.l2Fee"),
            //     url: formatUrl("developers/transaction-fees-on-scroll/l2-fee"),
            //   },
            //   {
            //     title: t("sidebar.developers.l1Fee"),
            //     url: formatUrl("developers/transaction-fees-on-scroll/l1-fee"),
            //   },
            //   {
            //     title: t("sidebar.developers.gasOracle"),
            //     url: formatUrl("developers/transaction-fees-on-scroll/gas-oracle"),
            //   },
            //   {
            //     title: t("sidebar.developers.future"),
            //     url: formatUrl("developers/transaction-fees-on-scroll/future"),
            //   },
            // ],
          },
          {
            title: t("sidebar.developers.toolingDeployedOnScroll"),
            url: formatUrl("developers/tooling-deployed-on-scroll"),
          },
        ],
      },
      {
        section: t("sidebar.developers.guides"),
        contents: [
          {
            title: t("sidebar.developers.contractDeploymentTutorial"),
            url: formatUrl("developers/guides/contract-deployment-tutorial"),
          },
          {
            title: t("sidebar.developers.crossChainInteraction"),
            url: formatUrl("developers/guides/scroll-messenger-cross-chain-interaction"),
          },
          {
            title: t("sidebar.developers.bridgingERC20TokenThroughCustomGateway"),
            url: formatUrl("developers/guides/bridge-erc20-through-the-custom-gateway"),
          },
          {
            title: t("sidebar.developers.runningNode"),
            url: formatUrl("developers/guides/running-a-scroll-node"),
          },
          {
            title: t("sidebar.developers.canvasBadge"),
            url: formatUrl("developers/guides/canvas-badge-integration"),
          },
          // {
          //   title: t("sidebar.developers.bridgingERC721NftThroughCustomGateway"),
          //   url: formatUrl("developers/guides/"),
          // },
          // {
          //   title: t("sidebar.developers.bridgingERC1155ThroughCustomGateway"),
          //   url: formatUrl("developers/guides/"),
          // },
          // {
          //   title: t("sidebar.developers.estimatingGasAndTxFees"),
          //   url: formatUrl("developers/guides/"),
          // },
        ],
      },
      {
        section: t("sidebar.developers.mainnetResources"),
        contents: [
          { title: t("sidebar.developers.rollupExplorer"), url: "https://scroll.io/rollupscan" },
          { title: t("sidebar.developers.scrollBlockExplorer"), url: "https://scrollscan.com/" },
        ],
      },
      {
        section: t("sidebar.developers.sepoliaResources"),
        contents: [
          { title: t("sidebar.developers.sepoliaRollupExplorer"), url: "https://sepolia.scroll.io/rollupscan" },
          { title: t("sidebar.developers.scrollSepoliaBlockExplorer"), url: "https://sepolia.scrollscan.dev/" },
        ],
      },
    ],
    technology: [
      {
        section: t("sidebar.technology.overview"),
        contents: [
          { title: t("sidebar.technology.scrollArchitecture"), url: formatUrl("technology") },
          {
            title: t("sidebar.technology.scrollUpgrades"),
            url: "technology/overview/scroll-upgrades",
          },
        ],
      },
      {
        section: t("sidebar.technology.scrollChain"),
        contents: [
          {
            title: t("sidebar.technology.accountsAndState"),
            url: "technology/chain/accounts",
          },
          {
            title: t("sidebar.technology.transactions"),
            url: "technology/chain/transactions",
          },
          {
            title: t("sidebar.technology.blocks"),
            url: "technology/chain/blocks",
          },
          {
            title: t("sidebar.technology.rollupProcess"),
            url: "technology/chain/rollup",
          },
          {
            title: t("sidebar.technology.evmDifferencesFromEthereum"),
            url: "technology/chain/differences",
          },
        ],
      },
      {
        section: t("sidebar.technology.bridge"),
        contents: [
          {
            title: t("sidebar.technology.crossDomainMessaging"),
            url: "technology/bridge/cross-domain-messaging",
          },
          {
            title: t("sidebar.technology.depositGateways"),
            url: "technology/bridge/deposit-gateways",
          },
          {
            title: t("sidebar.technology.withdrawGateways"),
            url: "technology/bridge/withdraw-gateways",
          },
        ],
      },
      {
        section: t("sidebar.technology.sequencer"),
        contents: [
          {
            title: t("sidebar.technology.executionNode"),
            url: "technology/sequencer/execution-node",
          },
          {
            title: t("sidebar.technology.rollupNode"),
            url: "technology/sequencer/rollup-node",
          },
          {
            title: t("sidebar.technology.zkTrie"),
            url: "technology/sequencer/zktrie",
          },
        ],
      },
      //   {
      //     section: t("sidebar.technology.prover"),
      //     contents: [
      //       {
      //         title: t("sidebar.technology.proofGeneration"),
      //         url: "technology/prover/proof-generation",
      //       },
      //       {
      //         title: t("sidebar.technology.cpuProverRepo"),
      //         url: "https://github.com/",
      //       },
      //     ],
      //   },
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
        section: t("sidebar.technology.security"),
        contents: [
          {
            title: t("sidebar.technology.auditsAndBugBounty"),
            url: formatUrl("technology/security/audits-and-bug-bounty"),
          },
          // {
          //   title: t("sidebar.technology.risks"),
          //   url: formatUrl("technology/security/risks"),
          // },
          // {
          //   title: t("sidebar.technology.l2BeatAssessment"),
          //   url: "https://l2beat.com/scaling/projects/scroll",
          // },
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
            title: t("sidebar.learn.introToZeroKnowledge"),
            url: formatUrl("learn/zero-knowledge/introduction-to-zero-knowledge"),
          },
          {
            title: t("sidebar.learn.polynomialCommitmentSchemes"),
            url: formatUrl("learn/zero-knowledge/polynomial-commitment-schemes"),
          },
          {
            title: t("sidebar.learn.kzgCommitmentScheme"),
            url: formatUrl("learn/zero-knowledge/kzg-commitment-scheme"),
          },
          {
            title: t("sidebar.learn.additionalResources"),
            url: formatUrl("learn/zero-knowledge/additional-zk-learning-resources"),
          },
        ],
      },
    ],
    sdk: [
      {
        section: t("sidebar.sdk.overview"),
        contents: [
          {
            title: t("sidebar.sdk.scrollSdk"),
            url: "sdk/",
          },
          {
            title: t("sidebar.sdk.faq"),
            url: "sdk/sdk-faq",
          },
        ],
      },
      {
        section: t("sidebar.sdk.technicalStack"),
        contents: [
          {
            title: t("sidebar.sdk.stackOverview"),
            url: formatUrl("sdk/technical-stack/"),
          },
          {
            title: t("sidebar.sdk.configuration"),
            url: formatUrl("sdk/technical-stack/configuration"),
          },
          {
            title: t("sidebar.sdk.services"),
            url: formatUrl("sdk/technical-stack/services"),
          },
          {
            title: t("sidebar.sdk.smartContracts"),
            url: formatUrl("sdk/technical-stack/contracts"),
          },
          {
            title: t("sidebar.sdk.proofGeneration"),
            url: formatUrl("sdk/technical-stack/proof-generation"),
          },
          // {
          //   title: t("sidebar.sdk.integrations"),
          //   url: formatUrl("sdk/technical-stack/integrations"),
          // },
        ],
      },
      {
        section: t("sidebar.sdk.guides"),
        contents: [
          {
            title: t("sidebar.sdk.devnetDeployment"),
            url: formatUrl("sdk/guides/devnet-deployment"),
          },
          // {
          //   title: t("sidebar.sdk.productionDeployment"),
          //   url: formatUrl("sdk/guides/production-deployment"),
          // },
          {
            title: t("sidebar.sdk.digitalOcean"),
            url: formatUrl("sdk/guides/digital-ocean-alt-gas-token"),
          },
          {
            title: t("sidebar.sdk.awsDeployment"),
            url: formatUrl("sdk/guides/aws-deployment"),
          },
          {
            title: t("sidebar.sdk.customizingSdkComponents"),
            url: formatUrl("sdk/guides/customizing-sdk-components"),
          },
        ],
      },
      {
        section: t("sidebar.sdk.operation"),
        contents: [
          {
            title: t("sidebar.sdk.contractsVerification"),
            url: formatUrl("sdk/operation/contracts-verification"),
          },
          {
            title: t("sidebar.sdk.gasAndFees"),
            url: formatUrl("sdk/operation/gas-and-fees"),
          },
          {
            title: t("sidebar.sdk.monitoring"),
            url: formatUrl("sdk/operation/monitoring"),
          },
          {
            title: t("sidebar.sdk.upgrades"),
            url: formatUrl("sdk/operation/upgrades"),
          },
          {
            title: t("sidebar.sdk.troubleshooting"),
            url: formatUrl("sdk/operation/troubleshooting"),
          },
          {
            title: t("sidebar.sdk.security"),
            url: formatUrl("sdk/operation/security-and-recovery"),
          },
        ],
      },
    ],
  }
}
