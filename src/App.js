import React, {Component} from 'react';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Breakpoint from './Components/Breakpoint/Breakpoint';
import Menu from './Components/Menu/Menu';
class App extends Component {
    render() {
        return(
          <div>
            <Header />
            <About />
            <Breakpoint />
            <Menu />
          </div>
        )
    }
}

export default App;