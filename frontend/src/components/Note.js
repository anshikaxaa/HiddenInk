import React, { useState } from 'react';

const Note = ({ onAddNote }) => {
  const [content, setContent] = useState('');

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSave = () => {
    if (content.trim()) {
      onAddNote({ title: 'Note', content: content.trim() });
      setContent('');
    }
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
      <button
        onClick={handleSave}
        className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
      >
        Save Note
      </button>
    </div>
  );
};

export default Note;
