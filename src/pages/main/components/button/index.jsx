import React from 'react';
import './style.scss';
const Button = ({ type = 'text', children }) => {
  return (
    <button type="button" className="button">
      <div className={`button__type button__type_${type}`}>{children}</div>
    </button>
  );
};

export default Button;
