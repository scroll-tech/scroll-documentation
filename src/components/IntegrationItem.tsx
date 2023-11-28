import React from "react"
import styles from "./IntegrationItem.module.css"

// TODO: write sidebar name of page

type ToolingData = {
  name: string
  logo?: string
  network: string[]
  comment?: string
  tags?: string[]
}

enum Networks {
  sepolia = "Sepolia",
  mainnet = "Mainnet"
}

export function IntegrationItem({
  data
}: {
  data: ToolingData
}) {

  // TODO: check that the network string is in the enum
  const networkList = data.network.length === 1 ? Networks[data.network[0]] : 
    data.network.reduce((x, y) => Networks[x] + ", " + Networks[y])

  return (
    <div className={styles.container}>
      <div className={styles.flexRow} style={{justifyContent: "space-between"}}>
        <div className={styles.flexRow}>
          <img src={data.logo} className={styles.logo}/>
          <div className={styles.name}>{data.name}</div>
        </div>
        <img src={"../../svgs/home-link-arrow.svg"} className={styles.url}/>
      </div>
      <div className={styles.comment}>{data.comment}</div>
      <div className={styles.network}>NETWORK</div>
      <div>{networkList}</div>
      <div className={styles.flexRow} style={{marginTop: "25px", flexWrap:"wrap"}}>
        {data.tags && data.tags.map((tag) => <div className={styles.tag}>{tag}</div>)}
      </div>
    </div>
  )
}