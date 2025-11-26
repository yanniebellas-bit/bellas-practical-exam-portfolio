import React from 'react';


function Hero() {
  return (
    <main className="bg-slate-50 py-20 text-center min-h-[40vh] flex items-center justify-center">
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-5xl font-extrabold text-slate-900 mb-4">
          Welcome to My Exam Portfolio!
        </h2>
        <p className="text-xl text-slate-600 mb-8">
          This is the central part of the application, demonstrating the use of components.
        </p>
        <button className="bg-indigo-500 text-white font-semibold py-3 px-8 rounded-lg shadow-xl hover:bg-indigo-600 transition duration-300 transform hover:scale-105">
          View My Work
        </button>
      </div>
    </main>
  );
}

export default Hero;