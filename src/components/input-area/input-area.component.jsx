import React, { useState, useContext } from 'react';
import './input-area.styles.scss';
import { NotesContext } from '../../App.js';
function InputArea() {
  const [inputField, setInputField] = useState('');
  const { notes, setNotes } = useContext(NotesContext);
  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputField(newValue);
    // console.log()
  };
  const handleClick = () => {
    const notesUpdate = [...notes];
    if (inputField !== '') {
      notesUpdate.push(inputField);
      setNotes(notesUpdate);
    } else {
      alert('please leave a note');
    }
    setInputField('');
  };
  return (
    <div className="text-container">
      <textarea
        value={inputField}
        onChange={handleChange}
        className="text-box"
      ></textarea>
      <button onClick={handleClick}>post it</button>
    </div>
  );
}
export default InputArea;
