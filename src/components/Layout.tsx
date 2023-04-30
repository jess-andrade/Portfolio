import Head from 'next/head';
import { ThemeProvider } from '@mui/material';

import Navbar from './Navbar';

import theme from '@/utils/theme';

type LayoutProps = {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="icon" href="" />
          <title>Jessica's Portifolio</title>
        </Head>

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