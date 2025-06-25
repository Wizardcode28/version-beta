import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import {motion} from "framer-motion"
const imgvariants={
  initial:{
    y:-20,
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
const ulvariants={
  initial:{
    opacity:0
  },
  animate:{
    opacity:1,
    transition:{
      delaychildren:0.5,
      staggerChildren:0.2
    } 
  }
}
const livariants={
  initial:{
    y:-20,
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
const Navbar = () => {
  return (
    <div className='navcontainer'>
      <div>
        <motion.img src={logo} variants={imgvariants} initial="initial" animate="animate" alt="" />
      </div>
      <motion.div className='nav'>
            <motion.ul variants={ulvariants} initial="initial" animate="animate" >
                <motion.li variants={livariants}>HOME</motion.li>
                <motion.li variants={livariants}>ABOUT</motion.li>
                <motion.li variants={livariants}>SCHEDULE</motion.li>
                <motion.li variants={livariants}>PRIZES</motion.li>
                <motion.li variants={livariants}>GALLERY</motion.li>
                <motion.li variants={livariants}>SPONSORS</motion.li>
                <motion.li variants={livariants}>FAQS</motion.li>
            </motion.ul>
      </motion.div>
    </div>
  )
}

export default Navbar
