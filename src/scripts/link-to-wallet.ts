// import { MetaMaskInpageProvider } from "@metamask/providers"
// import detectEthereumProvider from "@metamask/detect-provider"
import { BigNumberish, ethers } from "ethers"
import { Web3Provider } from "@ethersproject/providers"
// import LinkToken from "@chainlink/contracts/abi/v0.4/LinkToken.json"
// import chains from "./reference/chains.json"
// import linkNameSymbol from "./reference/linkNameSymbol.json"
import buttonStyles from "../styles/design-system/button.module.css"

// disable unnecessary warnings
ethers.utils.Logger.setLogLevel(ethers.utils.Logger.levels.ERROR)

const chainlinkLogo =
  "https://assets-global.website-files.com/5f6b7190899f41fb70882d08/5fa973e31adbc3414aa8f77d_Chainlink-webclip.png"

const separator = "_"
const addressPattern = "0x[0-9a-fA-F]{40}"
const hexStringPattern = "(0x|0X)[a-fA-F0-9]+"
// Test to follow this pattern: chainId_address (e.g.: 1_0x514910771af9ca656af840dff83e8264ecf986ca)
const pattern = new RegExp(`^[0-9]+${separator}${addressPattern}$`)
const linkToken = {
  name: "ChainLink Token",
  symbol: "LINK",
  decimals: 18,
}
const addToWalletText = "Add to wallet"
const switchToNetworkText = "Switch network and add to wallet"
const initChainChangeEventName = "InitChainChange"

/**
 * Converts a nulber to HexString (a string which has a 0x prefix followed by any number of nibbles (i.e. case-insensitive hexadecimal characters, 0-9 and a-f).)
 */
const toHex = ethers.utils.hexValue

/**
 * Check that the format of ethereum address is valid
 * @param address Ethereum address
 * @returns boolean true if format is valid. False otherwise
 */
const isAddressFormatValid = (address: string): boolean => {
  const pattern = new RegExp(`^${addressPattern}$`)
  return pattern.test(address)
}

/**
 * Check that the format of a chainId is hexString
 * (a string which has a 0x prefix followed by any number of nibbles (i.e. case-insensitive hexadecimal characters, 0-9 and a-f).))
 * @param chainId
 * @returns boolean: true if chainId is hexString. False otherwise
 */
const isChainIdFormatValid = (chainId: string): boolean => {
  const pattern = new RegExp(`^${hexStringPattern}$`)
  return pattern.test(chainId)
}

interface AddToWalletParameters {
  type: string
  address: string
  symbol: string
  decimals: number
  image?: string
}

interface AddEthereumChainParameter {
  chainId: string
  blockExplorerUrls?: string[]
  chainName?: string
  iconUrls?: string[]
  nativeCurrency?: {
    name: string
    symbol: string
    decimals: number
  }
  rpcUrls?: string[]
}

interface ProviderRpcError extends Error {
  message: string
  code: number
  data?: unknown
}

const defaultWalletParameters: AddToWalletParameters = {
  type: "ERC20",
  address: "",
  symbol: linkToken.symbol,
  decimals: linkToken.decimals,
  image: chainlinkLogo,
}

/**
 * Validate that the in page ethereum provider is loaded
 * @param ethereum : InPageProvider
 */
const validateEthereumApi = (ethereum: MetaMaskInpageProvider) => {
  if (!ethereum || !ethereum.isMetaMask) {
    throw new Error(`Something went wrong. Add to wallet is called while an ethereum object not detected.`)
  }
}

/**
 *  Add asset (e.g.: Link token) to wallet
 * @param ethereum inpage provider (e.g.: provider loaded by Metamask)
 * @param parameters
 */
const addAssetToWallet = async (ethereum: MetaMaskInpageProvider, parameters: AddToWalletParameters) => {
  validateEthereumApi(ethereum)
  const success = await ethereum.request({
    method: "wallet_watchAsset",
    params: {
      type: parameters.type,
      options: {
        address: parameters.address,
        symbol: parameters.symbol,
        decimals: parameters.decimals,
        image: parameters.image,
      },
    },
  })

  if (success) {
    console.log(`${parameters.symbol} of address ${parameters.address} successfully added to the wallet`)
  } else {
    throw new Error(
      `Something went wrong. ${parameters.symbol} of address ${parameters.address} not added to the wallet`
    )
  }
}

