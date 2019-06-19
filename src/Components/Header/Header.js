import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return(
          <div>
              
            <img 
                className="d-block w-100 header-image" 
                src={require("../../Images/sushi.jpg")} 
                alt='sushi'
            />
          </div>
        )
    }
}

export default Header;