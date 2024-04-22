import React, { useState, useEffect } from 'react';
import SideBar from '../Components/SideBar';
import ApproveList from '../Components/ApproveList';
import Card from '../Components/Card';
import { TextField, Checkbox, FormControlLabel, Select, MenuItem, Button, Snackbar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";

const FeedbacksPage = () => {
  const [feedbacksData, setFeedbacksData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [autoConfirm, setAutoConfirm] = useState(false);
  const [searchBy, setSearchBy] = useState('customer name');

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const hideError = () => {
    setShowError(false);
  }

  const handleAutoConfirmChange = (event) => {
    setAutoConfirm(event.target.checked);
    // Add logic for handling auto-confirm
  };

  const handleSearchByChange = (event) => {
    setSearchBy(event.target.value);
  };

  const handleRefresh = () => {
    fetchFeedbacks();
  }

  const fetchFeedbacks = async () => {
    try {
      const userToken = localStorage.getItem("userToken");
      const url = `http://localhost:8080/api/admin/feedbacks`;              //TODO Change URL
      const config = {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      };
      const response = await axios.get(url, config);
      setFeedbacksData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Fetch error:", error);

      setErrorMessage("Fetch error!");
      setShowError(true);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  useEffect(() => {
    const dummyFeedbacks = [
        {
          customerName: 'John Doe',
          topic: "about zort",
          content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        },
        {
          customerName: 'yasuo',
          topic: "about feeding",
          content: "no gank! dum jg"
        },
        {
          customerName: 'Master yi',
          topic: "about ganks",
          content: "you stole my red,  amet lorem ipsum dolor si amet lorem ipsum dolor si amet lorem ipsum dolor si amet lorem ipsum dolor si"
        }
      ];
      
      setFeedbacksData(dummyFeedbacks);

    if (!searchQuery) {
      setFilteredData(feedbacksData);
      return;
    }
   
    if(searchBy === "customer name"){
      setFilteredData(
        feedbacksData.filter((feedback) =>
        feedback.customerName.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
    else if(searchBy === "topic"){
      setFilteredData(
        feedbacksData.filter((feedback) =>
        feedback.topic.toLowerCase().includes(searchQuery.toLowerCase())             //CHANGE WHEN NEEDED
        )
      );
    }
    
    console.log(filteredData);
  }, [feedbacksData, searchQuery, searchBy]);

  return (
    <div style={{ display: 'flex' }}>
      <SideBar pageNo={4}/>
      <div style={styles.container}>
        <div style={{...styles.header, boxShadow: '0px 4px 4px -2px rgba(0,0,0,0.1)' }}>
          <h1 style={styles.heading}>feedbacks</h1>
          <div style={styles.controls}>
            <p style={styles.heading2}>Search by:</p>
            <Select
              value={searchBy}
              onChange={handleSearchByChange}
              variant="outlined"
              style={{ width: '170px' }}
            >
              <MenuItem value="customer name"> Customer Name</MenuItem>
              <MenuItem value="topic">Topic</MenuItem>
            </Select>
            <TextField
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              variant="outlined"
              placeholder="Search..."
              InputProps={{
                startAdornment: <SearchIcon />
              }}
            />
            <FormControlLabel
              control={<Checkbox checked={autoConfirm} onChange={handleAutoConfirmChange} />}
              label="Auto Confirm"
            />
            <Button onClick={handleRefresh} variant="contained" color="primary" size="small">
              Refresh
            </Button>
          </div>
        </div>
        <div style={{ flexGrow: 1, paddingTop:10 }}>
          {filteredData.map((feedback, index) => (
            <Card
              key={index}
              data={[
                { label: "Customer Name", info: feedback.customerName },
                { label: "Topic", info: feedback.topic },
                { label: "Content", info: feedback.content },
              ]}
            />
          ))}
        </div>
      </div>
      <Snackbar 
      open={showError} 
      autoHideDuration={6000} 
      onClose={hideError} 
      message={errorMessage} />
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
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  zero: {
    display: 'flex',
    flexDirection: 'column',
    padding: "0px",
  }
};

export default FeedbacksPage;



// import React from 'react';
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
//         <div style={{ flexGrow: 1 }}>
//           <BuyersList dataList={buyersData} onDelete={handleDelete} /> {/* Pass onDelete function */}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Inline styles
// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     padding: '20px',
//     backgroundColor: '#f9f9f9',
//     width: '100%', // Ensure full width
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
// // import SideBar from '../Components/SideBar';
// // //import styles from "../Styles/styles";

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

// //   // Function to handle delete action
// //   const handleDelete = (index) => {
// //     console.log(`Deleting item at index ${index}`);
// //   };

// //   return (
// //     <div style={{ display: 'flex' }}>
// //       <SideBar/>
// //       <div style={styles.container}>
        
// //         <h1 style={styles.heading}>Buyers List</h1>
// //         <BuyersList dataList={buyersData} onDelete={handleDelete} /> {/* Pass onDelete function */}
// //       </div>
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

// // // import React from 'react';
// // // import CardList from '../Components/CardList';
// // // import BuyersList from '../Components/BuyersList';

// // // const BuyersPage = () => {
// // //   // Sample data for the card list
// // //   const buyersData = [
// // //     [
// // //       { label: 'Name', info: 'John Doe' },
// // //       { label: 'Email', info: 'john@example.com' },
// // //       { label: 'Phone', info: '123-456-7890' }
// // //     ],
// // //     [
// // //       { label: 'Name', info: 'Jane Smith' },
// // //       { label: 'Email', info: 'jane@example.com' },
// // //       { label: 'Phone', info: '987-654-3210' }
// // //     ]
// // //   ];

// // //   return (
// // //     <div style={styles.container}>
// // //       <h1 style={styles.heading}>Buyers List</h1>
// // //       <BuyersList dataList={buyersData} />
// // //     </div>
// // //   );
// // // };

// // // // Inline styles
// // // const styles = {
// // //   container: {
// // //     padding: '20px',
// // //     backgroundColor: '#f9f9f9',
// // //   },
// // //   heading: {
// // //     fontSize: '24px',
// // //     fontWeight: 'bold',
// // //     marginBottom: '20px',
// // //   },
// // // };

// // // export default BuyersPage;