import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Footer } from '../components/Footer/Footer'
import { FloatingActions } from '../components/FloatingActions/FloatingActions'
import { Header } from '../components/Header/Header'

import { Privacy } from '../pages/Privacy/Privacy'
import { Terms } from '../pages/Terms/Terms'

import { About } from '../sections/About/About'
import { Contact } from '../sections/Contact/Contact'
import { Experience } from '../sections/Experience/Experience'
import { Expertise } from '../sections/Expertise/Expertise'
import { Hero } from '../sections/Hero/Hero'
import { Projects } from '../sections/Projects/Projects'
import { Services } from '../sections/Services/Services'

function Home() {
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
      </main>

      <Footer />
      <FloatingActions />
    </>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  )
}