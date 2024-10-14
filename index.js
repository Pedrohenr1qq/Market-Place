// Dependencies
const express = require('express');
require('dotenv').config();


// Internal Requires
const connectToDatabase = require('./src/database/database');
const userRouter = require('./src/router/user.router');
const loginRouter = require('./src/router/auth.router');

// Starting database connection
connectToDatabase();

// Starting application
const app = express();

app.use(express.json());

app.use('/user', userRouter);

app.use(loginRouter);

// Main route
app.get('/', (req,res) => {
  res.send("Home");
})

module.exports = app;