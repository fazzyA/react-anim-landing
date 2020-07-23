import React from 'react'
import animationData from './images/27731-study-methods.json'
import animationData0 from './images/drawkit-grape-animation-1-LOOP.json'
import animationData1 from './images/drawkit-grape-animation-10-LOOP.json'
import animationData2 from './images/drawkit-grape-animation-4-LOOP.json'
import animationData3 from './images/drawkit-grape-animation-5-LOOP.json'
import Lottie from "react-lottie";
import {Row, Col, Card} from 'react-bootstrap';
const Section2 = () => {
        const defaultOptions1 = {
            loop: true,
            autoplay: true,
            animationData: animationData1,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            }
        };
         const defaultOptions2 = {
            loop: true,
            autoplay: true,
            animationData: animationData2,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            }
            };
             const defaultOptions3 = {
                loop: true,
                autoplay: true,
                animationData: animationData3,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                }
                };
                 const defaultOptions0 = {
                    loop: true,
                    autoplay: true,
                    animationData: animationData0,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    }
                    };
                    //  const defaultOptions5 = {
                    //     loop: true,
                    //     autoplay: true,
                    //     animationData: animationData5,
                    //     rendererSettings: {
                    //       preserveAspectRatio: "xMidYMid slice",
                    //     }
                    //     };
                
                    //      const defaultOptions6 = {
                    //         loop: true,
                    //         autoplay: true,
                    //         animationData: animationData6,
                    //         rendererSettings: {
                    //           preserveAspectRatio: "xMidYMid slice",
                    //         }
                    //         };
                    
                    const allData = [
                        {anim:animationData0,option:defaultOptions0,title:'Web Design'},
                        {anim:animationData1,option:defaultOptions1,title:'UI/UX'},
                         {anim:animationData2,option:defaultOptions2,title:'Web Development'}, 
                         {anim:animationData3,option:defaultOptions3,title:'Custom Solution'}]
      
    return (
        <Row className='section2 justify-content-md-center'>
            {allData.map((data,index)=>(
                <Col xs={12} md={3} key={index}>
        <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src={dev} /> */}
        <Lottie options={data.option} height={180} width={400} />
        <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>
        </Card>
    </Col>
            ))}
        
        </Row>
        )
}

export default Section2
