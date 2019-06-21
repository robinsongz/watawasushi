import React, {Component} from 'react';
import './Menu.css'
import { Link } from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';

class Menu extends Component {
    render() {
        return(
            <div className='menu'>
               <h1 className='menu-title'>Our Menu</h1>

               <Container>
                   <Row>
                       <Col>
                       <div className="menu-item">
                        
                            <img 
                                className="menu-item-image" 
                                src={require("../../Images/sushidrinks.jpg")} 
                                alt='sushidrink'
                            />
                            <div className='menu-item-title'>Drinks</div>
                        </div>
                       </Col>
                       <Col>
                       <div className="menu-item">
                        
                            <img 
                                className="menu-item-image" 
                                src={require("../../Images/appetizer.jpg")} 
                                alt='sushidrink'
                            />
                            <div className='menu-item-title'>Appetizers</div>
                        </div>
                       </Col>

                       <Col>
                       <div className="menu-item">
                        
                            <img 
                                className="menu-item-image" 
                                src={require("../../Images/sashimi.jpg")} 
                                alt='sushidrink'
                            />
                            <div className='menu-item-title'>Sashimi</div>
                        </div>
                       </Col>

                      
                   </Row>
                   <Row>
                        <Col>
                            <div className="menu-item">
                                    
                                    <img 
                                        className="menu-item-image" 
                                        src={require("../../Images/sushirolls.jpg")} 
                                        alt='sushidrink'
                                    />
                                <div className='menu-item-title'>Rolls</div>
                            </div>
                        </Col>
                        <Col>
                            <div className="menu-item">
                                    
                                    <img 
                                        className="menu-item-image" 
                                        src={require("../../Images/specialsushiroll.jpg")} 
                                        alt='sushidrink'
                                    />
                                <div className='menu-item-title'>Special Rolls</div>
                            </div>
                        </Col>
                        <Col>
                            <div className="menu-item">
                                    
                                    <img 
                                        className="menu-item-image" 
                                        src={require("../../Images/teriyaki.jpg")} 
                                        alt='sushidrink'
                                    />
                                <div className='menu-item-title'>Entrees</div>
                            </div>
                        </Col>
                       
                   </Row>
               </Container>
            </div>
        )
    }
}

export default Menu;