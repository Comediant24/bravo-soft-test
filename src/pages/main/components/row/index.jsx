import React, { useState } from 'react';
import Button from '../button';
import './style.scss';

export const Row = ({ className, data, header = false }) => {
  const [showBtn, setShowBtn] = useState(false);

  return (
    <>
      <div
        className={`${className} row`}
        onMouseMove={() => setShowBtn(true)}
        onMouseLeave={() => setShowBtn(false)}
      >
        <div
          className={`${header ? 'row__container_header' : ''} row__container`}
        >
          {data.map((el, i) => (
            <div key={i} className="row__cell">
              <p className="row__content">{el}</p>
            </div>
          ))}
        </div>
        {showBtn && !header && (
          <div className="row__button-container">
            <Button type="edit" />
            <Button type="delete" />
          </div>
        )}
      </div>
    </>
  );
};
