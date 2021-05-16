import React, { useEffect, useState } from 'react';
import { getUsersData } from '../../adapters/getUserData';
import { updateUser } from '../../adapters/updateUser';
import { removeUser } from '../../adapters/removeUser';
import Table from './components/table';
import './style.scss';

const Main = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    return getUsersData()
      .then((users) => setData(users))
      .catch((err) => console.log(err));
  };

  const editData = (data) => {
    const { id, firstName, lastName, age } = data;
    return updateUser(id, { firstName, lastName, age })
      .then(() => getData())
      .catch((err) => console.log(err));
  };

  const removeData = (id) => {
    removeUser(id)
      .then(() => getData())
      .catch((err) => console.log(err));
  };

  return (
    <div className="main">
      {!data && (
        <h1 className="main__title main__title_load">Загрузка данных...</h1>
      )}
      {data && (
        <>
          <h1 className="main__title">Данные пользователей</h1>
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
