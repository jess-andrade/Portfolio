
import styles from '../styles/About.module.css'
import { useState } from 'react'

export default function About() {

  return (
    <section id='about'>
      <div className={styles.containerAbout}>
        <div className={styles.textContainer}>
          <div className={styles.textContent}>
            <h1>About me</h1>
            <p>I'm Brazilian, I have a degree in informatics and I was studying Computer Engineering in Brazil but I had to move to Italy a few months ago. I would like an opportunity to start my career as a Front end developer so that I can acquire and share knowledge.</p>
          </div>
        </div>
      </div>
    </section>
  )
}