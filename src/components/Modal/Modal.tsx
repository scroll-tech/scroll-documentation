import React from "react"
import styles from "./Modal.module.css"
import FocusTrap from "focus-trap-react"
import { createPortal } from "react-dom"
import { useKeyPress } from "~/hooks/useKeyPress"
import { useEffect } from "preact/hooks"
import { clsx } from "~/lib"

export function Modal({
  children,
  isOpen,
  onClose,
  style,
  modalId,
}: {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
  style?: Record<string, any>
  modalId?: string
}) {
  useKeyPress("Escape", { onDown: onClose })

  return (
    <>
      {isOpen &&
        createPortal(
          <FocusTrap>
            <div>
              <div className={styles.overlay} onClick={onClose}></div>
              <div id={modalId} className={clsx(styles.modal)} tabIndex={0} style={style}>
                {children}
              </div>
            </div>
          </FocusTrap>,
          document.body
        )}
    </>
  )
}
