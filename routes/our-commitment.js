const express = require('express');
const router = express.Router();

router.get('/our-commitment', (req, res, next) => res.render('our-commitment.html'));

module.exports = router;