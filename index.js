// Create a basic express app
const express = require('express');
const path = require('path');
const app = express();

// Set the port
const port = process.env.PORT || 3000;

// Use JSON
app.use(express.json());

// Routes go here
app.use('/exampleRoute', require('./routes/exampleRoute'));

// Queue the frontend
app.use(express.static('build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

// Run the app
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
