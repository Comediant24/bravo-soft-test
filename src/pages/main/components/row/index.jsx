import React from 'react';
import './style.scss';
export const Row = ({ className, data, header = false }) => {
  return (
    <>
      <div className={`${className} ${header ? 'row_header' : ''} row`}>
        {data.map((el, i) => (
          <div key={i} className="row__cell">
            <p className="row__content">{el}</p>
          </div>
        ))}
      </div>
    </>
  );
};
