import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

interface ButtonProps {
  children: any,
  href: string,
}

export default function MyButton({ href, children }: ButtonProps) {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <a href={href}>
        <Fab color="secondary" aria-label="add">
          {children}
        </Fab>
      </a>
    </Box>
  );
}