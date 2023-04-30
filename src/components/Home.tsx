import Image from 'next/image'
import styles from '../styles/Home.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


import me from '../../public/me.png'

import { Button } from '@mui/material'
import { useState } from 'react'
import Tech from './TechIcons'
import TechIcons from './TechIcons';
import DownButton from './DownButton';

export default function Home() {

  const [rotateImg, setRotateImg] = useState(0)

  return (

    <section id='home'>

      <div className={styles.container}>
        <div className={styles.homeWrapper}>

          <div className={styles.content}>
            <div className={styles.intro}>
              <h1 className={styles.title}>Front End Developer</h1>
              <span className={styles.name}>Jessica Andrade</span>
              <p> insert a cool description here, please
                insert a cool description here, please
                insert a cool description here, please
                insert a cool description here, please
              </p>

              <div className={styles.buttonsContainer}>
                <Button className={styles.button} color="primary" href='https://github.com/jess-andrade'> <GitHubIcon />  </Button>
                <Button className={styles.button} color="primary" href='https://github.com/jess-andrade'> <LinkedInIcon />  </Button>
              </div>

            </div >
            <TechIcons />
          </div>

          <div className={styles.profile}>
            {/* <Image className={styles.wstar} src={wstar} alt='a little white star' /> */}
            <div className={styles.imgLink} onMouseLeave={() => { setRotateImg(0) }} onMouseEnter={() => { setRotateImg(-32) }}><Image className={styles.img} src={me} alt='my photo' style={{ transform: `rotate(${rotateImg}deg)`, transition: 'transform 150ms ease' }} /></div>
            {/* <Image className={styles.wstar} src={wstar} alt='a little white star' /> */}
          </div>
        </div>

        <div className={styles.downButton}>
          <DownButton href='#about' />
        </div>

      </div>

    </section >
  )
}
