import React from 'react';
import { SellerCard } from './VariantCards';

const SellersList = ({ dataList, onDelete }) => {
  return (
    <div>
      {dataList.map((data, index) => (
        <SellerCard data={data} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default SellersList;