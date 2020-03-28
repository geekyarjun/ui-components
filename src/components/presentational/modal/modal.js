import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ children, className }) => {
	return <div className={`modal ${className}`}>{children}</div>;
};

Modal.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element),
	]),
};

export default Modal;
