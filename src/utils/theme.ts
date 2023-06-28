import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8c162a",
    },
    secondary: {
      main: "#ced1c0",
    },
  },
});

export default theme;

// export const getDesignTokens = (mode: string) => ({
//   palette: {
//     mode,
//     ...(mode === 'light'
//       ? {
//         primary: {
//           main: "#8c162a",
//           light: '#fff',
//           darker: '#053e85',
//         },
//         secondary: {
//           main: "#ced1c0",
//           light: '#fff',
//           darker: '#222',
//         }
//       }
//       : {
//         primary: {
//           main: "#8c162a",
//           darker: '#053e85',
//         },
//         secondary: {
//           main: "#f00",
//           darker: '#053e85',
//         }
//       }),
//   },
// });
// // export const theme = createTheme({
// //   palette: {
// //     primary: {
// //       main: "#8c162a",
// //     },
// //     secondary: {
// //       main: "#ced1c0",
// //     },
// //   },
// // });

