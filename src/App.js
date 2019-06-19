import React, {Component} from 'react';
import Header from './Components/Header/Header';
import About from './Components/About/About';

class App extends Component {
    render() {
        return(
          <div>
            <Header />
            <About />
          </div>
        )
    }
}

export default App;