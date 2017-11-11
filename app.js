const express = require('express');
const path = require('path');
const ejs = require('ejs');
const index = require('./routes/index');

const app = express();
const port = (process.env.PORT || 3000);

app.set('port', port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.engine('html', ejs.renderFile);

app.use(index);

app.listen(post, () => console.log('Example app listening on port 3000!'));