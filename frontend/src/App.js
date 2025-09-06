import React, { useState } from 'react';
import Diary from './components/Diary';
import Note from './components/Note';

function App() {
  const [showNote, setShowNote] = useState(false);

  return (
    <div className="App">
      {showNote ? <Note /> : <Diary />}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={() => setShowNote(!showNote)}
          className="bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-600 transition"
        >
          {showNote ? 'Back to Diary' : 'Open Note Editor'}
        </button>
      </div>
    </div>
  );
}

export default App;
