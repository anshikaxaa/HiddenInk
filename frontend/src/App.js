import React, { useState } from 'react';
import Diary from './components/Diary';
import Note from './components/Note';
import Folders from './components/Folders';

function App() {
  const [showNote, setShowNote] = useState(false);
  const [folders, setFolders] = useState([{ name: 'Default', notes: [] }]);
  const [selectedFolder, setSelectedFolder] = useState(0);

  const handleCreateFolder = (name) => {
    setFolders([...folders, { name, notes: [] }]);
  };

  const handleAddNote = (note) => {
    const updatedFolders = [...folders];
    updatedFolders[selectedFolder].notes.push(note);
    setFolders(updatedFolders);
  };

  return (
    <div className="App flex h-screen">
      <Folders
        folders={folders}
        selectedFolder={selectedFolder}
        onSelectFolder={setSelectedFolder}
        onCreateFolder={handleCreateFolder}
      />
      <div className="flex-1">
        {showNote ? (
          <Note onAddNote={handleAddNote} />
        ) : (
          <Diary notes={folders[selectedFolder].notes} />
        )}
        <div className="fixed bottom-4 right-4">
          <button
            onClick={() => setShowNote(!showNote)}
            className="bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-600 transition"
          >
            {showNote ? 'Back to Diary' : 'Open Note Editor'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
