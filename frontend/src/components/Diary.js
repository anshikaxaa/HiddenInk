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
                // Change this line to use the new public folder path
                backgroundImage: `url(/Gemini_Generated_Image_ctktr6ctktr6ctkt (1).png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* You can add text here, or keep it empty */}
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