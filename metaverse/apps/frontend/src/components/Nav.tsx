import React, { useState } from 'react';
import '../index.css';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          MetaVerse
        </div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
        <ul className={`lg:flex  lg:items-center lg:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <li>
            <a href="/" className="block text-white hover:text-gray-300 py-2 lg:py-0">Home</a>
          </li>
          <li>
            <a href="/signin" className="block text-white hover:text-gray-300 ml-6 py-2 lg:py-0">Login</a>
          </li>
          <li>
            <a href="/signup" className="block text-white hover:text-gray-300 ml-6 py-2 lg:py-0">SignUp</a>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default NavBar;