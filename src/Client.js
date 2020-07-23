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
        </div>
    )
}

export default Client
