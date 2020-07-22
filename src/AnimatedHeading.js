import React from 'react';

import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";


const AnimatedHeading = ({text}) => {

    const { keyframes, timing } = bounce;
    const { ref } = useWebAnimations({
      keyframes,
      timing: {
        ...timing,
        iterations: Infinity,
        duration:5000,
      },
    });
    return (
        <div ref={ref}>
            <strong className='brand-name'>{text}</strong>
        </div>
           
    )
}

export default AnimatedHeading
