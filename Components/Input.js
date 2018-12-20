import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, value, label, handleChange, keyState }) => {
  
  return (
      <div className="form-control">
      	<input 
      		type={ type } 
			value={ value } 
			placeholder={ label } 
			onChange={ handleChange(keyState) } 
		/>
      </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  keyState: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;