import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage';
import Login from './Pages/LoginPage';
import BuyersPage from './Pages/BuyersPage';
import SellersPage from './Pages/SellersPage';
import ApprovalPage from './Pages/ApprovalPage';



function App() {
  return (
    <Router>
      <div className="App">
        {/* Use Routes component to define your routes */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/customers" element={<BuyersPage />} />
          <Route path="/businesses" element={<SellersPage />} />
          <Route path="/approvals" element={<ApprovalPage />} />
          <Route path="/feedbacks" element={<BuyersPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;