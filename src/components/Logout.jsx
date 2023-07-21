import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Logout = () => {
    const token=localStorage.getItem("token");
    const handleLogout = async () => {
        try {
            // Send a POST request to the server to logout the user
            await axios.post("http://localhost:8000/user/logout", {}, {
                    headers: {
                        Authorization: `${token}`,
                    },
                }
            );
            // After successful logout, remove the token from localStorage
            localStorage.removeItem("token");

            // Redirect the user to the login page
            window.location.href = "/login";
        } catch (error) {
            // If logout fails, handle the error here
            console.error("Logout failed:", error);
        }
    };


    return (
        <div className="auth-form">
            <h1>Are you sure you want to logout from your account?</h1>
            <button type="button" onClick={handleLogout}>Yes, Logout!</button>
            <p>
                Back to <Link to="/">Home</Link>
            </p>
        </div>
    );
};

export default Logout;
