import React from 'react';

const Card = ({ data, onDelete, onApprove, onReject }) => {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    fontFamily: 'Arial, sans-serif',
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginRight: '5px',
  };

  return (
    <div style={cardStyle}>
      {data.map((item, index) => (
        <div key={index}>
          <span style={labelStyle}>{item.label}:</span>
          <span>{item.info}</span>
        </div>
      ))}
      {onDelete && (
        <button onClick={onDelete} className="deleteButton">
          Delete
        </button>
      )}
      {onApprove && (
        <button onClick={onApprove} className="approveButton">
          Approve
        </button>
      )}
      {onReject && (
        <button onClick={onReject} className="rejectButton">
          Reject
        </button>
      )}
    </div>
  );
};

export default Card;