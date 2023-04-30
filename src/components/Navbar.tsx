import IconTabs from './IconTabs'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'

import milk from '../../public/milk.png'

export default function Navbar() {
  return (
    <>
      <div className={styles.Navbar}>
        <IconTabs />

      </div>
    </>
  )
}