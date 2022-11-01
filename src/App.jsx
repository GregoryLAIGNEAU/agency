// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ThemeContextProvider from './context/Theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import StudyCase from './components/StudyCase';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="works/:projectSlug" element={<StudyCase />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
