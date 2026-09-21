import { FloatingActions } from '../components/FloatingActions/FloatingActions'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { About } from '../sections/About/About'
import { Contact } from '../sections/Contact/Contact'
import { Experience } from '../sections/Experience/Experience'
import { Expertise } from '../sections/Expertise/Expertise'
import { Hero } from '../sections/Hero/Hero'
import { Projects } from '../sections/Projects/Projects'
import { Services } from '../sections/Services/Services'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Expertise />
        <Services />
        <Contact />
        <Footer />
        <FloatingActions />
      </main>
    </>
  )
}

export default App