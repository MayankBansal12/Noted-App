import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // Send a POST request to the server with email and password
      const response = await axios.post("http://localhost:8000/user/login", {
        email,
        password,
      });

      // If login is successful, the server will send back a token in the response
      const token = response.data.token;

      // Save the token in local storage or a cookie for future authenticated requests
      localStorage.setItem("token", token);

      // Redirect to the home page 
      window.location.href = "/";
    } catch (error) {
      // If login fails, console log the error
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="auth-form">
      <h1>Login</h1>
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
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
      <div className="links">
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
        <p>
          Forgot your password? <Link to="/forgotpass">Reset</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
