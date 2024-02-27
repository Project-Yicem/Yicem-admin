import React from 'react';
import Card from './Card';

const CardList = ({ dataList }) => {
  return (
    <div>
      {dataList.map((data, index) => (
        <Card key={index} data={data} />
      ))}
    </div>
  );
};

export default CardList;