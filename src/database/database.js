// Dependencies
const mongoose = require('mongoose');

// Connect to database
function connectToDatabase(){
  mongoose.connect(process.env.URLDATABASE)
  .then(() => console.log("DATABASE connected"))
  .catch((err) => console.log("Error in DATABASE connection: "+err));
}

module.exports = connectToDatabase;