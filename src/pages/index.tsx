import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import me from '../../public/me.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1 className={styles.title}>Hey, welcome! I'm</h1>
        <span className={styles.name}>Jessica Andrade</span>
        <p>Front End Dev</p>

        <ul>
          <li className={styles.button}><a href='https://github.com/jess-andrade'>GitHub</a></li>
          <li className={styles.button}><a href=''>Download CV</a></li>
        </ul>

      </div >
      <div className={styles.profile}>
        <Image className={styles.img} src={me} alt='my photo' />
      </div>
    </div>
  )
}
