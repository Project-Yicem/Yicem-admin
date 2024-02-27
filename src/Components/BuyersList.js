import React from 'react';
import { BuyerCard } from './VariantCards';

const BuyersList = ({ dataList, onDelete }) => {
  return (
    <div>
      {dataList.map((data, index) => (
        <BuyerCard data={data} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default BuyersList;