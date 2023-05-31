import styles from "../styles/About.module.css";

import { useState } from "react";
import Image from "next/image";

import DownButton from "./DownButton";
import SkillsBar from "./SkillsBar";
import MoreInfo from "./MoreInfo";

import avatar from "../../public/avatar.png";
import avatar2 from "../../public/avatar2.png";
import jess from "../../public/photo.png";

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Pagination } from '@mui/material'
import FlagCircleIcon from '@mui/icons-material/FlagCircle';

import { motion } from "framer-motion"

export default function About() {
  const [changeAvatar, setChangeAvatar] = useState(false);

  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <section id="about">
      <div className={styles.containerAbout}>
        <div className={styles.aboutWrapper}>
          <div
            className={styles.avatarContainer}
            onMouseLeave={() => {
              setChangeAvatar(false);
            }}
            onMouseEnter={() => {
              setChangeAvatar(true);
            }}
          >
            <Image
              className={styles.avatar}
              src={avatar}
              alt="avatar"
              style={changeAvatar ? { display: "none" } : { display: "block" }}
            />
            <Image
              className={styles.avatar}
              src={avatar2}
              alt="avatar"
              style={changeAvatar ? { display: "block" } : { display: "none" }}
            />
          </div>

          <div className={styles.textContainer}>
            <div className={styles.textContent}>

              <div className={styles.page} style={page == 1 ? { display: 'block' } : { display: 'none' }} >
                <h1><AccountBoxIcon /> &gt; About me__</h1>
                <p className={styles.text}>I am Brazilian, 24 years old, and have a deep passion for technology since my childhood. This interest
                  initially sparked through my interest in video games and robotics competitions.  I completed the high school with a technical diploma
                  in informatics and I went to University to study Computer Engineering but I didn't finish because I had to move to Italy a few months ago</p>
              </div>
              <div className={styles.page2} style={page == 2 ? { display: 'block' } : { display: 'none' }} >
                <h1><FlagCircleIcon /> &gt; My Goal__</h1>
                <p className={styles.text}> My main objective is <b>to kickstart my career as a Front End developer</b>. I am fully aware that there is a great deal for
                  me to learn and numerous skills to acquire. Therefore, I am determined to invest 102% of my effort and dedication to achieve this goal. </p>
              </div>
              <Pagination count={2} color="primary" onChange={handleChange} />

            </div>
          </div>

          <SkillsBar />
          <MoreInfo />

          <motion.div whileTap={{ scale: 1.3 }}>
            <Image className={styles.img} src={jess} alt='jessica' />
          </motion.div>
        </div>

        <div className={styles.downButton}>
          <DownButton href="#projects" />
        </div>
      </div>

    </section >
  )
}
