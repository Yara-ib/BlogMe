require('dotenv').config();

const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config/db');

const app = express();
const port = 5000 || process.env.port;
connectDB();


app.use(express.static('public'));

app.use(expressEjsLayouts);
app.set('layout', './layouts/main');

app.set('view engine', 'ejs');


app.use('/', require('./server/routes/main'));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
