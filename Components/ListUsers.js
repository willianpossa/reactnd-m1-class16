import React, { Component } from 'react';
import PropTypes from 'prop-types';

import User from './User';

class ListUsers extends Component {
  
  static propTypes = {
    users: PropTypes.array.isRequired
  }
  
  listUsers = _ => {
    let { users } = this.props;
    
    let list = users.map((item, index) => {
      return <User key={ index } user={ item } />
    });
      
    return list;
  }
	
  render() {
    let listUsers = this.listUsers();
    
    return (
      <ul>
        { listUsers }
      </ul>
    );
  }
}

export default ListUsers;