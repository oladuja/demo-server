const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const path = require('path');
const admin = require('./routes/admin');
const shop = require('./routes/shop');
const utils = require('./controllers/utils');

app.set('view engine', 'ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', admin.router);
app.use(shop);


app.use(utils.get404);


app.listen(3000);