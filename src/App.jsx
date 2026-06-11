import './App.css'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import WhatsAppButton from './components/common/WhatsAppButton'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Services from './components/pages/Services'
import Projects from './components/pages/Projects'
import Skills from './components/pages/Skills'
import Contact from './components/pages/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </>
  )
}

export default App
