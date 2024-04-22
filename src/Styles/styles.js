// import React, { useState , useEffect} from 'react';
// import SideBar from '../Components/SideBar';
// import ApproveList from '../Components/ApproveList';
// import Card from '../Components/Card';
// import { useNavigate , } from 'react-router-dom';
// import {
//   PaperProvider,
//   useSnackbar,
//   TextField, 
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   Search
// } from 'react-paper-bindings';
// //import {Searchbar} from "react-native-paper";

// //import SearchIcon from '@mui/icons-material/Search'; // Import SearchIcon

// //import styles from "../Styles/styles";

// import axios from "axios";

// const ApprovalPage = () => {
//   // Sample data for the card list
//    const [sellersData, setSellersData] = useState([]);
//   //   [
//   //     { label: 'Name', info: 'Cafe In' },
//   //     { label: 'Email', info: 'john@example.com' },
//   //     { label: 'Phone', info: '123-456-7890' }
//   //   ],
//   //   [
//   //     { label: 'Name', info: 'Jane Smith' },
//   //     { label: 'Email', info: 'jane@example.com' },
//   //     { label: 'Phone', info: '987-654-3210' }
//   //   ]
//   // ]);

//   const [searchText, setSearchText] = useState("");

//   const setSearchQuery = (e) => {
//     setSearchText(e);
//   }

//   const fetchPendingApprovals = async () => {

//     try {
//       const userToken = localStorage.getItem("userToken");
//       console.log(userToken);

//       const url = `http://localhost:8080/api/seller/all`;
//       const config = {
//         headers: {
//           Authorization: `Bearer ${userToken}`
//         }
//       };
//       const response = await axios.get(url, config);

//       console.log(response);
//       setSellersData(response.data);

//     } catch (error) {
//       console.error("Login error:", error);
//     }

    
//   };

//   useEffect(() => {
//     fetchPendingApprovals();
//   }, []);

//   // Function to handle delete action
//   const handleApprove = (index) => {
//     console.log(`Approved item at index ${index}`);
//   };

//   const handleReject = (index) => {
//     console.log(`Rejected item at index ${index}`);
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <SideBar />
//       <div style={styles.container}>
//         <div style={styles.header}>
//           <h1 style={styles.heading}>Buyers List</h1>
//           <div style={styles.controls}>
//           </div>
//         </div>
//         <div style={{ flexGrow: 1 }}>
//           {sellersData.map((seller, index) => (
//             <Card
//               key={index}
//               data={[
//                 { label: "Business name:", info: seller.businessName },
//                 { label: "Phone:", info: seller.phone },
//                 { label: "Email:", info: seller.email },
//                 { label: "Working Hours:", info: seller.workingHours }
//               ]}
//               onApprove={() => handleApprove(seller.id)} 
//               onReject={() => handleReject(seller.id)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // Inline styles
// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     padding: '20px',
//     backgroundColor: '#f9f9f9',
//     width: '100%', // Ensure full width
//   },
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '20px',
//   },
//   heading: {
//     fontSize: '24px',
//     fontWeight: 'bold',
//   },
//   controls: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//   }
// };
// //   return (
// //     <div style={{ display: 'flex' }}>
// //       <SideBar/>
// //       <div style={styles.container}>
// //         <h1 style={styles.heading}>Buyers List</h1>
// //         <div style={{ flexGrow: 1 }}>
// //           {sellersData.map((seller,index) =>(
// //             <Card 
// //               key={index}
// //               data= {[
// //                 {label: "Bussiness name: ", info: seller.businessName},
// //                 {label: "Phone: ", info: seller.phone},
// //                 {label: "e-mail: ", info: seller.email},
// //                 {label: "Working Hours: ", info: seller.workingHours},
// //               ]} 
// //               onApprove={handleApprove} onReject={handleReject}
// //             />
// //           ))}
// //           {/*<ApproveList dataList={sellersData} onApprove={handleApprove} onReject={handleReject}  />*/} {/* Pass onDelete function */}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Inline styles
// // const styles = {
// //   container: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     padding: '20px',
// //     backgroundColor: '#f9f9f9',
// //     width: '100%', // Ensure full width
// //   },
// //   heading: {
// //     fontSize: '24px',
// //     fontWeight: 'bold',
// //     marginBottom: '20px',
// //   },
// // };

// export default ApprovalPage;