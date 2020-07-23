import React from 'react'
import aboutImg from './images/Creative-Idea.svg'
import {Card} from 'react-bootstrap';

const Aboutus = () => {
    return (
            <div className='row'>
            {/* <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
            Your website has three (!) seconds to make a lasting impression. 
            We all know first impressions are the ones that count. 
            So, if the visitor isn’t engaged by then, you’ve lost them. 
            Straight to your competitor's site. 
            </div> */}
            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={aboutImg} />
                <Card.Body>
                    <Card.Title>Design UI/UX</Card.Title>
                    <Card.Text>
                        Your website has three (!) seconds to make a lasting impression. 
                We all know first impressions are the ones that count. 
                So, if the visitor isn’t engaged by then, you’ve lost them. 
                Straight to your competitor's site.                    
                </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                </Card>
                </div>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={aboutImg} />
                <Card.Body>
                    <Card.Title>Design UI/UX</Card.Title>
                    <Card.Text>
                        Your website has three (!) seconds to make a lasting impression. 
                We all know first impressions are the ones that count. 
                So, if the visitor isn’t engaged by then, you’ve lost them. 
                Straight to your competitor's site.                    
                </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                </Card>

            </div>
            </div>									
    )
}

export default Aboutus
