import React from 'react';

import useWebAnimations, { bounceIn } from "@wellyshen/use-web-animations";


const AnimatedHeading = ({text}) => {

    const { keyframes, timing } = bounceIn;
    const { ref } = useWebAnimations({
      keyframes,
      timing: {
        ...timing,
        iterations: Infinity,
        duration:1500,
      },
    });
    return (
        <div ref={ref}>
            <strong className='brand-name'>{text}</strong>
        </div>
           
    )
}

export default AnimatedHeading
