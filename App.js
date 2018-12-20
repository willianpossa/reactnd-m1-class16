import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Components/Form';
import ListUsers from './Components/ListUsers';

class App extends Component {
  
  state = {
    users: [
      {
        username: 'EzPrince',
        playedGames: 0
      }
    ]
  }
  
  handleAddUser = user => {
    this.setState(prevState => ({
      users: [ ...prevState.users, user ]
    }));
  }
  
  render() {
    let { users } = this.state;

    return (
      <div className="App">
      	<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
      	<Form users={ users } addUser={ this.handleAddUser } />
      	<ListUsers users={ users } />
      </div>
    );
  }
}

export default App;
