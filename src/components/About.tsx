import styles from '../styles/About.module.css'
import { useState } from 'react'
import Image from 'next/image'
import DownButton from './DownButton'

import avatar from '../../public/avatar.png'
import avatar2 from '../../public/avatar2.png'

export default function About() {

  const [changeAvatar, setChangeAvatar] = useState(false)

  return (
    <section id='about'>
      <div className={styles.containerAbout}>
        <div className={styles.aboutWrapper}>

          <div className={styles.textContainer}>
            <div className={styles.textContent}>
              <h1>About me</h1>
              <p>I'm Brazilian, I have a degree in informatics and I was studying Computer Engineering in Brazil but I had to move to Italy a few months ago. I would like an opportunity to start my career as a Front end developer so that I can acquire and share knowledge.</p>
            </div>
            <div className={styles.avatarContainer} onMouseLeave={() => { setChangeAvatar(false) }} onMouseEnter={() => { setChangeAvatar(true) }}>
              <Image className={styles.avatar} src={avatar} alt='avatar' style={changeAvatar ? { display: 'none' } : { display: 'block' }} />
              <Image className={styles.avatar} src={avatar2} alt='avatar' style={changeAvatar ? { display: 'block' } : { display: 'none' }} />
            </div>
          </div>
          <div className={styles.downButton}>
            <DownButton href='#projects' />
          </div>

        </div>
      </div>
    </section>
  )
}