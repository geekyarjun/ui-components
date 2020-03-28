import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
	type,
	name,
	className,
	autoComplete,
	placeHolder,
	onChange,
}) => {
	return (
		<input
			type={type}
			name={name}
			className={className}
			placeholder={placeHolder}
			autoComplete={autoComplete}
			onChange={onChange}
			onFocus={event => event.target.removeAttribute('readonly')} // on foucs remove the readonly attribute show that user can type
			// onBlur={event => event.target.setAttribute("readonly", true)} // on foucs remove the readonly attribute show that user can type
			readOnly // a hack to not show suggestions in chrome
		/>
	);
};

Input.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string,
	className: PropTypes.string,
	placeHolder: PropTypes.string,
	autoComplete: PropTypes.string,
	onChange: PropTypes.func,
};

export default Input;
