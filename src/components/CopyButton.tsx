import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { Alert } from '@mui/material';

interface ButtonProps {
  children: any,
  onClickProps: { text: string, alertText: string, setAlertState?: any },
}

export default function CopyButton({ onClickProps, children }: ButtonProps) {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add" onClick={() => { navigator.clipboard.writeText(onClickProps.text); onClickProps.setAlertState(onClickProps.alertText) }}>
        {children}
      </Fab>
    </Box>
  );
}