import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import Logout from "./Logout";

const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/login" Component={Login} />
            <Route exact path="/logout" Component={Logout} />
            <Route exact path="/signup" Component={Signup} />
            <Route exact path="/forgotpass" Component={ForgotPassword} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App;
