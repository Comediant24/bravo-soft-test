import React from 'react';
import './style.scss';
const ErrorInput = ({ className = '', inputName }) => {
  return (
    <p
      className={`${className} input-error`}
    >{`${inputName} должен быть не менее 3 символов`}</p>
  );
};

export default ErrorInput;
