import React, { useEffect, useState } from 'react';
import { getUsersData } from '../../adapters/getUserData';
import { updateUser } from '../../adapters/updateUser';
import { removeUser } from '../../adapters/removeUser';
import { createUser } from '../../adapters/createUser';
import Table from './components/table';
import './style.scss';
import CreateForm from './components/createForm';
import ErrorApi from './components/errorApi';

const Main = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    return getUsersData()
      .then((users) => setData(users))
      .catch((err) => {
        setError(true);
        console.error(err);
      });
  };

  const editData = (data) => {
    const { id, firstName, lastName, city } = data;
    return updateUser(id, { firstName, lastName, city })
      .then(() => getData())
      .catch((err) => {
        setError(true);
        console.error(err);
      });
  };

  const removeData = (id) => {
    return removeUser(id)
      .then(() => getData())
      .catch((err) => {
        setError(true);
        console.error(err);
      });
  };

  const createData = (data) => {
    const { firstName, lastName, city } = data;
    return createUser({ firstName, lastName, city })
      .then(() => getData())
      .catch((err) => {
        setError(true);
        console.error(err);
      });
  };

  return (
    <>
      <div className="main">
        {!data && !error && (
          <h1 className="main__title main__title_load">Загрузка данных...</h1>
        )}
        {data && (
          <>
            <h1 className="main__title">Данные пользователей</h1>
            <div className="main__btn-container">
              <CreateForm input={data} createData={createData} />
            </div>
            <section className="main__content">
              <Table
                tableData={data}
                editData={editData}
                removeData={removeData}
              />
            </section>
          </>
        )}
        {error && <ErrorApi error={error} />}
      </div>
    </>
  );
};

export default Main;
