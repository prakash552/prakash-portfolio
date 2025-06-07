import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Homepage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact/>}/>
   <Route path="/projects" element={<Projects/>}/>
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
