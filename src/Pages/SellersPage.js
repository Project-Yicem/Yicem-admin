import React, { useState, useEffect } from 'react';
import SideBar from '../Components/SideBar';
import ApproveList from '../Components/ApproveList';
import Card from '../Components/Card';
import { TextField, Checkbox, FormControlLabel, Select, MenuItem, Button, Snackbar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";

const SellersPage = () => {
  const [sellersData, setSellersData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [autoConfirm, setAutoConfirm] = useState(false);
  const [searchBy, setSearchBy] = useState('business name');

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
    fetchSellers();
  }

  const fetchSellers = async () => {
    try {
      const userToken = localStorage.getItem("userToken");
      const url = `http://localhost:8080/api/seller/all`;
      const config = {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      };
      const response = await axios.get(url, config);


      // Filter out the data based on the isApproved field
      const filteredData = response.data.filter(item => item.approved);
      setSellersData(filteredData);

      console.log(response.data);
    } catch (error) {
      console.error("Fetch error:", error);

      setErrorMessage("Fetch error!");
      setShowError(true);
    }
  };

  const deleteAPIbusiness = async (id) => {
    try {
      const userToken = localStorage.getItem("userToken");
      const url = `http://localhost:8080/api/admin/delete-seller/${id}`;
      const config = {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      };
      const response = await axios.delete(url, config);
      console.log(response);
      fetchSellers();
      //setSellersData(response.data);
    } catch (error) {
      console.error("Deleting user error:", error);

      setErrorMessage("Deleting error!");
      setShowError(true);
    }
  }

  useEffect(() => {
    fetchSellers();
  }, []);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredData(sellersData);
      return;
    }
    if(searchBy === "business name"){
      setFilteredData(
        sellersData.filter((seller) =>
          seller.businessName.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
    else if(searchBy === "address"){
      setFilteredData(
        sellersData.filter((seller) =>
          seller.address.toLowerCase().includes(searchQuery.toLowerCase())             //CHANGE WHEN NEEDED
        )
      );
    }
    
    console.log(filteredData);
  }, [sellersData, searchQuery, searchBy]);

  // Function to handle reject action
  const handleDelete = (index) => {
    console.log(`Deleted item at index ${index}`);
    deleteAPIbusiness(index);
  };

  return (
    <div style={{ display: 'flex' }}>
      <SideBar pageNo={2}/>
      <div style={styles.container}>
        <div style={{...styles.header, boxShadow: '0px 4px 4px -2px rgba(0,0,0,0.1)' }}>
          <h1 style={styles.heading}>Business Accounts Management</h1>
          <div style={styles.controls}>
            <p style={styles.heading2}>Search by:</p>
            <Select
              value={searchBy}
              onChange={handleSearchByChange}
              variant="outlined"
              style={{ width: '170px' }}
            >
              <MenuItem value="business name">Business name</MenuItem>
              <MenuItem value="address">Address</MenuItem>
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
          {filteredData.map((seller, index) => (
            <Card
              key={seller.id}
              data={[
                { label: "Business name", info: seller.businessName },
                { label: "Phone", info: seller.phone },
                // { label: "Email", info: seller.email },
                { label: "Working Hours", info: `${seller.openingHour} - ${seller.closingHour}` },
                { label: "Address", info: seller.address },
              ]}
              onDelete={() => handleDelete(seller.id)}
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

export default SellersPage;