/**
 * Call this function to make the wallet switch to the desired chain
 * @param chainId designed chain in HexString
 * @param ethereum ethereum inpage provider (e.g.: provider loaded by Metamask)
 */
const switchToChain = async (chainId: string, ethereum: MetaMaskInpageProvider) => {
  if (!isChainIdFormatValid(chainId)) {
    throw new Error(`chainId '${chainId}' must be hexString`)
  }
  validateEthereumApi(ethereum)
  await ethereum.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId }],
  })
  console.log(`Succesfully switched to chain ${chainId} in metamask`)
}

/**
 * Call this function to add a new chain to the wallet. Should only be called if the chain doesn't exist already in the wallet
 * @param chainId designed chain in HexString
 * @param ethereum ethereum in page provider (e.g.: provider loaded by Metamask)
 */
const addChainToWallet = async (chainId: string, ethereum: MetaMaskInpageProvider) => {
  if (!isChainIdFormatValid(chainId)) {
    throw new Error(`chainId '${chainId}' must be hexString`)
  }
  validateEthereumApi(ethereum)

  const chain = chains.find((c: any) => toHex(c.chainId) === chainId)
  if (!chain || !chain.chainId) {
    throw new Error(`Chain with chainId '${chainId}' not found in reference data`)
  }

  const params: AddEthereumChainParameter = {
    chainId,
    chainName: chain.name,
    nativeCurrency: chain?.nativeCurrency,
    blockExplorerUrls:
      chain.explorers && chain.explorers.length > 0 && chain.explorers[0].url
        ? chain.explorers.map((explorer: any) => explorer.url)
        : [chain.infoURL],
    rpcUrls: chain.rpc,
  }

  const [signerAddress] = (await ethereum.request({
    method: "eth_requestAccounts",
  })) as string[]
  await ethereum.request({
    method: "wallet_addEthereumChain",
    params: [params, signerAddress],
  })
  console.log(`Chains ${chainId} of params ${JSON.stringify(params)} succesfully added to wallet`)
}

/**
 * Functions which validates the format of Link address and interacts with the contract to make sure
 * its metadata (e.g.: symbol) is valid
 * @param address
 * @param provider
 */
const validateLinkAddress = async (address: string, provider: Web3Provider) => {
  if (!isAddressFormatValid(address)) {
    throw new Error(`Something went wrong. format of address '${address}' not correct`)
  }

  // The Contract object
  const linkContract = new ethers.Contract(address, LinkToken, provider)
  let name: string, symbol: string, decimals: BigNumberish
  try {
    name = await linkContract.name()
    symbol = await linkContract.symbol()
    decimals = await linkContract.decimals()
  } catch (error) {
    throw new Error(`Error occured while trying to fetch linkContract metadata  ${error}`)
  }

  let chainId: keyof typeof linkNameSymbol
  if (Object.keys(linkNameSymbol).includes(provider.network.chainId.toString())) {
    chainId = provider.network.chainId.toString() as keyof typeof linkNameSymbol
  } else {
    throw new Error(`Error chain ${provider.network.chainId} not found in reference data`)
  }

  const linkAttributes = linkNameSymbol[chainId]
  if (!linkAttributes || !linkAttributes.name || !linkAttributes.symbol) {
    throw new Error(`Error linkContract attributes. data ${linkAttributes} for chain ${chainId} corrupted`)
  }
  if (name !== linkAttributes.name) {
    throw new Error(`Error linkContract name. '${name}' !== '${linkAttributes.name}'`)
  }
  if (symbol !== linkAttributes.symbol) {
    throw new Error(`Error linkContract symbol. '${symbol}' !== '${linkAttributes.symbol}'`)
  }
  if (linkToken.decimals !== decimals) {
    throw new Error(`Error linkContract decimals. '${linkToken.decimals}' !== '${decimals}'`)
  }
}

