import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
  
  static propTypes = {
    user: PropTypes.object.isRequired
  }
  
  state = {
    displayGames: true
  };

  toggleDisplayGames = _ => {
    this.setState(prevState => ({
      displayGames: !prevState.displayGames
    }));
  }
	
  render() {
    let { user } = this.props;
	let { displayGames } = this.state;
    
    return (
      <li>
      	<p>{ user.username } tem { displayGames ? user.playedGames : '?' } jogos jogados</p>
		<button onClick={ this.toggleDisplayGames }>
			{ displayGames ? (
             	'Esconder número de jogos jogados'
             ) : (
               'Exibir número de jogos jogados'
             )
            }
		</button>
      </li>
    );
  }
}

export default User;