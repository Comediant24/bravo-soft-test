import React from 'react';
import './style.scss';
const Button = ({
  className = '',
  handleClick,
  type = 'text',
  typeBtn = 'button',
  children,
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
      <div className={`button__type button__type_${type}`}>{children}</div>
    </button>
  );
};

export default Button;
