const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => res.render('index.html'));
router.get('/keycaps', (req, res, next) => res.render('keycaps.html'));
router.get('/our-commitment', (req, res, next) => res.render('our-commitment.html'));

module.exports = router;