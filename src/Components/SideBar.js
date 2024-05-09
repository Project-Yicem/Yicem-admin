import React, { useEffect } from 'react';
import { Tab, Tabs } from '@mui/material';

const sidebarStyle = {
  backgroundColor: '#f26f55',
  width: '200px',
  color: 'white',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  padding: 'calc(20vh / 3) 10px',
  transition: 'background-color 0.3s',
  
};

const SideBar = ({pageNo, handleChange}) => {

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={sidebarStyle}>
        <Tabs
          value={pageNo}
          onChange={handleChange}
          aria-label="nav tabs example"
          role="navigation"
          orientation="vertical"
          sx={{ borderBottom: 0, borderRight: '1px solid white', color: 'white' }}
        >
          <Tab
            label="Home"
            component="a"
            href="/Home"
            onClick={handleChange}
            style={pageNo === 0 ? { ...linkStyle, backgroundColor: '#fdbcb4' } : linkStyle}
          />
          <Tab
            label="Approvals"
            component="a"
            href="/approvals"
            onClick={handleChange}
            style={pageNo === 1 ? { ...linkStyle, backgroundColor: '#fdbcb4' } : linkStyle}
          />
          <Tab
            label="Businesses"
            component="a"
            href="/businesses"
            onClick={handleChange}
            style={pageNo === 2 ? { ...linkStyle, backgroundColor: '#fdbcb4' } : linkStyle}
          />
          <Tab
            label="Customers"
            component="a"
            href="/customers"
            onClick={handleChange}
            style={pageNo === 3 ? { ...linkStyle, backgroundColor: '#fdbcb4' } : linkStyle}
          />
          <Tab
            label="Feedbacks"
            component="a"
            href="/feedbacks"
            onClick={handleChange}
            style={pageNo === 4 ? { ...linkStyle, backgroundColor: '#fdbcb4' } : linkStyle}
          />
        </Tabs>
      </div>
    </div>
  );
};

export default SideBar;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const sidebarStyle = {
//   backgroundColor: 'orange',
//   width: '200px',
//   padding: '20px',
//   color: 'white',
//   display: 'flex',
//   flexDirection: 'column',
// };

// const linkStyle = {
//   color: 'white',
//   textDecoration: 'none',
//   marginBottom: '20px',
//   transition: 'background-color 0.3s',
// };

// const SideBar = () => {
//   const handleHover = (event) => {
//     event.target.classList.add('hovered');
//   };

//   const handleLeave = (event) => {  
//     event.target.classList.remove('hovered');
//   };

//   return (
//     <div style={{ display: 'flex', height: '100vh' }}>
//       <div style={sidebarStyle}>
//       <Link
//           to="/Home"
//           style={linkStyle}
//           onMouseEnter={handleHover}
//           onMouseLeave={handleLeave}
//         >
//           <h2>Home</h2>
//         </Link>
//         <Link
//           to="/businesses"
//           style={linkStyle}
//           onMouseEnter={handleHover}
//           onMouseLeave={handleLeave}
//         >
//           <h2>Manage Business Accounts</h2>
//         </Link>
//         <Link
//           to="/customers"
//           style={linkStyle}
//           onMouseEnter={handleHover}
//           onMouseLeave={handleLeave}
//         >
//           <h2>Manage Customers</h2>
//         </Link>
//         <Link
//           to="/approvals"
//           style={linkStyle}
//           onMouseEnter={handleHover}
//           onMouseLeave={handleLeave}
//         >
//           <h2>Pending Business Approvals</h2>
//         </Link>
//         <Link
//           to="/feedbacks"
//           style={linkStyle}
//           onMouseEnter={handleHover}
//           onMouseLeave={handleLeave}
//         >
//           <h2>Feedbacks</h2>
//           {/* Add link or content for feedbacks */}
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default SideBar;

// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // const HomeScreen = () => {
// //   return (
// //     <div style={{ display: 'flex' }}>
// //       <div style={{ marginRight: '20px' }}>
// //         <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
// //           <h2>Manage Sellers</h2>
// //           <Link to="/manage-sellers">Go to Manage Sellers</Link>
// //         </div>
// //         <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
// //           <h2>Manage Buyers</h2>
// //           <Link to="/customers">Go to Manage Buyers</Link>
// //         </div>
// //         <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
// //           <h2>Feedbacks</h2>
// //           {/* Add link or content for feedbacks */}
// //         </div>
// //       </div>
// //       <div>
// //         <h1>Welcome to Admin Dashboard</h1>
// //         {/* Main content area */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default HomeScreen;

// // // import React from 'react';
// // // import { Link } from 'react-router-dom';
// // // // import { Link } from 'react-router-dom';

// // // const HomeScreen = () => {
// // //   return (
// // //     <div>
// // //       <h1>Welcome to Admin Dashboard</h1>
// // //       <div>
// // //         <h2>Manage Sellers</h2>
// // //         {/* //<Link to="/manage-sellers">Go to Manage Sellers</Link> */}
// // //       </div>
// // //       <div>
// // //         <Link to="/customers">Manage Buyers</Link>
// // //         {/* <Link to="/manage-buyers">Go to Manage Buyers</Link> */}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default HomeScreen;