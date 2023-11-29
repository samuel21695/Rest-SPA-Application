const express = require('express');
const path = require('path');

const app = express()
const router = express.Router();

router.use('/static', express.static(path.join(__dirname, '..', 'static')));

// route setting
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'static', 'index.html'));
})

module.exports = router;