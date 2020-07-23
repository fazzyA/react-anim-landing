import React from 'react'
import {Nav ,Row, Col, Navbar} from 'react-bootstrap';

const Menu = () => {
    return (
<>
<Row><Col sm={12}>
 <Navbar bg="light" expand="lg">
 <Navbar.Brand>Project 4B React Animation</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/#rocket">See My Drawing Animation :)</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>   
</Col></Row>         

 </>
    )
}

export default Menu
