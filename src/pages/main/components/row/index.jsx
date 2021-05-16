import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../button';
import ErrorInput from '../errorInput';
import './style.scss';

export const Row = ({
  className,
  data,
  header = false,
  editData,
  row,
  removeData,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showBtn, setShowBtn] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [loadSave, setLoadSave] = useState(false);
  const [loadDelete, setLoadDelete] = useState(false);

  const handleEditClick = () => {
    setIsEdit(true);
  };

  const handleRemoveClick = () => {
    setLoadDelete(true);
    removeData(data.id).finally(() => setLoadDelete(false));
  };

  const onSubmit = (userData) => {
    setLoadSave(true);
    editData({ id: data.id, ...userData })
      .then(() => setIsEdit(false))
      .finally(() => setLoadSave(false));
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
                  <>
                    <input
                      className="row__content row__input"
                      defaultValue={el}
                      {...register([...Object.keys(data)][i], {
                        validate: (value) => value.length > 2,
                      })}
                    />
                    {errors[[...Object.keys(data)][i]] && (
                      <ErrorInput
                        className="row__input-error"
                        inputName={[...Object.keys(data)][i]}
                      />
                    )}
                  </>
                )}
              </div>
            ))}
          </form>
        )}
        {showBtn && !header && (
          <div className="row__button-container">
            {!isEdit && <Button handleClick={handleEditClick} type="edit" />}
            {isEdit && (
              <Button
                load={loadSave}
                form={`save${row}`}
                typeBtn="submit"
                type="save"
              />
            )}
            <Button
              load={loadDelete}
              handleClick={handleRemoveClick}
              type="delete"
            />
          </div>
        )}
      </div>
    </>
  );
};
