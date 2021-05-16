import React from 'react';
import './style.scss';
import { Row } from '../row';

const Table = ({ tableData, editData, removeData }) => {
  return (
    <div className="table">
      <div className="table__container">
        <Row
          className="table__row"
          data={['Number', 'First name', 'Last name', 'Age']}
          header={true}
        />
        {tableData.map((row, i) => (
          <Row
            className="table__row"
            key={row.id}
            row={i}
            data={row}
            editData={editData}
            removeData={removeData}
          />
        ))}
      </div>
    </div>
  );
};

export default Table;
