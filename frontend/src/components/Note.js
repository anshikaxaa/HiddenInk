import React, { useState } from 'react';

const Note = ({ onAddNote, theme }) => {
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
    <div className="note-editor p-4 bg-white dark:bg-gray-800 shadow-md rounded-md max-w-xl mx-auto mt-8 text-black dark:text-white">
      <h2 className="text-xl font-semibold mb-2">Note Editor</h2>
      <textarea
        className="w-full h-64 p-2 border border-gray-300 dark:border-gray-600 rounded resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white dark:bg-gray-700 text-black dark:text-white"
        placeholder="Write your note here..."
        value={content}
        onChange={handleChange}
      />
      <button
        onClick={handleSave}
        className="mt-2 px-4 py-2 bg-yellow-500 dark:bg-yellow-600 text-white rounded hover:bg-yellow-600 dark:hover:bg-yellow-700"
      >
        Save Note
      </button>
    </div>
  );
};

export default Note;
