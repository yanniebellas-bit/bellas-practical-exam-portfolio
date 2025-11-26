import React from 'react';


function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center shadow-inner">
      <div className="container mx-auto">
        <p className="text-sm">
          © {new Date().getFullYear()} Exam Portfolio. All rights reserved.
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Built with React and simple components.
        </p>
      </div>
    </footer>
  );
}

export default Footer;