import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import WebNavbar from './Components/Navbar/WebNavbar';


const Root = () => {
    return (
        <Router>
            <WebNavbar />
            <Route exact path='/' component={App} />
            
        </Router>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));

