import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface DownButtonProps {
  href: string,
}

export default function DownButton({ href }: DownButtonProps) {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <a href={href}>
        <Fab color="secondary" aria-label="add">
          <ExpandMoreIcon />
        </Fab>
      </a>
    </Box>
  );
}