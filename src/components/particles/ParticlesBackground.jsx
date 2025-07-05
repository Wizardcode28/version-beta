import React from 'react'
import "./ParticlesBackground.css"
import Particles from 'react-tsparticles'
import particlesConfig from "../../assets/particlesjs-config.json"
const ParticlesBackground = () => {

  return (
    <Particles
      id="particlesjs"
      options={particlesConfig}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}
    />
  )
}

export default ParticlesBackground
