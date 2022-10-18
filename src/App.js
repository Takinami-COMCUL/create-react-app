import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Google Drive認証</h1>
          <button id="authorize_button" onclick="handleAuthClick()">認証</button>
          <button id="signout_button" onclick="handleSignoutClick()">ログアウト</button>
    );
  }
}

export default App;
