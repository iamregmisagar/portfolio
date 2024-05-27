import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Content/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-neutral-900 text-white fixed w-full top-0 left-0 z-50 h-[10vh] flex items-center" aria-label="main navigation">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-20 h-full">
        <div className="flex items-center">
          <Link to="/" className="navbar-item">
            <img
              src={logo}
              alt="Logo"
              className="h-16 md:h-24"
            />
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <nav className={`navbar-menu ${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4`}>
          <a href="https://www.linkedin.com/in/iamregmisagar/" className="navbar-item p-2 md:px-4 hover:underline">View Linkedin</a>
          <Link to="/contact" className="navbar-item button bg-yellow-500 text-black font-bold p-2 md:px-4 rounded hover:bg-yellow-300">Say Hello 👋</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
