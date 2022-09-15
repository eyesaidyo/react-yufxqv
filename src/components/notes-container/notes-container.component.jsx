import React, { useContext } from 'react';
import './notes-container.styles.scss';
import NoteItem from '../note-item/note-item.component.jsx';
import { NotesContext } from '../../App.js';
function NotesContainer() {
  const { notes, setNotes } = useContext(NotesContext);
  

  return (
    <div className="notes-container">
      {notes.map((msg, indx) => (
        <NoteItem  key={indx} message={msg} />
      ))}
    </div>
  );
}

export default NotesContainer;
