// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // Sample 'GET'
// app.get('/user', function (req, res) {
//   res.send('Got a GET request at /user');
// })

// // Sample 'PUT'
// app.put('/user', function (req, res) {
//   res.send('Got a PUT request at /user');
// })

// // Sample 'POST'
// app.post('/user', function (req, res) {
//   res.send('Got a POST request at /user');
// })

// // Sample 'DELETE'
// app.delete('/user', function (req, res) {
//   var name = req.query.name;
//   res.send('Got a DELETE request at /user ' + name);
// })

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;

// Import modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

// Initialize server
var app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contactlist', { useNewUrlParser: true, useUnifiedTopology: true });

// Display success or error on db connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database MongoDB @ 27017')
})

mongoose.connection.on('error', (err) => {
  if (err) {
    console.log('Error in database connection: ' + err);
  }
})

// Define port number
const port = 3000;

// Add middleware
app.use(cors());
app.use(bodyparser.json());

// Include static files (public)
app.use(express.static(path.join(__dirname, 'public')));

// Include routes
const sampleRouter = require('./routes/sampleroute');

// Include specified routes
app.use('/api', sampleRouter);

// Start server at specified port number
app.listen(port, () => {
  console.log('Server started at port: ' + port);
});