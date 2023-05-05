import { useEffect, useState } from 'react';

interface WriteProps {
  fullText: string,
  className: any,
}
export default function WriteTitle({ fullText, className }: WriteProps) {
  const [text, setText] = useState('');

  const write = (text: string, i = 0) => {
    if (i < text.length) {
      setText(text.slice(0, i + 1));
      setTimeout(() => write(text, i + 1), 200);
    }
  }

  useEffect(() => {
    setTimeout(() => write(fullText.slice(1)));
  }, []);

  return (
    <div>
      <span className={className}>{`${fullText[0]}${text}`}</span>
    </div>
  )
}
