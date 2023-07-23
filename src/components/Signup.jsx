import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

const Signup = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      // Send a POST request to the server with email and password
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/signup`, {
        username,
        email,
        password,
      });

      // If sign-up is successful, the server will send back a response with a success message
      console.log("Sign-up successful:", response.data.message);

      // Redirect to the login page after successful sign-up
      window.location.href = "/login";
    } catch (error) {
      // If sign-up fails, print the error
      console.error("Sign-up failed:", error);
    }
  };

  return (
    <>
      <Header />
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
    </>
  );
};

export default Signup;
