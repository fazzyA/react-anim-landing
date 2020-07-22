import React from 'react'
import slide3 from '../images/sys1.jpg'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import useWebAnimations from "@wellyshen/use-web-animations";


const Section2 = () => {
  const { refSection2, playState } = useWebAnimations({
    keyframes: {
      transform: ["translateX(500px)"], // Move by 500px
    },
    timing: {
      delay: 500, // Start with a 500ms delay
      duration: 1000, // Run for 1000ms
      iterations: Infinity, // Repeat forever
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
  });
  return (
    <React.Fragment>
    <div ref={refSection2}>fgdfgd</div>
      {/* <img src={slide3} alt='sd' width='100%' /> */}
    </React.Fragment>
  )
}

export default Section2
