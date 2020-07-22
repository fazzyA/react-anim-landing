import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Menu = () => {
    return (
<>
<div className='container-fluid nav_bg'>
    <div className='row'>
        <div className='col-10 mx-auto'>
 <Navbar expand="lg">
  <Navbar.Brand>Project 4B React Animation</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>   
            
</div>
    </div>
</div>

 </>
    )
}

export default Menu
