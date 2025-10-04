import React, { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';

const Diary = ({ notes, theme }) => {
  const [page, setPage] = useState(0);

  const onFlip = (e) => {
    setPage(e.data);
  };

  return (
    <>
      <style>
        {`
          .notebook-lines {
            background-image: linear-gradient(to bottom, #000 1px, transparent 1px);
            background-size: 100% 25px;
            background-position: 0 20px;
            line-height: 25px;
          }
          .diary-container {
            cursor: url('/cursor.png') 25 25, auto;
          }
        `}
      </style>
      <div className="diary-container h-full bg-pink-100 dark:bg-gray-900 p-4 flex flex-col">
        <nav className="bg-pink-800 dark:bg-gray-800 text-white p-4 mb-4 rounded">
          <h1 className="text-xl font-bold">Secret Diary</h1>
        </nav>

        <div className="flex-1 flex justify-center items-center">
          <HTMLFlipBook
            key={notes.length}
            width={500}
            height={600}
            size="stretch"
            minWidth={300}
            maxWidth={800}
            minHeight={400}
            maxHeight={1200}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            onFlip={onFlip}
            className="shadow-lg"
          >
            {/* THIS IS THE COVER PAGE */}
            <div
              className="page flex items-center justify-center text-2xl font-bold text-black dark:text-white border border-black rounded-sm"
              style={{
                background: '#fff',
                minHeight: '600px',
                minWidth: '500px',
                boxShadow: '0 0 10px rgba(0,0,0,0.2)'
              }}
            >
              {/* Show the image directly for debugging */}
              <img src="/cover.png" alt="Diary Cover" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </div>
            {notes.length === 0 && (
              <div className="page bg-white dark:bg-gray-800 p-4 flex items-center justify-center italic text-black dark:text-white border border-black rounded-sm notebook-lines">
                No notes in this folder.
              </div>
            )}
            {notes.map((note, index) => (
              <div key={index} className="page bg-white dark:bg-gray-800 p-6 text-black dark:text-white border border-black rounded-sm notebook-lines">
                <h2 className="text-xl font-semibold mb-2">{note.title}</h2>
                <p className="whitespace-pre-wrap">{note.content}</p>
              </div>
            ))}
          </HTMLFlipBook>
        </div>
      </div>
    </>
  );
};

export default Diary;