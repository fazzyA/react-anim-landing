import React from 'react'
import Rocket from './Rocket'
import {Button, Card} from 'react-bootstrap';
import db from './images/Database.svg'
import dev from './images/Development.svg'
import imgSection1 from './images/Creative-Idea.svg'
import {Row, Col} from 'react-bootstrap';

const Section1 = () => {
    return (
    <Row className='section1 justify-content-md-center'>
    <Col xs={12} md={3}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={dev} />
        <Card.Body>
            <Card.Title>Web Development</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>
        </Card>
    </Col>
    <Col xs={12} md={3}>
          <Rocket />
          <h2>Create your Own.</h2>
    </Col>
    <Col xs={12} md={3}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imgSection1} />
        <Card.Body>
            <Card.Title>UX/UI</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>
        </Card>
    </Col>
</Row>
 )
}

export default Section1
