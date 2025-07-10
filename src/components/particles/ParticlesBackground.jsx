// src/components/ParticlesBackground.jsx
// import React, { useCallback } from 'react';
// import { Particles } from '@tsparticles/react';
// import { loadFull } from '@tsparticles/engine';

// const ParticlesBackground = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         fullScreen: { enable: false },
//         background: { color: '#020f1f' },
//         particles: {
//           number: { value: 80 },
//           color: { value: '#ffffff' },
//           shape: { type: 'circle' },
//           opacity: {
//             value: 1,
//             random: true,
//             animation: {
//               enable: true,
//               speed: 1,
//               minimumValue: 0.2,
//               sync: false,
//             },
//           },
//           size: { value: 2, random: true },
//           move: {
//             enable: true,
//             speed: 0.2,
//             outModes: { default: 'out' },
//           },
//         },
//         detectRetina: true,
//       }}
//       style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         zIndex: 0,
//         pointerEvents: 'none',
//       }}
//     />
//   );
// };

// export default ParticlesBackground;
