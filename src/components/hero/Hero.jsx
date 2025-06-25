import React from 'react'
import "./Hero.css"
import { AnimatePresence, motion } from "framer-motion"
import version from "../../assets/version.png"
import { useScroll, useTransform } from "framer-motion"
import { useState,useEffect,useRef } from 'react'
const leftcontainervariants={
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
const rightvariants={
  initial:{
    x:200,
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
const { scrollYProgress } = useScroll();
const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
useEffect(() => {
  const handleMouseMove = (e) => {
    setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 50,
      y: (e.clientY / window.innerHeight - 0.5) * 50,
    });
  };
  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);

  return (

    <div className='herocontainer'>
      <div className="content">
        {/* <AnimatePresence> */}
        <motion.div className="left" variants={leftcontainervariants} initial="initial" animate="animate" exit={{opacity:0}}>
          <motion.div className='title' variants={childvariants}>Crack the Code. Claim the Glory.</motion.div>
          <motion.div className='subtitle' variants={childvariants}>Welcome to Version Beta 8.0</motion.div>
          <motion.p className='desc' variants={childvariants}>Enter the arena where bugs fall, and coders rise! Where every logic error fuels your next breakthrough!</motion.p>
        </motion.div>
        {/* </AnimatePresence> */}
        <motion.div className='right' variants={rightvariants} initial="initial" animate="animate">
          <motion.img src={version} className="version" style={{ scale} } alt="" />
        </motion.div>
      </div>
        <motion.div className="register">Register Now for Version Beta 8.0</motion.div>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }} animate={{x:[20,0],opacity:[0,1]}} transition={{duration:2}} className='btn'>Apply with Devfolio</motion.button>
    </div>
  )
}

export default Hero
