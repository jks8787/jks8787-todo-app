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
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* image below */}
        <img src={codeImage} alt="code" />
        {/* links below */}
        <Link to="/faq">faq</Link>
        <br/>
        <Link to="/todos">todos</Link>
        {this.props.children}
      </div>
    );
  }
}

export default App;
