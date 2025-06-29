import React from 'react'
import "./Hero.css"
import { useState,useRef,useEffect } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import version from "../../assets/version.png"
import { useScroll, useTransform } from "framer-motion"
const rightcontainervariants={
  initial:{
    y:-30,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:2,
      staggerChildren:0.5
    }
  }
}
const childvariants={
  initial:{
    y:20,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:1
    }
  }
}
const leftvariants={
  initial:{
    x:-200,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:2,
    }
  }
}


const Hero = () => {
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

    <div className='herocontainer' ref={containerRef}>
      <div ref={lightRef} className="cursor-light"/>

      <div className="content">
        <motion.div className='right' variants={leftvariants} initial="initial" animate="animate">
          {/* <motion.img src={version} className="version" style={{ scale} } alt="" /> */}
          <div className='name'>
            <div className='upper'>Version Beta</div>
            <div className='lower'>8.0</div>
          </div>
        </motion.div>
        <motion.div className="left" variants={rightcontainervariants} initial="initial" animate="animate" exit={{opacity:0}}>
          <motion.div className='title' variants={childvariants}>Crack the Code. Claim the Glory.</motion.div>
          <motion.div className='subtitle' variants={childvariants}>Welcome to Version Beta 8.0</motion.div>
          <motion.p className='desc' variants={childvariants}>Enter the arena where bugs fall, and coders rise! Where every error fuels your next breakthrough!</motion.p>
        </motion.div>
      </div>
        <motion.div className="register">Register Now for Version Beta 8.0</motion.div>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }} animate={{x:[20,0],opacity:[0,1]}} transition={{duration:2}} className='btn'>Apply with Devfolio</motion.button>
    </div>
  )
}

export default Hero
