import React from 'react';
import './App.css';
import Menu from './Navbar';
import Home from './Home';
import AnimatedHeading from './AnimatedHeading';
import Rocket from './Rocket';
import Section1 from './Section1';
import { Container } from 'react-bootstrap';
import Section2 from './Section2';
import Footer from './Footer';
import HeroImage from './images/HeroImage';

function App() {
  return (
    <>
    <Container id='header' fluid>
    <Menu />
   <Home />
   <Section1 />
   </Container>  
   <HeroImage />
   <Section2 />
   <Footer />
      
    </>
  );
}

export default App;
