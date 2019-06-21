import React, {Component} from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';



class Footer extends Component {

    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };

    render() {
        return(
          <div className="footer">
              <div class="address">
              Watawa Sushi & Lounge | 164 Hicksville Rd, Bethpage, NY 11714 | Tel: 516-731-8989 | Fax: 516-731-1818
              </div>
             
          </div>
        )
    }
}

export default Footer;