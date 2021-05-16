import React, { useEffect, useState } from 'react';
import { getUsersData } from '../../adapters/getUserData';
import { updateUser } from '../../adapters/updateUser';
import { removeUser } from '../../adapters/removeUser';
import { createUser } from '../../adapters/createUser';
import Table from './components/table';
import './style.scss';
import CreateForm from './components/createForm';

const Main = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    return getUsersData()
      .then((users) => setData(users))
      .catch((err) => console.error(err));
  };

  const editData = (data) => {
    const { id, firstName, lastName, age } = data;
    return updateUser(id, { firstName, lastName, age })
      .then(() => getData())
      .catch((err) => console.error(err));
  };

  const removeData = (id) => {
    removeUser(id)
      .then(() => getData())
      .catch((err) => console.error(err));
  };

  const createData = (data) => {
    const { firstName, lastName, age } = data;
    return createUser({ firstName, lastName, age })
      .then(() => getData())
      .catch((err) => console.error(err));
  };

  return (
    <div className="main">
      {!data && (
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
    </div>
  );
};

export default Main;
