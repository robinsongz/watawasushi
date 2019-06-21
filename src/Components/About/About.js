import React, {Component} from 'react';
import './About.css';
import {Container, Row, Col} from 'react-bootstrap';

class About extends Component {
    render() {
        return(
          <div className="about">
            <Container className="container">
              <Row className="top-half">
                <Col sm={8}>
                  <img className="about-image" src={require('../../Images/sushi2.jpg')} alt="sushi2"/>
                </Col>
                <Col sm={4}>
                <div className="description">
                    <h2 className="about-title">Watawa Sushi</h2>
                    <p className="about-description">
                  
                    Welcome to Watawa Sushi & Lounge, it is our great pleasure to serve you with the highest quality food and excellent service at the Sumou Restaurant. <br /><br />
                  
                    On the frontier of Japanese fusion restaurants, we are proud of our unique and wonderful cuisine which is created from the finest ingredients. We promise you the freshest seafood, meat and produce.<br /><br />
                  
                    The fun & friendly atmosphere of the sushi bar and the beautiful presentation of each dish with their remarkable and distinctive flavors have made us an experience that inspires our guests to return again and again.
                  
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="bottom-half">
                <Col>
                  <img className="about-image-bottom" src={require('../../Images/sushi3.jpg')} alt="sushi3" />
                </Col>
                <Col>
                  <img className="about-image-bottom" src={require('../../Images/sushi4.jpg')} alt="sushi4" />
                </Col>
                <Col>
                  <img className="about-image-bottom" src={require('../../Images/sushi5.jpg')} alt="sushi5" />
                </Col>
              </Row>
            </Container>
           
          </div>
        )
    }
}

export default About;