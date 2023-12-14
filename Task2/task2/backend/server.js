const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(bodyParser.json());


const db = mysql.createConnection({
  host: 'localhost',
  user: 'kumkum',
  password: 'duttakumkum',
  database: 'note',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});


app.post('/api/notes', (req, res) => {
  const { title, content } = req.body;

  const insertQuery = 'INSERT INTO notes (title, content) VALUES (?, ?)';
  db.query(insertQuery, [title, content], (err, result) => {
    if (err) {
      console.error('Error creating note:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(201).json({ id: result.insertId, title, content });
    }
  });
});

app.get('/api/notes', (req, res) => {
  const selectQuery = 'SELECT * FROM notes';
  db.query(selectQuery, (err, results) => {
    if (err) {
      console.error('Error fetching notes:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(results);
    }
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const noteId = req.params.id;
  const deleteQuery = 'DELETE FROM notes WHERE id = ?';
  db.query(deleteQuery, [noteId], (err, result) => {
    if (err) {
      console.error('Error deleting note:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(204).send();
    }
  });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
