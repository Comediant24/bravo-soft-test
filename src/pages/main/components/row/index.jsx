import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../button';
import './style.scss';

export const Row = ({
  className,
  data,
  header = false,
  editData,
  row,
  removeData,
}) => {
  const { register, handleSubmit } = useForm();

  const [showBtn, setShowBtn] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleEditClick = () => {
    setIsEdit(true);
  };

  const handleRemoveClick = () => {
    removeData(data.id);
  };

  const onSubmit = (userData) => {
    editData({ id: data.id, ...userData }).then(() => setIsEdit(false));
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
            id={`save${row}`}
            onSubmit={handleSubmit(onSubmit)}
            className={`${
              header ? 'row__container_header' : ''
            } row__container`}
          >
            {[...Object.values(data)].map((el, i) => (
              <div key={i} className="row__cell">
                {i === 0 ? (
                  <p className="row__content">{el}</p>
                ) : (
                  <input
                    className="row__content row__input"
                    defaultValue={el}
                    {...register([...Object.keys(data)][i])}
                  />
                )}
              </div>
            ))}
          </form>
        )}
        {showBtn && !header && (
          <div className="row__button-container">
            {!isEdit && <Button handleClick={handleEditClick} type="edit" />}
            {isEdit && (
              <Button form={`save${row}`} typeBtn="submit" type="save" />
            )}
            <Button handleClick={handleRemoveClick} type="delete" />
          </div>
        )}
      </div>
    </>
  );
};
