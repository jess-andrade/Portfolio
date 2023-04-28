import IconTabs from './IconTabs'
import styles from '../styles/Navbar.module.css'
import Menu from './Menu'

export default function Navbar() {
  return (
    <>
      <div className={styles.Navbar}>
        <IconTabs />
      </div>
    </>
  )
}