import styles from "../styles/SkillsBar.module.css";
import { LinearProgress } from "@mui/material";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import { useState } from "react";
import { useLanguageContext } from "@/context/languageContext";
import texts from "@/content/texts";

export default function SkillsBar() {
  const { language } = useLanguageContext();

  const contentText = texts[language]["about"];

  const [portuguese, setPortugueseStatus] = useState(0);
  const [english, setEnglishStatus] = useState(0);
  const [italian, setItalianStatus] = useState(0);

  const fillBar = () => {
    setPortugueseStatus(100);
    setTimeout(() => {
      setEnglishStatus(56);
    }, 200);
    setTimeout(() => {
      setItalianStatus(85);
    }, 400);
  };

  return (
    <div className={styles.container} onMouseEnter={fillBar}>
      <p className={styles.skillsTitle}>
        <GTranslateIcon /> &gt; {contentText["languagesTitle"]}{" "}
      </p>

      <div className={styles.skillsContainer}>
        <p className={styles.title}>{contentText["portuguese"]} </p>
        <LinearProgress
          variant="determinate"
          valueBuffer={100}
          onMouseEnter={() => {
            setPortugueseStatus(100);
          }}
          value={portuguese}
        />
        <p className={styles.title}>{contentText["english"]} </p>
        <LinearProgress
          variant="determinate"
          valueBuffer={100}
          onMouseEnter={() => {
            setEnglishStatus(56);
          }}
          value={english}
        />
        <p className={styles.title}>{contentText["italian"]} </p>
        <LinearProgress
          variant="determinate"
          valueBuffer={100}
          onMouseEnter={() => {
            setItalianStatus(85);
          }}
          value={italian}
        />
      </div>
    </div>
  );
}
