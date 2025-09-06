import React, { useState } from 'react';

const Folders = ({ folders, selectedFolder, onSelectFolder, onCreateFolder }) => {
  const [newFolderName, setNewFolderName] = useState('');

  const handleCreateFolder = () => {
    if (newFolderName.trim()) {
      onCreateFolder(newFolderName.trim());
      setNewFolderName('');
    }
  };

  return (
    <div className="w-64 bg-gray-100 p-4 h-full">
      <h2 className="text-lg font-bold mb-4">Folders</h2>
      <ul className="mb-4">
        {folders.map((folder, index) => (
          <li
            key={index}
            className={`p-2 cursor-pointer rounded ${
              selectedFolder === index ? 'bg-blue-200' : 'hover:bg-gray-200'
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
          className="flex-1 p-2 border rounded-l"
        />
        <button
          onClick={handleCreateFolder}
          className="p-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Folders;
