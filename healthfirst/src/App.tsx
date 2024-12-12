import React from 'react';

import './App.css';
import { Home } from './pages/home';
import Navbar from './components/Navbar';
import { About } from './pages/about';
import {Contact }from './pages/contact';
import { BrowserRouter as Router , Routes, Route, } from 'react-router-dom';

export const App: React.FC = () =>  {
  return (
    <div className="app">
      <Navbar />
      <Router>
          {/* Navbar is persistent and rendered above all routes */}
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
         
          </Routes>
        </Router>
    </div>
  );
}

export default App;
