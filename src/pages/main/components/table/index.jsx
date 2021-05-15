import React from 'react';
import './style.scss';
import { Row } from '../row';

const Table = ({ tableData }) => {
  return (
    <div className="table">
      <div className="table__container">
        <Row
          className="table__row"
          data={['Number', 'First name', 'Last name', 'Age']}
          header={true}
        />
        {tableData.map((row) => (
          <Row
            className="table__row"
            key={row.id}
            data={[...Object.values(row)]}
          />
        ))}
      </div>
    </div>
  );
};

export default Table;
