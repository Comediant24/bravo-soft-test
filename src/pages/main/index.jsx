import React, { useEffect, useState } from 'react';
import { getUsersData } from '../../adapters/getUserData';
import Table from './components/table';
import './style.scss';

const Main = () => {
  const [data, setData] = useState(null);
  console.log('data', data);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getUsersData()
      .then((users) => setData(users))
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
            <Table tableData={data} />
          </section>
        </>
      )}
    </div>
  );
};

export default Main;
