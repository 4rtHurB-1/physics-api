const express = require('express');
const bodyParser = require( 'body-parser');
const helloRoute = require( './routes/hello');
const materialsRoute = require( './routes/materials');
const themesRoute = require( './routes/themes');

const app = express();

app.use(bodyParser.json());
app.use( bodyParser.urlencoded({ extended: true }) );

app.use('/', helloRoute);
app.use('/static', express.static('static'));

const PORT = process.env.PORT || 3000;
app.listen(PORT , async () => {
  console.log(`Start olx-cron (port=${PORT})`);
});

app.use('/api/materials', materialsRoute);
app.use('/api/themes', themesRoute);

module.exports = app;
