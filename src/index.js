import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import WebNavbar from './Components/Navbar/WebNavbar';
import Footer from './Components/Footer/Footer';


const Root = () => {
    return (
        <Router>
            <WebNavbar />
            <Route exact path='/' component={App} />
            <Footer />
        </Router>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));

