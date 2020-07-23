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
import Animation1 from './Animation1';
import HeroImage from './HeroImage';

function App() {
  return (
    <>
    <Container id='header' fluid>
    <Menu />
   <Home />
   <Section1 />
     <Animation1 />
   <Footer />
   </Container>    
    </>
  );
}

export default App;
