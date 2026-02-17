const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const USERS_FILE = './users.json';

// Helper functions
function readUsers() {
  try {
    return JSON.parse(fs.readFileSync(USERS_FILE));
  } catch (err) {
    return [];
  }
}

function writeUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// GET all users
app.get('/users', (req, res) => {
  const users = readUsers();
  res.json(users);
});

// POST create user
app.post('/users', (req, res) => {
  const users = readUsers();
  const newUser = { id: Date.now(), ...req.body }; // backend generates unique ID
  users.push(newUser);
  writeUsers(users);
  res.status(201).json(newUser);
});

// PUT update user
app.put('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const users = readUsers();
  const index = users.findIndex(u => u.id === id);

  if (index === -1) return res.status(404).send('User not found');

  users[index] = { id, ...req.body };
  writeUsers(users);
  res.json(users[index]);
});

// DELETE user
app.delete('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  let users = readUsers();
  const index = users.findIndex(u => u.id === id);

  if (index === -1) return res.status(404).send('User not found');

  const deleted = users.splice(index, 1);
  writeUsers(users);
  res.json(deleted[0]);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
