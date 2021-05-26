const express = require('express');
const bodyParser = require( 'body-parser');
const helloRoute = require( './routes/hello');

const app = express();

app.use(bodyParser.json());
app.use( bodyParser.urlencoded({ extended: true }) );

app.use('/', helloRoute);
app.use('/static', express.static('static'));

const PORT = 3031;
app.listen(PORT , () => {
  console.log(`Start olx-cron (port=${PORT})`);
});

module.exports = app;