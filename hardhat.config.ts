// This configuration file sets up the paths and compilers so we can test our solidity samples

import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"

const config: HardhatUserConfig = {
  paths: {
    root: "./",
    sources: "./public/samples",
    cache: "./.test/cache",
    artifacts: "./.test/artifacts",
  },
  solidity: {
    compilers: [
      { version: "0.4.24" },
      { version: "0.6.6" },
      { version: "0.6.12" },
      { version: "0.7.6" },
      { version: "0.8.7" },
      { version: "0.8.6" },
    ],
  },
}

export default config
