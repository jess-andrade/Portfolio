import styles from "../styles/Card.module.css";

import Image from "next/image";
import { useState } from "react";

import pin from "../../public/pin.png";
import Tech from "./Tech";

import { Button } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CodeIcon from "@mui/icons-material/Code";
import { useLanguageContext } from "@/context/languageContext";
import texts from "@/content/texts";

interface CardProps {
  src: any;
  title: string;
  description: string;
  alt: string;
  href: string;
  view: string;
  techs?: any[];
}

export default function Card({
  src,
  title,
  description,
  alt,
  href,
  view,
  techs,
}: CardProps) {
  const { language } = useLanguageContext();

  const contentText = texts[language]["projects"];

  const [size, setSize] = useState(false);

  return (
    <>
      <div className={styles.ContainerPin}>
        {/* <Image className={styles.pin} src={pin} alt='pin' /> */}

        <div className={styles.CardContainer}>
          <div className={styles.CardInfo}>
            <p className={styles.title}>
              <b>{title}</b>
            </p>

            <div className={styles.CardImage}>
              <Image className={styles.banner} src={src} alt={alt} />
            </div>

            <div className={styles.TextContainer}>
              <p>{description}</p>
              <div className={styles.tech}>
                {techs
                  ? techs.map((tech, index) => (
                      <Tech key={index} imgSrc={tech} altText="" />
                    ))
                  : false}
              </div>
            </div>

            <div className={styles.buttons}>
              <Button size="small" href={href} className={styles.linkButton}>
                <CodeIcon />
                {contentText["code"]}
              </Button>
              <Button size="small" href={view} className={styles.linkButton}>
                <RemoveRedEyeIcon />
                {contentText["viewProject"]}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
