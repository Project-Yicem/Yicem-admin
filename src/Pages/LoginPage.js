import React, { useState } from 'react';
import '../Styles/styles.css'; // Assuming you have imported styles from your CSS file
import logoImg from '../Assets/logo.png';
import { useNavigate } from 'react-router-dom';

export default function LoginScreen({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log(`Login pressed with email: ${email} and password: ${password}`);
    // Here you can implement your login logic
    // For now, let's just navigate to the MainHome page
    navigate("/home");
  };

  return (
    <div className="container">
      <img src={logoImg} alt="Logo" className="image" />
      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input"
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input"
      />
      <button onClick={handleLogin} className="button">
        Login
      </button>
    </div>
  );
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