import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//css
import "../CSS/Login.css"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [, setUserType] = useState(null);
  const navigate = useNavigate();

  const onLogin = (type) => {
    setUserType(type);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    if (!email.trim() || !password.trim()) {
      setErrorMessage('Please enter your email and password.');
      return;
    }

    // Simulated authentication (replace with your actual authentication logic)
    const testUserEmail = 'user@kiit.com';
    const testUserPassword = 'user123';
    const testAdminEmail = 'admin@kiit.com';
    const testAdminPassword = 'admin123';

    if (email === testUserEmail && password === testUserPassword) {
      // Successful login as user
      onLogin('user');
      navigate('/home');
    } else if (email === testAdminEmail && password === testAdminPassword) {
      // Successful login as admin
      onLogin('admin');
      navigate('/home');
    } else {
      setErrorMessage('Invalid email or password.');
    }
  };

  return (
    <div className="login-container">
      <div className="login h1"><h1>Login</h1></div>
      
      <form className='form' onSubmit={handleSubmit}>
        <label className='email1' htmlFor="email">Email:</label>
        <input className='email2'
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <label className='password1' htmlFor="password">Password:</label>
        <input className='password2'
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button className='submit1' type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
