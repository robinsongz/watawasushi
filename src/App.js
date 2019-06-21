import React, {Component} from 'react';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import MenuTitle from './Components/OrderOnline/MenuTitle';
import Menu from './Components/Menu/Menu';
class App extends Component {
    render() {
        return(
          <div>
            <Header />
            <About />
            <MenuTitle />
            <Menu />
          </div>
        )
    }
}

export default App;