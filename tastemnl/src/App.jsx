import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route />
      </Routes>
    </Router>
  );
};

export default App;
