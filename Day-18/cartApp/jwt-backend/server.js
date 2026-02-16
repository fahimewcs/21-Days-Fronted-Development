// const express = require('express');
// const jwt = require('jsonwebtoken');
// const cors = require('cors');

// const app = express();
// const PORT = 3000;

// app.use(cors());
// app.use(express.json());

// // Secret key (in real app- it will use .env)
// const SECRET_KEY = 'my-secret-key';

// // Fake user (practice purpose)
// const USER = {
//   email: 'test@gmail.com',
//   password: '123',
//   name: 'Fahim'
// };

// // 🔐 LOGIN ROUTE
// app.post('/login', (req, res) => {
//   const { email, password } = req.body;

//   if (email !== USER.email || password !== USER.password) {
//     return res.status(401).json({ message: 'Invalid credentials' });
//   }

//   const token = jwt.sign(
//     { email: USER.email, name: USER.name },
//     SECRET_KEY,
//     { expiresIn: '1h' }
//   );

//   res.json({
//     token,
//     username: USER.name
//   });
// });

// // 🛡️ Middleware to verify token
// function authenticateToken(req, res, next) {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];

//   if (!token) return res.sendStatus(401);

//   jwt.verify(token, SECRET_KEY, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// }

// // 🔒 Protected route
// app.get('/dashboard', authenticateToken, (req, res) => {
//   res.json({
//     message: 'Welcome to Dashboard',
//     user: req.user
//   });
// });

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });




//----using user.json file-----
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'my-secret-key';
const USERS_FILE = './users.json';

app.use(cors());
app.use(express.json());

/* ---------- Helper Functions ---------- */

function getUsers() {
  const data = fs.readFileSync(USERS_FILE);
  return JSON.parse(data);
}

function saveUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

/* ---------- SIGNUP ROUTE ---------- */

app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  const users = getUsers();

  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const newUser = { name, email, password };
  users.push(newUser);
  saveUsers(users);

  res.json({ message: 'User registered successfully' });
});

/* ---------- LOGIN ROUTE ---------- */

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const users = getUsers();

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { email: user.email, name: user.name },
    SECRET_KEY,
    { expiresIn: '1h' }
  );

  res.json({
    token,
    username: user.name
  });
});

/* ---------- JWT Middleware ---------- */

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

/* ---------- PROTECTED ROUTE ---------- */

app.get('/dashboard', authenticateToken, (req, res) => {
  res.json({
    message: 'Welcome to Dashboard',
    user: req.user
  });
});

/* ---------- ROOT ---------- */

app.get('/', (req, res) => {
  res.send('JWT Backend Running ✅');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
