import React from "react"
import styles from "./IntegrationItem.module.css"

// TODO: write sidebar name of page

type ToolingData = {
  name: string
  logo?: string
  url: string
  network: string[]
  comment?: string
  tags?: string[]
  guide?: string
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
          {data.logo && (<img src={data.logo} className={styles.logo}/>)}
          <div className={styles.name}>{data.name}</div>
        </div>
        <a href={data.url}>
          <img src={"../../svgs/home-link-arrow.svg"} className={styles.url}/>
        </a>
      </div>

      <div className={styles.comment}>{data.comment}</div>

      {data.guide && (
        <a href={data.guide}>
          <div className={styles.tutorial}>TUTORIAL</div>
        </a>
      )}

      <div className={styles.network}>NETWORK</div>
      <div>{networkList}</div>

      <div className={styles.flexRow} style={{marginTop: "25px", flexWrap:"wrap"}}>
        {data.tags && data.tags.map((tag) => <div className={styles.tag}>{tag}</div>)}
      </div>
    </div>
  )
}