// Dependencies
const express = require('express');

// Internal Requires
const connectToDatabase = require('./src/database/database');

// Starting database connection
connectToDatabase();

// Starting application
const app = express();


app.use(express.json());

// Main route
app.get('/', (req,res) => {
  res.send("Home");
})

module.exports = app;