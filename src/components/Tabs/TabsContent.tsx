/** @jsxImportSource preact */
import type { ComponentChild } from "preact"
import { useRef } from "preact/hooks"
import { useTabState } from "./useTabState"
import styles from "./Tabs.module.css"
import { clsx } from "~/lib"
const tabSlotKey = "tab." as const
const panelSlotKey = "panel." as const

type TabSlot = `${typeof tabSlotKey}${string}`
type PanelSlot = `${typeof panelSlotKey}${string}`

function isTabSlotEntry(entry: [string, ComponentChild]): entry is [TabSlot, ComponentChild] {
  const [key] = entry
  return key.startsWith(tabSlotKey)
}

function isPanelSlotEntry(entry: [string, ComponentChild]): entry is [PanelSlot, ComponentChild] {
  const [key] = entry
  return key.startsWith(panelSlotKey)
}

function getBaseKeyFromTab(slot: TabSlot) {
  return slot.replace(new RegExp(`^${tabSlotKey}`), "")
}

function getBaseKeyFromPanel(slot: PanelSlot) {
  return slot.replace(new RegExp(`^${panelSlotKey}`), "")
}

type Props = {
  [key: TabSlot | PanelSlot]: ComponentChild
  sharedStore?: string
}

export function TabsContent({ sharedStore, ...slots }: Props) {
  const tabs = Object.entries(slots).filter(isTabSlotEntry)
  const panels = Object.entries(slots).filter(isPanelSlotEntry)

  /** Used to focus next and previous tab on arrow key press */
  const tabButtonRefs = useRef<Record<TabSlot, HTMLButtonElement | null>>({})

  const firstPanelKey = panels[0] ? getBaseKeyFromPanel(panels[0][0]) : ""
  const [curr, setCurrStore] = useTabState(firstPanelKey, sharedStore)

  function moveFocus(event: KeyboardEvent) {
    if (event.key === "ArrowLeft") {
      const currIdx = tabs.findIndex(([key]) => getBaseKeyFromTab(key) === curr)
      if (currIdx > 0) {
        const [prevTabKey] = tabs[currIdx - 1]
        setCurrStore(getBaseKeyFromTab(prevTabKey))
        tabButtonRefs.current[prevTabKey]?.focus()
      }
    }
    if (event.key === "ArrowRight") {
      const currIdx = tabs.findIndex(([key]) => getBaseKeyFromTab(key) === curr)
      if (currIdx < tabs.length - 1) {
        const [nextTabKey] = tabs[currIdx + 1]
        setCurrStore(getBaseKeyFromTab(nextTabKey))
        tabButtonRefs.current[nextTabKey]?.focus()
      }
    }
  }

  return (
    <div className={styles.contentContainer}>
      <div role="tablist" class={clsx(styles.tablist, "dark:border-white-800")} onKeyDown={moveFocus}>
        {tabs.map(([key, content]) => (
          <button
            ref={(el) => (tabButtonRefs.current[key] = el)}
            onClick={() => {
              setCurrStore(getBaseKeyFromTab(key))
            }}
            aria-selected={curr === getBaseKeyFromTab(key)}
            tabIndex={curr === getBaseKeyFromTab(key) ? 0 : -1}
            role="tab"
            type="button"
            data-astro-tab
            id={key}
            key={key}
            class={clsx(
              curr === getBaseKeyFromTab(key) ? styles.contentTabPrimary : styles.contentTabSecondary,
              styles.contentTab,
              "dark:text-white-800"
            )}
          >
            {content}
          </button>
        ))}
      </div>
      {panels.map(([key, content]) => (
        <div
          hidden={curr !== getBaseKeyFromPanel(key)}
          role="tabpanel"
          aria-labelledby={`${tabSlotKey}${getBaseKeyFromPanel(key)}`}
          key={key}
          class={styles.panel}
        >
          {content}
        </div>
      ))}
    </div>
  )
}
