
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from './Features/user';
// import axios from 'axios';
// import { NavLink, useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     if (email === '' || password === '') {
//       alert('Please enter both email and password');
//       return;
//     }
// // console.log("sakldmkdljn")
//     try {
//       const response = await axios.post('http://localhost:8181/api/v1/auth/authenticate', {
//         email,
//         password,
//       });
//       console.log(response.data)
//       const token = response.data.token;
//       // const user = response.data.userResponse;

//       // localStorage.setItem('token', token);
//       // dispatch(login({ name: user.name }));
//       // localStorage.setItem('user', JSON.stringify(user));

//       navigate('/home');
//     } catch (error) {
//       console.error('Error during login:', error);
//       alert('An error occurred during login. Please try again.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-content">
//         <h1 className="login-header">Log in to MakeFolio</h1>
//         <form onSubmit={handleLogin}>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input type="text" id="email" value={email} onChange={handleEmail} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button type="submit" className="login-button">
//             Log In
//           </button>
//           Don't have an account? <NavLink to="/signup">Sign up</NavLink>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './Features/user';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import './login.css';  

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert('Please enter both email and password');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8181/api/v1/auth/authenticate', {
        email,
        password,
      });
      console.log(response.data)
      const token = response.data.token;
      const user = response.data.userResponse;

      localStorage.setItem('token', token);
      console.log("nithinrajkumar792@gmail.com");
      // dispatch(login({ name: user.name }));
      localStorage.setItem('user', JSON.stringify(user));

      navigate('/home');
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-container">
        <div className="login-content">
          <h1 className="login-header">Log in to MakeFolio</h1>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" value={email} onChange={handleEmail} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="login-button">
              Log In
            </button>
            <p className="signup-link">
              Don't have an account? <NavLink to="/signup">Sign up</NavLink>
            </p>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
