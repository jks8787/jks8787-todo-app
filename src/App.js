import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoComponent from './TodoComponent/TodoComponent';
import codeImage from './images/codeImage.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* I am a comment */}
        <img className="App-code-image" src={codeImage} alt="code" />
        <TodoComponent />
      </div>
    );
  }
}

export default App;
