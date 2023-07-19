import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App;
