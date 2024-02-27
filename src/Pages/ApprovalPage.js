import React from 'react';
import SideBar from '../Components/SideBar';
import ApproveList from '../Components/ApproveList';
//import styles from "../Styles/styles";

const ApprovalPage = () => {
  // Sample data for the card list
  const buyersData = [
    [
      { label: 'Name', info: 'Cafe In' },
      { label: 'Email', info: 'john@example.com' },
      { label: 'Phone', info: '123-456-7890' }
    ],
    [
      { label: 'Name', info: 'Jane Smith' },
      { label: 'Email', info: 'jane@example.com' },
      { label: 'Phone', info: '987-654-3210' }
    ]
  ];

  // Function to handle delete action
  const handleApprove = (index) => {
    console.log(`Approved item at index ${index}`);
  };

  const handleReject = (index) => {
    console.log(`Rejected item at index ${index}`);
  };

  return (
    <div style={{ display: 'flex' }}>
      <SideBar/>
      <div style={styles.container}>
        <h1 style={styles.heading}>Buyers List</h1>
        <div style={{ flexGrow: 1 }}>
          <ApproveList dataList={buyersData} onApprove={handleApprove} onReject={handleReject}  /> {/* Pass onDelete function */}
        </div>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    width: '100%', // Ensure full width
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
};

export default ApprovalPage;