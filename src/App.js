import logo from './resources/images/LOGO.png';
import logoWhite from './resources/images/LOGO-white.png';
import './App.css';
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import AboutPage from './AboutPage';
import Location from './Location';
import ErrorPage from './ErrorPage';
import Home from './Home';

function App() {
  return (
    <main>
      <header>
        <img src={logo} alt="Logo" />
        <nav>
          <ul className="nav-list">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">À propos</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>

      <footer>
        <div className='footer-content'>
          <img src={logoWhite} alt="logo" />
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