try {
  const ethereum = (await detectEthereumProvider()) as MetaMaskInpageProvider
  // Support only Metamask extension for now.
  if (!ethereum || !ethereum.isMetaMask) throw Error()

  const provider = new ethers.providers.Web3Provider(ethereum as any, "any")

  let detectedChainId: string | number | null = (await ethereum.request({
    method: "eth_chainId",
  })) as string | null
  if (!detectedChainId) {
    console.error(`Something went wrong. Wallet detected but chain not detected`)
    throw Error()
  }
  detectedChainId = toHex(parseInt(detectedChainId))
  if (!isChainIdFormatValid(detectedChainId)) {
    console.error(`Something went wrong. format of detectedChainId '${detectedChainId}' not hexString`)
    throw Error()
  }

  // Detect when user initiates the chain switch from the webapp
  // variable chainFromSwitch used to differentiate when user switch the chain
  // directly from wallet
  let chainFromSwitch: string
  window.addEventListener(initChainChangeEventName, (evt: any) => {
    chainFromSwitch = toHex(parseInt(evt.detail?.chainId))
    if (!isChainIdFormatValid(chainFromSwitch)) {
      console.error(`Something went wrong. format of chainFromSwitch '${chainFromSwitch}' not hexString`)
    }
  })

  // Reload the page if the user changes the Chain.
  // Only reload the page if the user initiates the switch directly from wallet
  ethereum.on("chainChanged", (chainId) => {
    if (chainId !== detectedChainId && chainFromSwitch !== chainId) {
      window.location.reload()
    }
  })

  const tokenAddressElements = Array.from(document.getElementsByClassName("erc-token-address"))

  tokenAddressElements.forEach((element) => {
    const id = element.id
    // Make sure it has the right format.
    if (!pattern.test(id)) {
      if (!id) {
        console.error(`Element's id cannot be null/empty if its class is erc-token-address `)
      } else {
        console.error(`Format of id ${id} not correct. Format should follow the pattern chainId_address`)
      }
      return
    }
    let [chainId, address] = id.split(separator)
    chainId = toHex(parseInt(chainId))
    if (!isChainIdFormatValid(chainId)) {
      console.error(`Something went wrong. format of chainId '${chainId}' not hexString`)
      return
    }

    const button = document.createElement("button")
    button.className = `${buttonStyles.secondary} linkToWalletBtn`
    button.style.marginLeft = "10px"
    button.style.fontSize = "12px"
    button.style.padding = "4px"
    const parameters: AddToWalletParameters = {
      ...defaultWalletParameters,
      address,
    }

    if (chainId === detectedChainId) {
      // Insert add wallet button only for the detected chainId.
      button.innerText = addToWalletText
      button.onclick = async () => {
        try {
          await validateLinkAddress(address, provider)
          addAssetToWallet(ethereum, parameters)
        } catch (error) {
          console.error(error)
        }
      }
    } else {
      button.innerText = switchToNetworkText
      button.title = `Switch to network ${chainId} before adding the Link token`
      button.onclick = async () => {
        window.dispatchEvent(
          new CustomEvent(initChainChangeEventName, {
            detail: {
              chainId,
            },
          })
        )
        try {
          await switchToChain(chainId, ethereum)
        } catch (switchError) {
          if ((switchError as ProviderRpcError).code === 4902) {
            // This error code indicates that the chain has not been added to MetaMask.
            try {
              await addChainToWallet(chainId, ethereum)
            } catch (error) {
              console.error(`Error happened when adding chain ${chainId} to metamask`, error)
              return
            }
          } else {
            console.error(`Error happened when switching to chain ${chainId} to metamask`, switchError)
            return
          }
        }

        try {
          await validateLinkAddress(address, provider)
          addAssetToWallet(ethereum, parameters)
        } catch (error) {
          console.error(error)
        }
        // Make sure the page is reloaded after the asset is loaded to the wallet
        window.location.reload()
      }
    }
    element.insertAdjacentElement("afterend", button)
  })
} catch (e) {
  console.error(e)
}
