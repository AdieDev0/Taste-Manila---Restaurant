import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Menu from "./Pages/Menu";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
