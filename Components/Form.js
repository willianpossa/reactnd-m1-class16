import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import ErrorMessage from './ErrorMessage';

class Form extends Component {
  
  static propTypes = {
    users: PropTypes.array.isRequired,
    addUser: PropTypes.func.isRequired
  };
  
  state = {
    name: '',
    lastname: '',
    username: '',
    error: false
  };

  changeState = key => ({ target: { value } }) => {
    this.setState({
      [key]: value
    });
  }

  checkStatePropertyIsEmpty = propertyState => {
    return propertyState === '' ? true : false;
  }

  checkStatusButton = _ => {
    let state = this.state;
    
    if( this.checkStatePropertyIsEmpty(state.name) || 
       this.checkStatePropertyIsEmpty(state.lastname) || 
       this.checkStatePropertyIsEmpty(state.username) 
    )
      return true;
    else
      return false;
  }

  checkIfAlreadyExistsUser = (users) => {
    let exists = users.filter(u => {
      return u.username === this.state.username;
    });
    
    if(exists.length > 0)
      return true;
    else
      return false;
  }

  resetForm = _ => {
    this.setState(_ => ({
      name: '',
      lastname: '',
      username: ''
    }));
  }

  submitForm = event => {
    event.preventDefault();
    
	let error = this.checkIfAlreadyExistsUser(this.props.users);
    
    if(error)
    {
      this.setState({
        username: '',
        error: error
      });
    } else {
      let user = {
        username: this.state.username,
        playedGames: 0
      };
      
      this.setState({
        error: false
      });

      this.props.addUser(user);
      
      this.resetForm();
    }
  }

  render() {
    let { name, lastname, username, error } = this.state;
    	
  	return (
      <form action="" onSubmit={ this.submitForm }>
		<ErrorMessage error={ error } />
    	<Input type="text" keyState="name" value={ name } label="Nome" handleChange={ this.changeState } />
		<Input type="text" keyState="lastname" value={ lastname } label="Sobrenome" handleChange={ this.changeState } />
		<Input type="text" keyState="username" value={ username } label="Nome de Usuário" handleChange={ this.changeState } />
		<button disabled={ this.checkStatusButton() }>Adicionar</button>
      </form>
    );
  }
}

export default Form;