const express = require('express');
const router = express.Router();

router.get('/keycaps/reindeer-fiesta-keycap', (req, res, next) => res.render('blog-posts/reindeer-fiesta-keycap.html'));

module.exports = router;