// Express.js
const express = require('express');
const app = express();
const port = 3000;

// Other Dependencies
const bodyParser = require('body-parser');
const less = require('less-middleware');
const jsx = require('express-react-views');
const path = require('path');

// Config
app.use(bodyParser.json()); // Parse POST Requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(less(path.join(__dirname, 'app/public'))); // LESS Support
app.use(express.static('app/public')); // Static Resources
app.set('views', path.join(__dirname, 'app/views')); // Views
app.set('view engine', 'jsx'); // View Engine
app.engine('jsx', jsx.createEngine());

// Routes/Controllers
app.use('/'     , require('./app/routes/index'));
app.get('/stats', require('./app/routes/stats'));

// Launch Server
app.listen(port, () => console.log(`Server listening on port ${port}.\nConnect via http://localhost:${port}`));
