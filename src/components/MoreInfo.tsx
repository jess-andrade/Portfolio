import styles from "../styles/MoreInfo.module.css";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import DoneIcon from "@mui/icons-material/Done";
import { useLanguageContext } from "@/context/languageContext";
import texts from "@/content/texts";

export default function MoreInfo() {
  const { language } = useLanguageContext();

  const contentText = texts[language]["about"];

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>

        <div className={styles.text}>
          <SchoolIcon fontSize="small" color="primary" />
          <b> • {contentText["educationTitle"]}: </b>
          <p dangerouslySetInnerHTML={{ __html: contentText["education"] }}></p>
        </div>{" "}
        <br />

        <div className={styles.text}>
          <FmdGoodIcon fontSize="small" color="primary" /> <b>•</b> {contentText["location"]}{" "}
        </div>{" "}
        <br />

        <div className={styles.text}>
          <WorkIcon fontSize="small" color="primary" />
          <b> • {contentText["employmentTitle"]}:</b>{" "}
          {contentText["employment"]} <DoneIcon sx={{ color: "green" }} />
        </div>
      </div>
    </div>
  );
}
