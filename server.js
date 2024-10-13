// Internal Require
const app = require('./index');

// Port where server will run
const port = 3000;

// Starting server and application
app.listen(port, () => {
  console.log(`Starting server at http://localhost:${port}`);
})