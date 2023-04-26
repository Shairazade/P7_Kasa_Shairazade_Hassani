import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import FicheLogement from './pages/FicheLogement.jsx';
import Error from './pages/Error.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = () => {
  return (
   
    <BrowserRouter>
      <div className='App'>
       
        <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/logement/:id" element={<FicheLogement />} />
              <Route path="*" element={<Error />} />
            </Routes>
        </main>
        <Footer/>
      </div>

    </BrowserRouter>
  );
};

export default App;