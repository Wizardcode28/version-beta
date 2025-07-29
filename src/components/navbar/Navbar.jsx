import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import logo from "../../assets/newlogo.png";
import { motion } from "framer-motion";

const imgvariants = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 1 } }
};

const ulvariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const livariants = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 1 } }
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Add/remove a class to the body to prevent scrolling when the menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('body-no-scroll');
    } else {
      document.body.classList.remove('body-no-scroll');
    }

    // Cleanup function to remove the class if the component unmounts
    return () => {
      document.body.classList.remove('body-no-scroll');
    };
  }, [menuOpen]);

  return (
    <div className='navcontainer'>
      <div className="navcontent">
        {/* Logo for desktop view */}
        <div className="desktop-logo">
          <motion.img src={logo} variants={imgvariants} initial="initial" animate="animate" className='istelogo' alt="logo" />
        </div>

        {/* The navigation menu for mobile and desktop */}
        <motion.div className={`nav ${menuOpen ? "active" : ""}`}>
           {/* Logo for mobile view */}
           <div className="mobile-logo">
              <img src={logo} className='istelogo' alt="logo" />
            </div>
          <motion.ul variants={ulvariants} initial="initial" animate="animate">
            <motion.li variants={livariants}>HOME</motion.li>
            <motion.li variants={livariants}>ABOUT</motion.li>
            <motion.li variants={livariants}>SCHEDULE</motion.li>
            <motion.li variants={livariants}>PRIZES</motion.li>
            <motion.li variants={livariants}>GALLERY</motion.li>
            <motion.li variants={livariants}>SPONSORS</motion.li>
            <motion.li variants={livariants}>FAQS</motion.li>
          </motion.ul>
        </motion.div>

        {/* Hamburger Menu Icon */}
        <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;