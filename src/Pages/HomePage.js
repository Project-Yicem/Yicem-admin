import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../Components/SideBar';

const sidebarStyle = {
  backgroundColor: 'orange',
  width: '200px',
  padding: '20px',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  marginBottom: '20px',
  transition: 'background-color 0.3s',
};

const HomeScreen = () => {
  const handleHover = (event) => {
    event.target.classList.add('hovered');
  };

  const handleLeave = (event) => {  
    event.target.classList.remove('hovered');
  };

  return (
    <div style={{ display: 'flex' }}>
      <SideBar/>
      <div style={{ padding: '20px' }}>
          <h1>Welcome to Admin Dashboard</h1>
          {/* Main content area */}
      </div>
    </div>
  );
};

export default HomeScreen;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const HomeScreen = () => {
//   return (
//     <div style={{ display: 'flex' }}>
//       <div style={{ marginRight: '20px' }}>
//         <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
//           <h2>Manage Sellers</h2>
//           <Link to="/manage-sellers">Go to Manage Sellers</Link>
//         </div>
//         <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
//           <h2>Manage Buyers</h2>
//           <Link to="/customers">Go to Manage Buyers</Link>
//         </div>
//         <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
//           <h2>Feedbacks</h2>
//           {/* Add link or content for feedbacks */}
//         </div>
//       </div>
//       <div>
//         <h1>Welcome to Admin Dashboard</h1>
//         {/* Main content area */}
//       </div>
//     </div>
//   );
// };

// export default HomeScreen;

// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // // import { Link } from 'react-router-dom';

// // const HomeScreen = () => {
// //   return (
// //     <div>
// //       <h1>Welcome to Admin Dashboard</h1>
// //       <div>
// //         <h2>Manage Sellers</h2>
// //         {/* //<Link to="/manage-sellers">Go to Manage Sellers</Link> */}
// //       </div>
// //       <div>
// //         <Link to="/customers">Manage Buyers</Link>
// //         {/* <Link to="/manage-buyers">Go to Manage Buyers</Link> */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default HomeScreen;