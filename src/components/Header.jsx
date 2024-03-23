import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import "../index.css";
import '../style/header.css';
import VerticalLine from '../utils/VerticalLine';
import LoginPage from './LoginPage';
import Login from './Login';

const Header = () => {
  const location = useLocation();
 
  return (
    <div>
       <Logo />
    <div className="flex justify-between items-left"> 
      <nav className = 'flex'>
        <ul className="flex float=left uppercase space-x-5"> 
          <li className={`nav-item ${location.pathname === '/' ? 'border-b border-gray-300 '  : ''}`}><Link to="/">Home</Link></li>
          <li className={`nav-item ${location.pathname === '/why_us' ? 'border-b border-gray-300' : ''}`}><Link to="/why_us">Why Us</Link></li>
          <li className={`nav-item ${location.pathname === '/cost_calc' ? 'border-b border-gray-300' : ''}`}><Link to="/cost_calc">Cost Calculator</Link></li>
          <li className={`nav-item ${location.pathname === '/contact' ? 'border-b border-gray-300' : ''}`}><Link to="/contact">Contact</Link></li>
        </ul>
        <VerticalLine />
        <LoginPage />
        <Login />
      </nav>
      
    </div>
    <hr className="border-b-2 border-gray-150" />
    </div> 
  
  
  );
};

export default Header;
