import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News from './components/News';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';

function App() {
  const apiKey = 'f90a759c03ed4e97b5e607408cc72509'; // Your API key

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<News country="us" category="general" apiKey={apiKey} />} />
          <Route path="/business" element={<News country="us" category="business" apiKey={apiKey} />} />
          <Route path="/entertainment" element={<News country="us" category="entertainment" apiKey={apiKey} />} />
          <Route path="/sports" element={<News country="us" category="sports" apiKey={apiKey} />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;