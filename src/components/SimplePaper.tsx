import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Image from 'next/image';

import styles from '../styles/Layout.module.css';
import me from '../../public/me.jpeg'


type SimplePaperProps = {
  children: React.ReactNode;
}

export default function SimplePaper({ children }: SimplePaperProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 1000,
          height: 400,
        },
      }}
    >
      <Paper elevation={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap ', bgcolor: '#202124;' }} >
        <div className={styles.paperContent}>
          <Image src={me} alt='my photo' className={styles.img} />
          <div className={styles.paperText}>
            <p>texto aqui texto aqui texto aqui texto aqui texto aqui texto aqui texto aqui texto aqui texto aqui texto aqui texto aqui texto aqui texto aqui texto aqui texto aqui texto aqui texto aqui texto aqui texto aqui texto aqui texto aqui texto aqui texto aqui texto aqui texto aqui texto aqui texto aqui </p>
          </div>
          {/* {children} */}
        </div>

      </Paper>
    </Box>
  );
}