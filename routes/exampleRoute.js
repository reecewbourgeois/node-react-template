const express = require('express');
const router = express.Router();

// Route: localhost:3000/exampleRoute
router.get('/', (req, res) => {
  res.send('Hello World');
});

// DO NOT FORGET THIS LINE
module.exports = router;
