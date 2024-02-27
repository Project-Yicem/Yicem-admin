import React from 'react';
import { ApproveCard } from './VariantCards';

const ApproveList = ({ dataList, onApprove, onReject }) => {
  return (
    <div>
      {dataList.map((data, index) => (
        <ApproveCard data={data} onApprove={onApprove} onReject={onReject} />
      ))}
    </div>
  );
};

export default ApproveList;