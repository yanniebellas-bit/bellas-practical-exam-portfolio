import React from 'react';


function Navbar() {
  return (
    <nav className="bg-indigo-700 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          My Portfolio
        </div>
        <div className="space-x-4">
          <a href="#" className="text-white hover:text-indigo-200 transition duration-300">Home</a>
          <a href="#" className="text-white hover:text-indigo-200 transition duration-300">Projects</a>
          <a href="#" className="text-white hover:text-indigo-200 transition duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;