const express = require('express');
const path = require('path');
const ejs = require('ejs');
const index = require('./routes/index');
const keycaps = require('./routes/keycaps');
const our_commitment = require('./routes/our-commitment');
const blog_post = require('./routes/blog-post');

const app = express();
const port = (process.env.PORT || 3000);

app.set('port', port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.engine('html', ejs.renderFile);

app.use(index);
app.use(keycaps);
app.use(our_commitment);
app.use(blog_post);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log('Example app listening on port 3000!'));