import React from 'react';
import BuyersList from '../Components/BuyersList';
import SideBar from '../Components/SideBar';
//import styles from "../Styles/styles";

const BuyersPage = () => {
  // Sample data for the card list
  const buyersData = [
    [
      { label: 'Name', info: 'John Doe' },
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
  const handleDelete = (index) => {
    console.log(`Deleting item at index ${index}`);
  };

  return (
    <div style={{ display: 'flex' }}>
      <SideBar/>
      <div style={styles.container}>
        <h1 style={styles.heading}>Buyers List</h1>
        <div style={{ flexGrow: 1 }}>
          <BuyersList dataList={buyersData} onDelete={handleDelete} /> {/* Pass onDelete function */}
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

export default BuyersPage;

// import React from 'react';
// import CardList from '../Components/CardList';
// import BuyersList from '../Components/BuyersList';
// import SideBar from '../Components/SideBar';
// //import styles from "../Styles/styles";

// const BuyersPage = () => {
//   // Sample data for the card list
//   const buyersData = [
//     [
//       { label: 'Name', info: 'John Doe' },
//       { label: 'Email', info: 'john@example.com' },
//       { label: 'Phone', info: '123-456-7890' }
//     ],
//     [
//       { label: 'Name', info: 'Jane Smith' },
//       { label: 'Email', info: 'jane@example.com' },
//       { label: 'Phone', info: '987-654-3210' }
//     ]
//   ];

//   // Function to handle delete action
//   const handleDelete = (index) => {
//     console.log(`Deleting item at index ${index}`);
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <SideBar/>
//       <div style={styles.container}>
        
//         <h1 style={styles.heading}>Buyers List</h1>
//         <BuyersList dataList={buyersData} onDelete={handleDelete} /> {/* Pass onDelete function */}
//       </div>
//     </div>
//   );
// };

// // Inline styles
// const styles = {
//   container: {
//     padding: '20px',
//     backgroundColor: '#f9f9f9',
//   },
//   heading: {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     marginBottom: '20px',
//   },
// };

// export default BuyersPage;

// // import React from 'react';
// // import CardList from '../Components/CardList';
// // import BuyersList from '../Components/BuyersList';

// // const BuyersPage = () => {
// //   // Sample data for the card list
// //   const buyersData = [
// //     [
// //       { label: 'Name', info: 'John Doe' },
// //       { label: 'Email', info: 'john@example.com' },
// //       { label: 'Phone', info: '123-456-7890' }
// //     ],
// //     [
// //       { label: 'Name', info: 'Jane Smith' },
// //       { label: 'Email', info: 'jane@example.com' },
// //       { label: 'Phone', info: '987-654-3210' }
// //     ]
// //   ];

// //   return (
// //     <div style={styles.container}>
// //       <h1 style={styles.heading}>Buyers List</h1>
// //       <BuyersList dataList={buyersData} />
// //     </div>
// //   );
// // };

// // // Inline styles
// // const styles = {
// //   container: {
// //     padding: '20px',
// //     backgroundColor: '#f9f9f9',
// //   },
// //   heading: {
// //     fontSize: '24px',
// //     fontWeight: 'bold',
// //     marginBottom: '20px',
// //   },
// // };

// // export default BuyersPage;