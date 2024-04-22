import React, { useState } from 'react';
import '../Styles/styles.css'; // Assuming you have imported styles from your CSS file
import logoImg from '../Assets/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { TextField, Button, Snackbar } from '@mui/material';


import axios from "axios";
//import { TextField } from '@mui/material';
//import { IP_ADDRESS } from "../Functions/GetIP";

export default function LoginScreen({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const hideError = () => {
    setShowError(false);
  }

  const navigate = useNavigate();

  //Get IP
  //let location = useLocation();
  //console.log(location);
  //let IP_ADDRESS = location.pathname;

  const handleLogin = async () => {
    console.log(`Login pressed with email: ${email} and password: ${password}`);

    if(!email || !password){
      setErrorMessage("Please fill all the fields!");
      setShowError(true);
      return;
    }

    try {
      const response = await axios.post(`http://localhost:8080/api/auth/signin`, {
        username: email,
        password: password,
      });
      //const { userToken, userID } = response.data;
      localStorage.setItem("userToken", response.data.token);
      localStorage.setItem("userID", response.data.id);
      navigate("/home");
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Cannot login with these credentials!");
      setShowError(true);
    }

    
  };
  
  return (
    <div className="container">
      <img src={logoImg} alt="Logo" className="image" />
      <TextField
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input"
        style={inputStyle}
      />
      <TextField
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input"
        style={inputStyle}
      />
      <Button onClick={handleLogin} variant="contained" color="primary" size="small" className="button">
        Login
      </Button>
      <Snackbar 
        open={showError} 
        autoHideDuration={6000} 
        onClose={hideError} 
        message={errorMessage} 
      />
    </div>
  );
}

const inputStyle = {
  padding: "0px",
  marginBottom: "10px"
}

// import React, { useState } from 'react';
// import { Image, TextInput, Button, Text } from 'react';

// // Assuming you have imported styles from your CSS file
// import '../Styles/styles.css';
// import logoImg from '../Assets/logo.png';

// export default function LoginScreen({ history }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     console.log(`Login pressed with email: ${email} and password: ${password}`);
//     // Here you can implement your login logic
//     // For now, let's just navigate to the MainHome page
//     history.push("/MainHome");
//   };

//   return (
//     <div className="container">
//       <img src={logoImg} alt="Logo" className="image" />
//       <TextInput
//         label="Enter Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="input"
//       />
//       <TextInput
//         label="Enter Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         type="password"
//         className="input"
//       />
//       <Button variant="contained" onClick={handleLogin} className="button">
//         Login
//       </Button>
//       <Text className="signupText">
//         Your company not registered into our system?
//       </Text>
//       <Button variant="contained" onClick={() => history.push("/Register")} className="hollowButton">
//         Create Registration Request
//       </Button>
//     </div>
//   );
// }