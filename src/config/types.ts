// export type SupportedTechnology =
//   | "ETHEREUM"
//   | "BNB"
//   | "POLYGON"
//   | "RSK"
//   | "GNOSIS"
//   | "AVALANCHE"
//   | "FANTOM"
//   | "ARBITRUM"
//   | "HECO"
//   | "OPTIMISM"
//   | "HARMONY"
//   | "MOONRIVER"
//   | "MOONBEAM"
//   | "METIS"
//   | "KLAYTN"

export type SupportedChain = "ETHEREUM_GOERLI" | "SCROLL_PREALPHA_L1" | "SCROLL_PREALPHA_L2"

// export type Chains = Record<
//   SupportedTechnology,
//   {
//     title: string
//     chains: Partial<
//       Record<
//         SupportedChain,
//         {
//           chainId: number
//           title: string
//           explorer: string
//         }
//       >
//     >
//   }
// >
