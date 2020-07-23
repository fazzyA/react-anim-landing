import React from 'react'
import sect2 from './images/HeroImage.js'
import {Row, Col} from 'react-bootstrap';

const Section2 = () => {
    return (
        <Row className='section1 justify-content-md-center'>
        <Col xs={6} md={12}>
            <img src={sect2} alt='json animation' />

        </Col>
        </Row>
        )
}

export default Section2
