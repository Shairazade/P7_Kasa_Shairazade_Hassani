import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Error from './pages/Error.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;