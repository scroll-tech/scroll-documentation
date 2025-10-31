import i18next, { t } from "i18next"

const formatUrl = (url) => `${i18next.language}/${url}`

export const getSidebar = () => {
  return {
    developers: [
      {
        section: t("sidebar.developers.developers"),
        contents: [
          { title: t("sidebar.developers.faq"), url: formatUrl("developers") },
          { title: t("sidebar.developers.buildingOnScroll"), url: formatUrl("developers/building-on-scroll") },
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
            title: t("sidebar.developers.developerEcosystem"),
            url: formatUrl("developers/developer-ecosystem"),
          },
        ],
      },
      {
        section: t("sidebar.developers.guides"),
        contents: [
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
            title: t("sidebar.developers.auditingYourCode"),
            url: formatUrl("developers/guides/auditing-your-code"),
          },
          {
            title: t("sidebar.developers.transactionJourney"),
            url: formatUrl("developers/guides/checking-transaction-journey"),
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
            url: formatUrl("technology/overview/scroll-upgrades"),
            children: [
              {
                title: t("sidebar.technology.feynmanUpgrade"),
                url: formatUrl("technology/overview/scroll-upgrades/feynman-upgrade"),
              },
              {
                title: t("sidebar.technology.euclidUpgrade"),
                url: formatUrl("technology/overview/scroll-upgrades/euclid-upgrade"),
              },
              {
                title: t("sidebar.technology.darwinV2Upgrade"),
                url: formatUrl("technology/overview/scroll-upgrades/darwin-v2-upgrade"),
              },
              {
                title: t("sidebar.technology.darwinUpgrade"),
                url: formatUrl("technology/overview/scroll-upgrades/darwin-upgrade"),
              },
              {
                title: t("sidebar.technology.curieUpgrade"),
                url: formatUrl("technology/overview/scroll-upgrades/curie-upgrade"),
              },
              {
                title: t("sidebar.technology.bernoulliUpgrade"),
                url: formatUrl("technology/overview/scroll-upgrades/bernoulli-upgrade"),
              },
            ],
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
    community: [
      {
        section: t("sidebar.community.community"),
        contents: [
          {
            title: t("sidebar.community.faq"),
            url: "community/faq",
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
