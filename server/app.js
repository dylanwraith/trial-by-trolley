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

// Include route files
const sampleRouter = require('./routes/sampleroute');

// Specify routes
app.use('/api', sampleRouter);

// Start server at specified port number
app.listen(port, () => {
  console.log('Server started at port: ' + port);
});