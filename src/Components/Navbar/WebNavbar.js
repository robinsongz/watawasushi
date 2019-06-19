import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Navbar, NavDropdown} from 'react-bootstrap';

class WebNavbar extends Component {

    render() {
       
        return(
           <div>
            <Navbar bg="white" expand="lg">
                <Link to='/' className="navbar-brand" href="#"> Watawa Sushi </Link>
               <Navbar.Toggle aria-controls='basic-navbar-nav' />
        
                <Navbar.Collapse id="basic-navbar-nav">
                    <ul className="navbar-nav ml-auto">
                        <li class="nav-item active">
                        <Link to='/' className="nav-link">Home </Link>
                        </li>
                        <li class="nav-item active">
                        <Link to='/about' className="nav-link" > About </Link>
                        </li>
                        <NavDropdown title="Menu" id="basic-nav-dropdown"> 
                                <Link to='/drinks' className="dropdown-item">Drinks</Link>
                                <Link to='/appetizers' className="dropdown-item">Appetizers</Link>
                                <Link to='/rolls' className="dropdown-item">Rolls</Link>
                                <Link to='/entrees' className="dropdown-item">Entrees</Link>
                        </NavDropdown>
                        
                        <li class="nav-item active">
                        <Link to='/gallery' className="nav-link" > Gallery</Link>
                        </li>
                        <li class="nav-item active">
                        <Link to='/contact' className="nav-link" > Contact </Link>
                        </li>
                    </ul>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}

export default WebNavbar;