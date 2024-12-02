import styles from '../Styles/Drags.module.css'

export const Drags = () => {
  return (
    <div className={styles.containerGeneralElements}>
      <label className={styles.titleGeneralElements}>Add General Element</label>
      <div className={styles.generalElements}>
        <div className={styles.generalElement}>Element 1</div>
        <div className={styles.generalElement}>Element 2</div>
        <div className={styles.generalElement}>Element 3</div>
        <div className={styles.generalElement}>Element 4</div>
        <div className={styles.generalElement}>Element 5</div>
        <div className={styles.generalElement}>Element 6</div>
      </div>
    </div>
  )
}
