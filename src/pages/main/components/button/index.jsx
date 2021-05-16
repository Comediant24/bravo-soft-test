import React from 'react';
import './style.scss';
const Button = ({
  className = '',
  handleClick,
  type = 'text',
  typeBtn = 'button',
  children,
  load = false,
  ...rest
}) => {
  const handleClickBtn = () => {
    if (handleClick) handleClick();
  };

  return (
    <button
      {...rest}
      onClick={handleClickBtn}
      type={typeBtn}
      className={`${className} button`}
    >
      <div className={`button__type button__type_${load ? 'load' : type}`}>
        {children}
      </div>
    </button>
  );
};

export default Button;
