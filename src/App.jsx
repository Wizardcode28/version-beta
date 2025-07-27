import { useEffect, useState,useRef } from 'react'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import Schedule2 from "./components/schedule2/Schedule2"
import Prizes from "./components/prizes/Prizes"
import Gallery from "./components/gallery/Gallery"
import Gallery2 from "./components/gallery2/Gallery2"
import Gallery3 from "./components/gallery3/Gallery3"
import Sponsors from "./components/sponsors/Sponsors"
import Faqs from "./components/faqs/Faqs"
import Footer from "./components/Footer.jsx"

function App() {
  useEffect(() => {
    AOS.init({
      duration:1000,
      once:true
    })
  },[])
  
const lightRef = useRef(null)
const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const light = lightRef.current

    const handleMouseMove = (e) => {
      if (container && light) {
        const rect = container.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        light.style.left = `${x}px`
        light.style.top = `${y}px`
        light.style.opacity = 1
      }
    }

    const handleMouseLeave = () => {
      if (light) {
        light.style.opacity = 0
      }
    }

    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])
  return (
    <div className='maincontainer' ref={containerRef}>
      <div ref={lightRef} className="cursor-light"/>
      <Navbar/>
      <Hero/>
      <About/>
      <div className='transition-bridge'></div>
      {/* <Schedule/> */}
      <Schedule2/>
      <Prizes/>
      {/* <Gallery/> */}
      {/* <Gallery2/> */}
      <Gallery3/>
      <Sponsors/>
      <Faqs/>
<<<<<<< HEAD
      {/* <Contact/> */}
=======
>>>>>>> a600cd183a643a6498e268fddd565c4727eb5fb0
      <Footer/>
    </div>
  )
}

export default App
