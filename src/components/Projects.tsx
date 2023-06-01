import styles from "../styles/Projects.module.css";

import Card from "./Card";
import DownButton from "./DownButton";

import pokedex from "../../public/projects/pokedex.png";
import costs from "../../public/projects/costs2.png";
import catcinema from "../../public/projects/catcinema.png";
import wip from "../../public/wip.png";

import html from "../../public/icons/html.png";
import css from "../../public/icons/css-3.png";
import js from "../../public/icons/js.png";
import react from "../../public/icons/react.png";
import ts from "../../public/icons/typescript.png";
import next from "../../public/icons/next.png";
import mui from "../../public/icons/logo.png";
import figma from "../../public/icons/figma.png";
import express from "../../public/icons/express.png";
import node from "../../public/icons/node.png";
import mysql from "../../public/icons/mysql.png";
import ps from "../../public/icons/ps.png";

import { motion } from "framer-motion";

import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import { useLanguageContext } from "@/context/languageContext";
import texts from "@/content/texts";

export default function Projects() {
  const { language } = useLanguageContext();

  const contentText = texts[language]["projects"];

  return (
    <section id="projects">
      <div className={styles.projectsContainer}>
        <div className={styles.projectsWrapper}>
          <h1 className={styles.name}>
            {" "}
            <CollectionsBookmarkIcon /> &gt; {contentText["titleProjects"]}
          </h1>

          <div className={styles.ProjectCards}>
            <motion.div
              className={styles.box}
              whileHover={{ scale: [null, 1.0, 1.1] }}
              transition={{ duration: 0.3 }}
            >
              <Card
                title="Pokedex"
                src={pokedex}
                alt="- -pokedex"
                description={contentText["pokedexDescription"]}
                href="https://github.com/jess-andrade/Pokedex"
                view="https://pokedex-jade-rho.vercel.app/"
                techs={[next, mui]}
              />
            </motion.div>

            <motion.div
              className={styles.box}
              whileHover={{ scale: [null, 1.0, 1.1] }}
              transition={{ duration: 0.3 }}
            >
              <Card
                title="Costs"
                src={costs}
                alt="- -costs "
                description={contentText["costsDescription"]}
                href="https://github.com/jess-andrade/costs"
                view="https://costs-self.vercel.app/"
                techs={[react, node]}
              />
            </motion.div>

            <motion.div
              className={styles.box}
              whileHover={{ scale: [null, 1.0, 1.1] }}
              transition={{ duration: 0.3 }}
            >
              <Card
                title="CatCinema"
                src={catcinema}
                alt="- -CatCinema "
                description={contentText["catcinemaDescription"]}
                href="https://github.com/jess-andrade/CatCinema"
                view="https://cat-cinema.vercel.app/"
                techs={[react, node]}
              />
            </motion.div>

            <motion.div
              className={styles.box}
              whileHover={{ scale: [null, 1.0, 1.1] }}
              transition={{ duration: 0.3 }}
            >
              <Card
                title={contentText["workInProgressTitle"]}
                src={wip}
                alt="- -wip"
                description={contentText["workInProgressDescription"]}
                href=""
                view=""
              />
            </motion.div>

            <motion.div
              className={styles.box}
              whileHover={{ scale: [null, 1.0, 1.1] }}
              transition={{ duration: 0.3 }}
            >
              <Card
                title={contentText["workInProgressTitle"]}
                src={wip}
                alt="- -wip"
                description={contentText["workInProgressDescription"]}
                href=""
                view=""
              />
            </motion.div>

            <motion.div
              className={styles.box}
              whileHover={{ scale: [null, 1.0, 1.1] }}
              transition={{ duration: 0.3 }}
            >
              <Card
                title={contentText["workInProgressTitle"]}
                src={wip}
                alt="- -wip"
                description={contentText["workInProgressDescription"]}
                href=""
                view=""
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className={styles.downButton}>
        <DownButton href="#contact" />
      </div>
    </section>
  );
}
