import React, { createContext, useState } from 'react';

import './style.css';

import InputArea from './components/input-area/input-area.component.jsx';
import NotesContainer from './components/notes-container/notes-container.component.jsx';
export const NotesContext = createContext({});
export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const value = { notes, setNotes };

  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};

export default function App() {
  return (
    <NotesProvider>
      <div className='app'>
        <InputArea />
        <NotesContainer />
      </div>
    </NotesProvider>
  );
}
