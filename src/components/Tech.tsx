import styles from '../styles/Home.module.css'

import Image from 'next/image'

import { motion } from "framer-motion";

import { useState } from 'react'

interface TechProps {
  imgSrc: any,
  altText: string,
  animation?: boolean
}

export default function Tech({ imgSrc, altText, animation = false }: TechProps) {

  const [size, setSize] = useState(30)

  if (animation) {
    return (
      <motion.div
        className={styles.box}
        whileHover={{ scale: [null, 1.0, 1.3] }}
        transition={{ duration: 0.05 }}>
        <Image className={styles.icon} src={imgSrc} alt={altText} />
      </motion.div >
    )
  }
  else {
    return (
      <Image className={styles.icon} src={imgSrc} alt={altText} />
    )
  }
}