// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NoteList from './NoteList';
import AddNote from './AddNote';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add Note</Link></li>
          </ul>
        </nav>

        <Route path="/" exact component={NoteList} />
        <Route path="/add" component={AddNote} />
      </div>
    </Router>
  );
};

export default App;
