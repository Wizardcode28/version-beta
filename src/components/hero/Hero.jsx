import React from 'react'
import "./Hero.css"
import { useRef,useEffect } from 'react'
import { motion } from "framer-motion"
import version from "../../assets/version.png"
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

  return (
    <div className='herocontainer herofade'>
      
        <div className="content">
        <motion.div className='left' variants={leftvariants} initial="initial" animate="animate">
          <motion.img src={version} className="version" alt="" />
          {/* <div className='name'>
            <div className='upper'>Version Beta</div>
            <div className='lower'>8.0</div>
          </div> */}
        </motion.div>
        <motion.div className="right" variants={rightcontainervariants} initial="initial" animate="animate" exit={{opacity:0}}>
          <motion.div className='title' variants={childvariants}>Crack the Code. Claim the Glory.</motion.div>
          <motion.div className='subtitle' variants={childvariants}>Welcome to Version Beta 8.0</motion.div>
          <motion.p className='desc' variants={childvariants}>Enter the arena where bugs fall, and coders rise! Where every error fuels your next breakthrough!</motion.p>
        </motion.div>
      </div>
      
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }} animate={{x:[20,0],opacity:[0,1]}} transition={{duration:1}} className='btn'>Apply with Devfolio</motion.button>
        <div className="lowercontent">
          <div className="countdown">
          <div className='time'>20</div>
          <div className='colon'>:</div>
          <div className='time'>13</div>
          <div className='colon'>:</div>
          <div className='time'>45</div>
          <div className='colon'>:</div>
          <div className='time'>55 </div>
          </div>
          <div className="label">
          <div>Days</div>
          <div>Hours</div>
          <div>Minutes</div>
          <div>Seconds</div>
          </div>
        </div>
    </div>
  )
}

export default Hero
