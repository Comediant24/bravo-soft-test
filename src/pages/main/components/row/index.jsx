import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../button';
import './style.scss';

export const Row = ({ className, data, header = false }) => {
  const { register, handleSubmit } = useForm();

  const [showBtn, setShowBtn] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleEditClick = () => {
    setIsEdit(true);
  };

  const onSubmit = (data) => {
    console.log('data', data);
    setIsEdit(false);
  };

  return (
    <>
      <div
        className={`${className} row`}
        onMouseMove={() => setShowBtn(true)}
        onMouseLeave={() => {
          if (!isEdit) setShowBtn(false);
        }}
      >
        {!isEdit && (
          <div
            className={`${
              header ? 'row__container_header' : ''
            } row__container`}
          >
            {[...Object.values(data)].map((el, i) => (
              <div key={i} className="row__cell">
                <p className="row__content">{el}</p>
              </div>
            ))}
          </div>
        )}
        {isEdit && (
          <form
            id="save"
            onSubmit={handleSubmit(onSubmit)}
            className={`${
              header ? 'row__container_header' : ''
            } row__container`}
          >
            {[...Object.values(data)].map((el, i) => (
              <div key={i} className="row__cell">
                <input
                  className="row__content row__input"
                  defaultValue={el}
                  placeholder="bill"
                  {...register([...Object.keys(data)][i])}
                />
              </div>
            ))}
          </form>
        )}
        {showBtn && !header && (
          <div className="row__button-container">
            {!isEdit && <Button handleClick={handleEditClick} type="edit" />}
            {isEdit && <Button form="save" typeBtn="submit" type="save" />}
            <Button type="delete" />
          </div>
        )}
      </div>
    </>
  );
};
