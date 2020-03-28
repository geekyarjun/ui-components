import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, className, name, onClick }) => {
  return (
    <button className={className} name={name} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  className: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
