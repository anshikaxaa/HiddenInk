import React, { useState, useEffect } from 'react';
import Diary from './components/Diary';
import Note from './components/Note';
import Folders from './components/Folders';

function App() {
  const [showNote, setShowNote] = useState(false);
  const [folders, setFolders] = useState([{ name: 'Default', notes: [] }]);
  const [selectedFolder, setSelectedFolder] = useState(0);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleCreateFolder = (name) => {
    setFolders([...folders, { name, notes: [] }]);
  };

  const handleAddNote = (note) => {
    const updatedFolders = [...folders];
    updatedFolders[selectedFolder].notes.push(note);
    setFolders(updatedFolders);
  };

  return (
    <div className={`App flex h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <Folders
        folders={folders}
        selectedFolder={selectedFolder}
        onSelectFolder={setSelectedFolder}
        onCreateFolder={handleCreateFolder}
        theme={theme}
      />
      <div className="flex-1">
        {showNote ? (
          <Note onAddNote={handleAddNote} theme={theme} />
        ) : (
          <Diary notes={folders[selectedFolder].notes} theme={theme} />
        )}
        <div className="fixed bottom-4 right-4 flex space-x-2">
          <button
            onClick={toggleTheme}
            className="bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-600 transition"
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
          <button
            onClick={() => setShowNote(!showNote)}
            className="bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-600 transition dark:bg-yellow-600 dark:hover:bg-yellow-700"
          >
            {showNote ? 'Back to Diary' : 'Open Note Editor'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
