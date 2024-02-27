import React from 'react';
import ApproveCard from './VariantCards';

const PendingApprovalsList = ({ dataList, onApprove, onReject }) => {
  return (
    <div>
      {dataList.map((data, index) => (
        <ApproveCard key={index} data={data} onApprove={onApprove} onReject={onReject} />
      ))}
    </div>
  );
};

export default PendingApprovalsList;