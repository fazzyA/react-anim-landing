import React from 'react'
import animationData from './images/27731-study-methods.json'
import Lottie from "react-lottie";

const Animation1 = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
      
      return (
        <div>
            <Lottie options={defaultOptions} height={400} width={400} />
        </div>
    )
}

export default Animation1
