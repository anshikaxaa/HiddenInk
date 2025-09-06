import React, { useState } from 'react';

const Note = () => {
  const [content, setContent] = useState('');

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="note-editor p-4 bg-white shadow-md rounded-md max-w-xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-2">Note Editor</h2>
      <textarea
        className="w-full h-64 p-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
        placeholder="Write your note here..."
        value={content}
        onChange={handleChange}
      />
    </div>
  );
};

export default Note;
