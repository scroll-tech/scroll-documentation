import styles from "./SectionHeader.module.css"

const SectionHeader = (props) => {
  const { title, description } = props
  return (
    <div>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default SectionHeader
