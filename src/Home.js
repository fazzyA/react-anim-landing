import React from 'react'
import Button from 'react-bootstrap/Button';
import imgHome from './images/imgHome.jpg'
import logo from './images/location.png';
import useWebAnimations from '@wellyshen/use-web-animations'
import './style.css'
import AnimatedHeading from './AnimatedHeading';
import {Row, Col} from 'react-bootstrap';

const Home = () => {

    const imgAnim = useWebAnimations({
        keyframes:[
            {transform: "translateY(10px)"},
            {transform: "translateY(-10px)"},
        ],  
        timing:{
            duration: 2000,
            iterations: Infinity,
            easing: "ease-in-out",
            direction: "alternate-reverse",

        },
    });

    const { ref, animate } = useWebAnimations();

    React.useEffect(() => {
      document.addEventListener("mousemove", e => {
        try {
          animate({
            keyframes: { transform: `translate(${e.clientX}px, ${e.clientY}px)` },
            timing: { duration: 500, fill: "forwards" }
          });
        } catch (error) {
          // Ifnore error
        }
      });
    }, [animate]);
  

return (
<> 
<Row className='justify-content-md-center'>
    <Col xs={12} md={10} lg={10}>
 <span
        className="target"
        role="img"
        aria-label="useWebAnimations"
        ref={ref}
      >
        <img src={logo} alt='m' width='40px' height='30px' />
      </span>
            <div className='row'>
            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
            <h1>Get professional <AnimatedHeading text='with React' /></h1>
                <h2 className='my-3'>With Web Animation API</h2>
                
                <div className='mt-3'>
                <Button variant="primary" className='btn-get-started' size="lg">Get Started</Button>
                </div>
            </div>
            <div ref={imgAnim.ref} className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                <img src={imgHome} className='img-fluid' alt='home' />
            </div>
            </div>
    </Col></Row></>
    )
}

export default Home
