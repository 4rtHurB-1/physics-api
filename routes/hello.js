const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send(200, 'It works :)');
});

module.exports = router;