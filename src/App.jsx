import { useEffect, useState } from 'react'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import Schedule from "./components/schedule/Schedule"
import Prizes from "./components/prizes/Prizes"
import Gallery from "./components/gallery/Gallery"
import Sponsors from "./components/sponsors/Sponsors"
import Faqs from "./components/faqs/Faqs"
import Contact from "./components/contact/Contact"

function App() {
  useEffect(() => {
    AOS.init({
      duration:1000,
      once:true
    })
  },[])
  

  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Schedule/>
      <Prizes/>
      <Gallery/>
      <Sponsors/>
      <Faqs/>
      <Contact/>
    </div>
  )
}

export default App
