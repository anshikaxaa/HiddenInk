import React, { useState } from 'react';

const Folders = ({ folders, selectedFolder, onSelectFolder, onCreateFolder, theme }) => {
  const [newFolderName, setNewFolderName] = useState('');

  const handleCreateFolder = () => {
    if (newFolderName.trim()) {
      onCreateFolder(newFolderName.trim());
      setNewFolderName('');
    }
  };

  return (
    <div className="w-64 bg-gray-100 dark:bg-gray-800 p-4 h-full text-black dark:text-white">
      <h2 className="text-lg font-bold mb-4">Folders</h2>
      <ul className="mb-4">
        {folders.map((folder, index) => (
          <li
            key={index}
            className={`p-2 cursor-pointer rounded ${
              selectedFolder === index ? 'bg-blue-200 dark:bg-blue-700' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            onClick={() => onSelectFolder(index)}
          >
            {folder.name} ({folder.notes.length})
          </li>
        ))}
      </ul>
      <div className="flex">
        <input
          type="text"
          value={newFolderName}
          onChange={(e) => setNewFolderName(e.target.value)}
          placeholder="New folder name"
          className="flex-1 p-2 border rounded-l bg-white dark:bg-gray-700 text-black dark:text-white"
        />
        <button
          onClick={handleCreateFolder}
          className="p-2 bg-blue-500 dark:bg-blue-600 text-white rounded-r hover:bg-blue-600 dark:hover:bg-blue-700"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Folders;
