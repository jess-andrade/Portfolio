import About from '@/components/About'
import Home from '@/components/Home'
import Layout from '@/components/Layout'
import Head from 'next/head'

export default function HomePage() {

  return (
    <Layout>
      <Home />
      <About />
    </Layout>
  )
}
