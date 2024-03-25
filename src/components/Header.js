import React from 'react';
import Logo from './Logo';
import '../style/header.css';
import VerticalLine from '../utils/VerticalLine';
import LoginPage from './LoginPage';
import Login from './Login';

const Header = () => {
 
  return (
    <div className="bg-transparent text-white">
      <Logo />
      <div className="flex justify-between items-left mt-4 mr-7">
 <nav className="flex justify-between w-full">
    <div className="flex-grow"></div>
    <ul className="flex space-x-5">
      <li className="nav-item">
        <span>Home</span>
      </li>
      <li className="nav-item">
        <span>Why Us</span>
      </li>
      <li className="nav-item">
        <span>Cost Calculator</span>
      </li>
      <li className="nav-item">
        <span>Contact</span>
      </li>
    </ul>
    <div className="flex items-center space-x-4 ml-4"> {/* Add space between <VerticalLine />, <LoginPage />, and <Login /> */}
      <VerticalLine />
      <LoginPage />
      <Login />
    </div>
 </nav>
</div>


      <hr className="border-b-1 border-gray-120 mt-[40px]" />
    </div>



  );
};

export default Header;
