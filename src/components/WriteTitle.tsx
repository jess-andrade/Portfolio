import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

interface WriteProps {
  fullText: string,
  className: any,
}
export default function WriteTitle({ fullText, className }: WriteProps) {
  const [text, setText] = useState(''); // write text
  const [end, setEnd] = useState(false); // 'end' the underline_  animation

  const write = (text: string, i = 0) => {
    if (i < text.length) {
      setText(text.slice(0, i + 1));
      setTimeout(() => write(text, i + 1), 200);
    }
    if (i >= text.length) {
      setEnd(true);
    }
  }

  useEffect(() => {
    setTimeout(() => write(fullText.slice(1)));
  }, []);

  return (
    <div>
      <span className={className}>{`${fullText[0]}${text}`}{end ? <span className={styles.blink2_}>_</span> : <span className={styles.blink_}>_</span>}</span>
    </div>
  )
}
