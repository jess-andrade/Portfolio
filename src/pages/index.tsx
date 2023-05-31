import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Home from '@/components/Home'
import Layout from '@/components/Layout'
import Projects from '@/components/Projects'

export default function HomePage() {
  return (
    <Layout>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Layout>
  );
}
