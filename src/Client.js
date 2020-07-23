import React from 'react'
import { Container , Jumbotron,Carousel} from 'react-bootstrap';

const Client = () => {
    return (
        <div>
            <Jumbotron fluid className='jumbo'>
            <Container>
                <h1>Our clients like us!</h1>
                <p>
                Thank you for your trust! We say it’s a thing of synergy.
                </p>
            </Container>
            </Jumbotron>
            <Carousel>
                <Carousel.Item>
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    )
}

export default Client
