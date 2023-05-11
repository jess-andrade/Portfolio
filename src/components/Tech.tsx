import styles from '../styles/Home.module.css'
import Image from 'next/image'

import { useState } from 'react'

interface TechProps {
  imgSrc: any,
  altText: string
}

export default function Tech(props: TechProps) {

  const [size, setSize] = useState(30)

  return (
    <Image className={styles.icon} src={props.imgSrc} alt={props.altText} onMouseLeave={() => { setSize(30) }} onMouseEnter={() => { setSize(36) }} style={{ width: `${size}px`, height: `${size}px` }} />
  )
}