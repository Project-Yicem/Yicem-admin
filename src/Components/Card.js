import React from 'react';
import { Button, Grid } from '@mui/material';

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
          <span style={labelStyle}>{item.label ? item.label : "-"}:</span>
          <span>{item.info ? item.info : "-"}</span>
        </div>
      ))}
      <Grid container spacing={2}>
  {onDelete && (
    <Grid item>
      <Button onClick={onDelete} variant="contained" color="error" size="small" className="deleteButton" style={styles.smallButton}>
        Delete
      </Button>
    </Grid>
  )}
  {onApprove && (
    <Grid item>
      <Button onClick={onApprove} variant="contained" color="primary" size="small" className="approveButton" style={styles.smallButton}>
        Approve
      </Button>
    </Grid>
  )}
  {onReject && (
    <Grid item>
      <Button onClick={onReject} variant="contained" color="error" size="small" className="rejectButton" style={styles.smallButton} >
        Reject
      </Button>
    </Grid>
  )}
  {!onDelete && !onApprove && ! onReject && (
    <div style={{padding: "8px"}}></div>
  )}
</Grid>
    </div>
  );
};

const styles = {
  smallButton: { fontWeight: 'bold',
    padding: '4px 50px',
    fontSize: '0.75rem'
  },

};

export default Card;