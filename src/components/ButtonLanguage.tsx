import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { useLanguageContext } from '@/context/languageContext';

export default function ButtonLanguage() {

  const { language, setLanguage } = useLanguageContext();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group">
        <Button onClick={() => setLanguage('en-US')} disabled={language == 'en-US'}>en</Button>
        <Button onClick={() => setLanguage('pt-BR')} disabled={language == 'pt-BR'}>pt</Button>
        <Button onClick={() => setLanguage('it-IT')} disabled={language == 'it-IT'}>it</Button>
      </ButtonGroup>

    </Box>
  );
}