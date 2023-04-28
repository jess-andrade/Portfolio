import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import me from '../../public/me.png'
import { Button } from '@mui/material'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1 className={styles.title}>Hey, welcome! I'm</h1>
        <span className={styles.name}>Jessica Andrade</span>
        <p>Front End Dev</p>

        <ul>
          <li className={styles.button}><Button color="primary" href='https://github.com/jess-andrade'>GitHub</Button></li>
          <li className={styles.button}><Button color="secondary">Download CV</Button></li>
        </ul>

      </div >
      <div className={styles.profile}>
        <Image className={styles.img} src={me} alt='my photo' />
      </div>
    </div>
  )
}
