const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors=require("cors");


const app = express();
const port = 3000;
const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}
// Read the users data from users.json
const usersData = JSON.parse(fs.readFileSync('users.json'));
const dbData = JSON.parse(fs.readFileSync('db.json'));

// Secret key for JWT token (change this in a real application)
const secretKey = 'aecretKey1';

app.use(bodyParser.json());
app.use(cors(corsOptions))

// Login endpoint to validate username and password and generate a JWT token
app.post('/login', (req, res) => {
  const { username, password } = req.body.body;
  console.log(req.body)

  // Find the user with the provided username
  const user = usersData.users.find((user) => user.username === username);

  if (!user) {
    return res.status(403).json({ message: 'Invalid username or password' });
  }

  // Check if the password matches
  if (user.password !== password) {
    return res.status(403).json({ message: 'Invalid username or password' });
  }

  // Generate a JWT token for the authenticated user
  const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });

  res.json({ token:token,username:username });
});

// Posts endpoint with JWT authentication
app.get('/posts', verifyToken, (req, res) => {
  // Replace this with your posts data or reading from a db.json file.


  res.json(dbData.posts);
});

// Middleware to verify JWT token
function verifyToken(req, res, next) {
  console.log(req.headers)
  const token = req.headers['authorization'];
  const bearerToken = token.replace(/^Bearer\s/, '');
  if (!token) {
    return res.status(403).json({ message: 'Token is not provided' });
  }

  jwt.verify(bearerToken, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    req.user = user;
    next();
  }
  );
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
