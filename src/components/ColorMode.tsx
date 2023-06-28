// import * as React from 'react';
// import IconButton from '@mui/material/IconButton';
// import Box from '@mui/material/Box';
// import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
// import { useColorModeContext } from '@/context/colorModeContext';

// const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

// type ColorModeProps = {
//   disabled: boolean,
// }

// export default function ColorMode({ disabled }: ColorModeProps) {

//   const theme = useTheme();
//   const { mode, setMode } = useColorModeContext();

//   const toggleColorMode = () => {
//     setMode(mode === 'light' ? 'dark' : 'light');
//     console.log(mode);
//   }

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         width: '100%',
//         alignItems: 'center',
//         justifyContent: 'center',
//         color: 'text.primary',
//         borderRadius: 1,
//       }}
//     >
//       <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit" disabled>
//         {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
//       </IconButton>
//     </Box>
//   );
// }



