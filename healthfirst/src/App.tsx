import React from "react";

import "./App.css";
import { Home } from "./pages/home";
import Navbar from "./components/Navbar";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Services } from "./pages/services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        {/* Navbar is persistent and rendered above all routes */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      <Footer />
      </Router>

    </div>
  );
};

export default App;
