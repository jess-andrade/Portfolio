import Head from 'next/head';


import Footer from './Footer';
import SimplePaper from './SimplePaper';
import Navbar from './Navbar';
import About from '@/pages/About';


type LayoutProps = {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="" />
        <title>Jessica's Portifolio</title>
      </Head>

      <div className='container-global'>
        <Navbar />
        <main className='main-container'>

          {children}
          <About />
        </main>

      </div>
    </>
  )
}