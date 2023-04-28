import IconTabs from './IconTabs'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'

import pink from '../../public/dripping-pink.png'

export default function Navbar() {
  return (
    <>
      <div className={styles.Navbar}>
        <IconTabs />
        <Image src={pink} alt='pink' className={styles.img} />
      </div>
    </>
  )
}