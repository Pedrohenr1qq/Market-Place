// Dependencies
const mongoose = require('mongoose');

// Connect to database
function connectToDatabase(){
  mongoose.connect('mongodb://127.0.0.1:27017')
  .then(() => console.log("DATABASE connected"))
  .catch((err) => console.log("Error in DATABASE connection: "+err));
}

module.exports = connectToDatabase;