import React, { useState } from 'react';
import Button from '../button';
import { useForm } from 'react-hook-form';
import './style.scss';
import ErrorInput from '../errorInput';

const CreateForm = ({ input, createData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showForm, setShowForm] = useState(false);

  const placeHolder = Object.keys(input[0]).slice(1);
  console.log('errors', errors);

  const handleClick = () => {
    setShowForm(true);
  };

  const onSubmit = (userData) => {
    createData(userData).then(() => setShowForm(false));
  };

  return (
    <div className="formuser">
      {!showForm && (
        <Button handleClick={handleClick} className="formuser__btn">
          Создать нового пользователя
        </Button>
      )}
      {showForm && (
        <>
          <Button form="newUser" typeBtn="submit" className="formuser__btn">
            Сохранить нового пользователя
          </Button>
          <form
            id="newUser"
            onSubmit={handleSubmit(onSubmit)}
            className="formuser__form"
          >
            {placeHolder.map((input, i) => (
              <span key={i}>
                <input
                  className="formuser__input"
                  placeholder={input}
                  {...register(input, {
                    validate: (value) => value.length > 2,
                  })}
                ></input>
                {errors[input] && (
                  <ErrorInput
                    className="formuser__input-error"
                    inputName={input}
                  />
                )}
              </span>
            ))}
          </form>
        </>
      )}
    </div>
  );
};

export default CreateForm;
