import styles from "../styles/Projects.module.css";

import Card from "./Card";
import DownButton from "./DownButton";

import pokedex from "../../public/projects/pokedex.png";
import portfolio from "../../public/projects/portfolio.png";
import catcinema from "../../public/projects/catcinema.png";
import wip from "../../public/wip.png";
import hermes from "../../public/hermes.png";
import dreamland from "../../public/dreamland.png";
import kuromi from "../../public/projects/Fancy.png"
import torabox from "../../public/projects/torabox.png"

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
import tailwind from "../../public/icons/tailwind.png";

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
                title="This Portfolio 🩷"
                src={portfolio}
                alt="- -portfolio "
                description={contentText["portfolioDescription"]}
                href="https://github.com/jess-andrade/Portfolio"
                view="https://www.jess-andrade.com/"
                techs={[next, ts]}
              />
            </motion.div>

            <motion.div
              className={styles.box}
              whileHover={{ scale: [null, 1.0, 1.1] }}
              transition={{ duration: 0.3 }}
            >
              <Card
                title="ToraBox"
                src={torabox}
                alt="- -CatCinema "
                description={contentText["toraboxDescription"]}
                href="https://github.com/jess-andrade/torabox"
                view="https://torabox.vercel.app/"
                techs={[next, ts]}
              />
            </motion.div>

            <motion.div
              className={styles.box}
              whileHover={{ scale: [null, 1.0, 1.1] }}
              transition={{ duration: 0.3 }}
            >
              <Card
                title="Kuromi's Minesweeper"
                src={kuromi}
                alt="- -kuromi"
                description={contentText["kuromiDescription"]}
                href="https://github.com/jess-andrade/Mines"
                view=""
                techs={[react, js]}
                viewDisabled
              />
            </motion.div>

            <motion.div
              className={styles.box}
              whileHover={{ scale: [null, 1.0, 1.1] }}
              transition={{ duration: 0.3 }}
            >
              <Card
                title="Histórias para dormir"
                src={dreamland}
                alt="- -dreamland"
                description={contentText["dreamlandDescription"]}
                href="https://github.com/jess-andrade/dreamland"
                view="https://play.google.com/store/apps/details?id=com.torabox.app"
                techs={[react, ts, tailwind]}
              />
            </motion.div>

            <motion.div
              className={styles.box}
              whileHover={{ scale: [null, 1.0, 1.1] }}
              transition={{ duration: 0.3 }}
            >
              <Card
                title="Hermes"
                src={hermes}
                alt="- -hermes"
                description={contentText["hermesDescription"]}
                href="https://github.com/jess-andrade/Hermes"
                view="https://hermes-omega.vercel.app/"
                techs={[next, mui, ts, tailwind]}
                viewDisabled
              />
            </motion.div>

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



          </div>
        </div>
      </div>

      <div className={styles.downButton}>
        <DownButton href="#contact" />
      </div>
    </section>
  );
}
