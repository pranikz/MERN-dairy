const express = require('express')
const dotenv  = require('dotenv');
const notes = require("./data/notes")
const app = express()
dotenv.config()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Hello World! API working'))
app.get('/api/notes', (req, res) => {res.json(notes)});
app.get('/api/notes/:id', (req, res) => {const note = notes.find((n) => n._id === req.params.id);
res.send(note); });

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))