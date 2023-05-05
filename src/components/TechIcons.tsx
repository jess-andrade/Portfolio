import styles from '../styles/Home.module.css'

import html from '../../public/icons/html.png'
import css from '../../public/icons/css-3.png'
import js from '../../public/icons/js.png'
import react from '../../public/icons/react.png'
import ts from '../../public/icons/typescript.png'
import next from '../../public/icons/next.png'
import mui from '../../public/icons/logo.png'
import figma from '../../public/icons/figma.png'
import express from '../../public/icons/express.png'
import node from '../../public/icons/node.png'
import mysql from '../../public/icons/mysql.png'
import ps from '../../public/icons/ps.png'

import Tech from './Tech'


export default function TechIcons() {

  return (

    <div className={styles.techContainer}>
      <p><b>Tech stacks | </b></p>
      <div className={styles.tech}>
        <Tech imgSrc={html} altText='html-icon' />
        <Tech imgSrc={css} altText='css-icon' />
        <Tech imgSrc={js} altText='javascript-icon' />
        <Tech imgSrc={ts} altText='typescript-icon' />
        <Tech imgSrc={react} altText='react-icon' />
        <Tech imgSrc={next} altText='next-icon' />
        <Tech imgSrc={mui} altText='mui-icon' />
        <Tech imgSrc={figma} altText='figma-icon' />
        <Tech imgSrc={express} altText='express-icon' />
        <Tech imgSrc={node} altText='node-icon' />
        <Tech imgSrc={mysql} altText='mysql-icon' />
        <Tech imgSrc={ps} altText='photoshop-icon' />
      </div>
    </div >
  )

}