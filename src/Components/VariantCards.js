import React from 'react';
import Card from './Card';

const BuyerCard = ({ data, onDelete }) => {
  return <Card data={data} onDelete={onDelete} />;
};

const SellerCard = ({ data, onDelete }) => {
  return <Card data={data} onDelete={onDelete} />;
};

const ApproveCard = ({ data, onApprove, onReject }) => {
    return <Card data={data} onApprove={onApprove} onReject={onReject} />;
};

export { BuyerCard, SellerCard, ApproveCard };