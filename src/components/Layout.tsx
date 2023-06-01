import Head from 'next/head';
import { ThemeProvider } from '@mui/material';

import Navbar from './Navbar';

import { createTheme } from '@mui/material';
import { getDesignTokens } from '@/utils/theme';
import { useColorModeContext } from '@/context/colorModeContext';

type LayoutProps = {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {

  const { mode } = useColorModeContext();

  const theme = createTheme(
    getDesignTokens(mode)
  )

  console.log(theme)
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className='container-global'>
          <main className='main-container'>
            <Navbar />
            {children}
          </main>
        </div>
      </ThemeProvider>
    </>
  )
}