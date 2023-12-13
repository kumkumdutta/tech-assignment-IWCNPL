// NoteList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
 
    axios.get('http://your-api-url/api/notes')
      .then(response => setNotes(response.data))
      .catch(error => console.error('Error fetching notes:', error));
  }, []);

  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <strong>{note.title}</strong>
            <p>{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
