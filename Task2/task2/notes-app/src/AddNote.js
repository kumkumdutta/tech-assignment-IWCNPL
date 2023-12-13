
import React, { useState } from 'react';
import axios from 'axios';

const AddNote = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAdd = () => {
  
    axios.post('http://your-api-url/api/notes', { title, content })
      .then(response => {
        onAdd(response.data);
        setTitle('');
        setContent('');
      })
      .catch(error => console.error('Error adding note:', error));
  };

  return (
    <div>
      <h2>Add Note</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
      ></textarea>
      <button onClick={handleAdd}>Add Note</button>
    </div>
  );
};

export default AddNote;
