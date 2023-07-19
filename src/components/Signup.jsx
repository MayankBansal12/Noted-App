import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Handle sign-up logic here
  };

  return (
    <div className="auth-form">
      <h1>Sign Up</h1>
      <form>
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        <button type="button" onClick={handleSignup}>Sign Up</button>
      </form>
      <p>
        Already a user? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
