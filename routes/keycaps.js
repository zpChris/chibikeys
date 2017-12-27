const express = require('express');
const router = express.Router();

router.get('/keycaps', (req, res, next) => res.render('keycaps.html'));

module.exports = router;