import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = props => {
  
  return (
    <p style={{
    	color: 'red',
    	marginBottom: 20
    }}>
		{ props.error ? 'Este Nome de usuário já existe, por favor escolha outro.' : '' }
	</p>
  );
};

ErrorMessage.propTypes = {
  error: PropTypes.bool.isRequired
};

export default ErrorMessage;