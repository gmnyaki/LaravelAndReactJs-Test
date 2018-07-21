import React, { Component } from 'react';
//includes
import './global.css';
//components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Main from './components/mainComponent/main';


class App extends Component {
  render() {
    return (
      <div className="App">
        
          <Header />

          <Main />

          <Footer/>

      </div>
    );
  }
}

export default App;
