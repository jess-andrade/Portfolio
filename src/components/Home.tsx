import styles from '../styles/Home.module.css'

import Image from 'next/image'
import { useState } from 'react'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import { Button } from '@mui/material'

import me3 from '../../public/me2.png'

import TechIcons from './TechIcons';
import DownButton from './DownButton';
import WriteTitle from './WriteTitle';

import { motion } from "framer-motion"


export default function Home() {

  const [rotateImg, setRotateImg] = useState(0)

  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "/cv-jessica-andrade.pdf";
    link.download = "cv-jessica-andrade.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section id='home'>

        <div className={styles.globalContainer}>
          <div className={styles.container}>
            <div className={styles.homeWrapper}>

              <div className={styles.intro}>

                <h1 className={styles.title}>Front End Developer</h1>
                <WriteTitle className={styles.name} fullText='Jessica Andrade' />
                <p>
                  Hey, welcome to my Portfolio 👾<br /> I'm a software developer living in Milan, Italy
                </p>

                <div className={styles.buttonsContainer}>
                  <Button className={styles.button} color="primary" href='https://github.com/jess-andrade' > <GitHubIcon fontSize="medium" />  </Button>
                  <Button className={styles.button} color="primary" href='https://www.linkedin.com/in/jess-andradec/' > <LinkedInIcon fontSize="medium" />  </Button>
                  <Button className={styles.buttonCv} onClick={downloadFile}> <DownloadIcon fontSize="medium" /> Download CV </Button>
                </div>

              </div>

              <TechIcons />
            </div>
            <motion.div
              className={styles.profile}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: [0, 360]
              }}
              transition={{
                duration: 1.1,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <div
                className={styles.imgLink}
                onMouseLeave={() => { setRotateImg(0) }} onMouseEnter={() => { setRotateImg(-32) }}>
                <Image className={styles.img} src={me3} alt='my photo' style={{ transform: `rotate(${rotateImg}deg)`, transition: 'transform 150ms ease' }} priority={false} /></div>
            </motion.div>


          </div>

          <div className={styles.downButton}>
            <DownButton href='#about' />
          </div>
        </div>

      </section >
    </>

  )
}
