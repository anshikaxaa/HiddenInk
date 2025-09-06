import React, { useState } from 'react';

const Diary = () => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="diary-container h-screen bg-yellow-100">
      {/* Navigation */}
      <nav className="bg-yellow-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Secret Diary</h1>
          <div className="space-x-4">
            <button onClick={handleFlip} className="hover:underline">
              {flipped ? 'Previous' : 'Next'}
            </button>
          </div>
        </div>
      </nav>

      {/* Diary Pages */}
      <div className="flex h-full perspective-1000">
        {/* Left Page */}
        <div
          className={`left-page w-1/2 p-8 bg-white shadow-lg border-r-2 border-yellow-200 transition-transform duration-700 ease-in-out transform origin-left ${
            flipped ? 'rotate-y-180' : ''
          }`}
          onClick={handleFlip}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <h2 className="text-2xl font-serif mb-4">Left Page</h2>
          <p className="text-gray-700">This is the left page of the diary.</p>
        </div>

        {/* Right Page */}
        <div
          className={`right-page w-1/2 p-8 bg-white shadow-lg transition-transform duration-700 ease-in-out transform origin-left ${
            flipped ? '' : 'rotate-y-180'
          }`}
          onClick={handleFlip}
          style={{ backfaceVisibility: 'hidden', position: 'absolute', left: '50%', top: 0, height: '100%' }}
        >
          <h2 className="text-2xl font-serif mb-4">Right Page</h2>
          <p className="text-gray-700">This is the right page of the diary.</p>
        </div>
      </div>
    </div>
  );
};

export default Diary;
