/** @jsxImportSource preact */
import h from "preact"
import { useState } from "preact/hooks"
import { clsx } from "~/lib"
import tabs from "./Tabs.module.css"
import { ProductCard } from "./ProductCard"
import solanaIcon from "../assets/solana-chains.svg"
import ethereumIcon from "../assets/evm-chains.svg"
import { evmProducts, solanaProducts } from "../data"

export const Tabs = () => {
  const [tabId, setTabId] = useState("evm-products")

  return (
    <>
      <ul class={tabs.navTabs}>
        <li class={clsx({ [tabs.activeTab]: tabId === "evm-products" })} onClick={() => setTabId("evm-products")}>
          <a href="#evm-products">
            <img src={ethereumIcon} width={24} height={24} alt="EVM Chains" />
            EVM Chains
          </a>
        </li>
        <li class={clsx({ [tabs.activeTab]: tabId === "solana-products" })} onClick={() => setTabId("solana-products")}>
          <a href="#solana-products">
            <img src={solanaIcon} width={24} height={24} alt="Solana" />
            Solana
          </a>
        </li>
      </ul>
      <div class={tabs.tabContent}>
        <div
          id="evm-products"
          class={clsx(tabs.tabPane, {
            [tabs.active]: tabId === "evm-products",
          })}
        >
          {evmProducts.map((props) => (
            <div class={tabs.tabElement}>
              <ProductCard {...props} />
            </div>
          ))}
        </div>
        <div
          id="solana-products"
          class={clsx(tabs.tabPane, {
            [tabs.active]: tabId === "solana-products",
          })}
        >
          {solanaProducts.map((props) => (
            <div class={tabs.tabElement}>
              <ProductCard {...props} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
