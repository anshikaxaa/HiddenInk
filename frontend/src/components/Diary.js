import React, { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';

const Diary = ({ notes }) => {
  const [page, setPage] = useState(0);

  const onFlip = (e) => {
    setPage(e.data);
  };

  return (
    <div className="diary-container h-full bg-yellow-100 p-4 flex flex-col">
      <nav className="bg-yellow-800 text-white p-4 mb-4 rounded">
        <h1 className="text-xl font-bold">Secret Diary</h1>
      </nav>

      <div className="flex-1 flex justify-center items-center">
        <HTMLFlipBook
          key={notes.length}  // force remount when notes change
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
        <div className="page bg-yellow-300 flex items-center justify-center text-2xl font-bold">
          Cover Page (Locked)
        </div>
        {notes.length === 0 && (
          <div className="page bg-white p-4 flex items-center justify-center italic">
            No notes in this folder.
          </div>
        )}
        {notes.map((note, index) => (
          <div key={index} className="page bg-white p-6">
            <h2 className="text-xl font-semibold mb-2">{note.title}</h2>
            <p className="whitespace-pre-wrap">{note.content}</p>
          </div>
        ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default Diary;
