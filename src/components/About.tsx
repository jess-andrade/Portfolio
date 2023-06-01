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
import { Pagination } from "@mui/material";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";

import { motion } from "framer-motion";

import { useLanguageContext } from "@/context/languageContext";
import texts from "@/content/texts";

export default function About() {
  const [changeAvatar, setChangeAvatar] = useState(false);
  const { language } = useLanguageContext();

  const contentText = texts[language]["about"];

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
              <div
                className={styles.page}
                style={page == 1 ? { display: "block" } : { display: "none" }}
              >
                <h1>
                  <AccountBoxIcon /> &gt; {contentText["titleAbout"]}
                </h1>
                <p className={styles.text}>{contentText["aboutMe"]}</p>
              </div>
              <div
                className={styles.page2}
                style={page == 2 ? { display: "block" } : { display: "none" }}
              >
                <h1>
                  <FlagCircleIcon /> &gt; {contentText["titleGoals"]}
                </h1>
                <p
                  dangerouslySetInnerHTML={{ __html: contentText["goals"] }}
                  className={styles.text}
                />
              </div>
              <Pagination count={2} color="primary" onChange={handleChange} />
            </div>
          </div>

          <SkillsBar />
          <MoreInfo />

          <motion.div whileTap={{ scale: 1.3 }}>
            <Image className={styles.img} src={jess} alt="jessica" />
          </motion.div>
        </div>

        <div className={styles.downButton}>
          <DownButton href="#projects" />
        </div>
      </div>
    </section>
  );
}
