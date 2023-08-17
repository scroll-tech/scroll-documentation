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
            url: "https://sepolia-blockscout.scroll.io/",
          },
          { title: t("sidebar.gettingStarted.sepoliaBlockExplorer"), url: "https://sepolia.etherscan.io/" },
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
        section: "Developers",
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
        ],
      },
      {
        section: "Guides",
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
        section: "Resources",
        contents: [
          { title: t("sidebar.developers.rollupExplorer"), url: "https://scroll.io/rollupscan" },
          { title: t("sidebar.developers.scrollSepoliaBlockExplorer"), url: "https://sepolia-blockscout.scroll.io/" },
          { title: t("sidebar.developers.sepoliaBlockExplorer"), url: "https://sepolia.etherscan.io/" },
        ],
      },
    ],
    technology: [
      {
        section: "Overview",
        contents: [{ title: t("Scroll Architecture"), url: formatUrl("technology") }],
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
  }
}
