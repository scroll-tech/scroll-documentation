/* eslint-disable no-unused-vars */

import { providers } from "ethers"
import { SupportedChain } from "."

export const chainToProvider: Record<SupportedChain, () => providers.Provider> = {
  ETHEREUM_GOERLI: () => new providers.InfuraProvider("goerli", "2070724f1a144563b15b1641fe14e257"),
  SCROLL_PREALPHA_L1: () => new providers.JsonRpcProvider("https://prealpha-rpc.scroll.io/l1"),
  SCROLL_PREALPHA_L2: () => new providers.JsonRpcProvider("https://prealpha-rpc.scroll.io/l2"),
}
