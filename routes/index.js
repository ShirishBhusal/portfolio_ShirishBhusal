
/* Shirish Bhusal (301271215)   9/26/2023*/ 


// Import the Express module
var express = require('express');
// Create an instance of the Express Router
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Render the 'index' view and pass the title 'Express' as a variable
  res.render('index', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  // Render the 'contact' view and pass the title 'Express' as a variable
  res.render('contact', { title: 'Express' });
});

router.get('/credit', function(req, res, next) {
  // Render the 'credit' view and pass the title 'Express' as a variable
  res.render('credit', { title: 'Express' });
});

router.get('/listing', function(req, res, next) {
  // Render the 'listing' view and pass the title 'Express' as a variable
  res.render('listing', { title: 'Express' });
});

router.get('/listing2', function(req, res, next) {
  // Render the 'listing2' view and pass the title 'Express' as a variable
  res.render('listing2', { title: 'Express' });
});

// Export the router so that it can be used in other parts of your application
module.exports = router;
