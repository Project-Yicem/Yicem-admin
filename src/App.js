import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage';
import Login from './Pages/LoginPage';
import BuyersPage from './Pages/BuyersPage';
import SellersPage from './Pages/SellersPage';
import ApprovalPage from './Pages/ApprovalPage';
import FeedbacksPage from './Pages/FeedbacksPage';
import SideBar from './Components/SideBar'; // Import SideBar component

function AppContent() {

  const checkToken = async () => {
    const userToken = await localStorage.getItem("userToken");
    if (userToken) {
      console.log(userToken);
    }
  };

  useEffect(() => {
    console.log("App loaded");
    checkToken();
  }, []);

  return(
    <div className="App">
        {/* Use Routes component to define your routes */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/approvals" element={<ApprovalPage />} />
          <Route path="/businesses" element={<SellersPage />} />
          <Route path="/customers" element={<BuyersPage />} />
          <Route path="/feedbacks" element={<FeedbacksPage />} />
        </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent/>
    </Router>
  );
}

export default App;

// import React, {useEffect} from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Pages/HomePage';
// import Login from './Pages/LoginPage';
// import BuyersPage from './Pages/BuyersPage';
// import SellersPage from './Pages/SellersPage';
// import ApprovalPage from './Pages/ApprovalPage';
// import FeedbacksPage from './Pages/FeedbacksPage';

// // import axios from "axios";
// // import { IP_ADDRESS } from "./Functions/GetIP";

// function AppContent() {

//   const checkToken = async () => {
//     // (if needed, uncomment this to delete token)
//     // await SecureStore.deleteItemAsync("userToken");

//     // Check if the user is already logged in
//     // If so, navigate to the MainHome screen
//     // If not, navigate to the Login screen
//     const userToken = await localStorage.getItem("userToken");          //PRONE TO FAIL
//     if (userToken) {
//       console.log(userToken);
//     }
//   };

//   useEffect(() => {
//     console.log("App loaded");

//     checkToken();
//   }, []);

//   return(
//     <div className="App">
//         {/* Use Routes component to define your routes */}
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/customers" element={<BuyersPage />} />
//           <Route path="/businesses" element={<SellersPage />} />
//           <Route path="/approvals" element={<ApprovalPage />} />
//           <Route path="/feedbacks" element={<FeedbacksPage />} />

//         </Routes>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <AppContent/>
//     </Router>
//   );
// }

// export default App;