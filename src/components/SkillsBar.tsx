import styles from '../styles/SkillsBar.module.css'
import { LinearProgress } from '@mui/material';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import { useState } from 'react'


export default function SkillsBar() {


  const [portuguese, setPortugueseStatus] = useState(0)
  const [english, setEnglishStatus] = useState(0)
  const [italian, setItalianStatus] = useState(0)

  const fillBar = () => {
    setPortugueseStatus(100)
    setTimeout(() => {
      setEnglishStatus(56)
    }, 200);
    setTimeout(() => {
      setItalianStatus(85)
    }, 400);

  }

  return (

    <div className={styles.container} onMouseEnter={fillBar}>
      <p className={styles.skillsTitle}><GTranslateIcon /> &gt; Languages I speak__ </p>

      <div className={styles.skillsContainer}>
        <p className={styles.title}>Portuguese </p>
        <LinearProgress variant="determinate" valueBuffer={100} onMouseEnter={() => { setPortugueseStatus(100) }} value={portuguese} />
        <p className={styles.title}>English </p>
        <LinearProgress variant="determinate" valueBuffer={100} onMouseEnter={() => { setEnglishStatus(56) }} value={english} />
        <p className={styles.title}>Italian </p>
        <LinearProgress variant="determinate" valueBuffer={100} onMouseEnter={() => { setItalianStatus(85) }} value={italian} />

      </div>
    </div>
  )
}

