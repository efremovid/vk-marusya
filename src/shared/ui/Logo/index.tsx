 import iconLogo from '../../icons/logo.svg'
 import styles from './styles.module.scss'


const Logo = () => {
  return (
    <div className={styles.container}>
        <img src={iconLogo} alt="" />
        <h2>маруся</h2>
    </div>
  )
}

export default Logo