import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <span>😕</span>
      <h1>Вибачте, нічого не знайдено.</h1>
      <p className={styles.description}>
        Ця сторінка відсутьня в нашому інтернет магазині
      </p>
    </div>
  )
}
export default NotFoundBlock
