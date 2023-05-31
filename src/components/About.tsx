import styles from "../styles/About.module.css";

import { useState } from "react";
import Image from "next/image";

import DownButton from "./DownButton";
import SkillsBar from "./SkillsBar";
import MoreInfo from "./MoreInfo";

import avatar from "../../public/avatar.png";
import avatar2 from "../../public/avatar2.png";
import jess from "../../public/photo.png";

import AccountBoxIcon from "@mui/icons-material/AccountBox";

export default function About() {
  const [changeAvatar, setChangeAvatar] = useState(false);

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
              <h1>
                <AccountBoxIcon /> {">"} About me__
              </h1>
              <p>
                I'm Brazilian and I've been passionate about technology since I
                was a child, this interest starts with video games and then
                robotics. I completed school with a technical diploma in
                informatics and I went to University to study Computer
                Engineering but I didn't finish because I had to move to Italy a
                few months ago
              </p>
            </div>
          </div>

          <SkillsBar />
          <MoreInfo />
          <Image className={styles.img} src={jess} alt="jessica" />
        </div>

        <div className={styles.downButton}>
          <DownButton href="#projects" />
        </div>
      </div>
    </section>
  );
}
