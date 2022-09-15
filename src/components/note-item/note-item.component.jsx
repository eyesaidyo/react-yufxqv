import React, { useContext } from 'react';
import './note-item.styles.scss';
import { NotesContext } from '../../App.js';
function NoteItem(props) {
  const { notes, setNotes } = useContext(NotesContext);
  function deleteNote(e) {
    console.log(e);
    const index = notes.indexOf(e.target.innerHTML);
    const newNotes = notes.filter((note, pos) => index !== pos);
    setNotes(newNotes);
  }
  return (
    <div onClick={deleteNote} className="note-card">
      {props.message}
    </div>
  );
}
export default NoteItem;
