
/* Shirish Bhusal (301271215)   9/26/2023*/ 


// Import required modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Create an instance of the Express application
var app = express();

// View engine setup (using EJS template engine)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware setup
app.use(logger('dev')); // Logging middleware for development
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded requests
app.use(cookieParser()); // Parse cookies
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

// Define routes using routers (indexRouter and usersRouter)
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
app.use('/', indexRouter); // Routes for the root path '/'
app.use('/users', usersRouter); // Routes for '/users' path

// Catch 404 errors and forward to the error handler
app.use(function(req, res, next) {
  next(createError(404)); // If no route matches, create a 404 error
});

// Error handler middleware
app.use(function(err, req, res, next) {
  // Set locals to make error information available in templates
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Set HTTP response status based on the error or default to 500 (Internal Server Error)
  res.status(err.status || 500);

  // Render the 'error' template to display an error page
  res.render('error');
});

// Start the Express app on port 3000
app.listen(3000, function() {
  console.log('Express server listening on port 3000');
});

// Export the Express app for external use (e.g., testing or other modules)
module.exports = app;
