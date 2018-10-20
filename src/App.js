import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import codeImage from './images/codeImage.png';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {/* image below */}
        <div className="App-image">
          <img className="App-code-image" src={codeImage} alt="code" />
        </div>
        <br/>
        {/* links below */}
        <div className="App-nav">
          <Link to="/faq">FAQS LINK</Link>
          <br/>
          <Link to="/todos">TODOS LINK</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
