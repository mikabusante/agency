/* eslint-disable no-console */
require('dotenv').config({ path: 'variables.env' });

const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();
server.express.use(cookieParser());

// decode the jwt
server.express.use(async (req, res, next) => {
  const cookieToken = req.cookies.token;

  if (cookieToken) {
    const { email } = jwt.verify(cookieToken, process.env.APP_SECRET);
    console.log('logged in as:', email);

    req.email = email;
  }

  next();
});

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  details => {
    console.log(`Server is now running on port http://localhost:${details.port}`);
  }
);
