import React from 'react';

const Diary = () => {
  return (
    <div className="diary-container h-screen bg-yellow-100">
      {/* Navigation */}
      <nav className="bg-brown-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Secret Diary</h1>
          <div className="space-x-4">
            <button className="hover:underline">Previous</button>
            <button className="hover:underline">Next</button>
          </div>
        </div>
      </nav>

      {/* Diary Pages */}
      <div className="flex h-full">
        {/* Left Page */}
        <div className="left-page w-1/2 p-8 bg-white shadow-lg border-r-2 border-yellow-200">
          <h2 className="text-2xl font-serif mb-4">Left Page</h2>
          <p className="text-gray-700">This is the left page of the diary.</p>
        </div>

        {/* Right Page */}
        <div className="right-page w-1/2 p-8 bg-white shadow-lg">
          <h2 className="text-2xl font-serif mb-4">Right Page</h2>
          <p className="text-gray-700">This is the right page of the diary.</p>
        </div>
      </div>
    </div>
  );
};

export default Diary;
