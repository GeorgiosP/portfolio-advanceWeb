var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Georgios Psarakis' });
});
/* Get work page */ 
router.get('/work', function(req, res, next){
res.render('work',{title: 'My past Projects'});
});
/* Get skills page */
router.get('/skills', function(req,res,next){
res.render('skills',{title: 'My Skills'});
});
/* Get about page */
router.get('/about', function(req,res,next){
res.render('about', {title: 'About Me'});
});
/* Get Contact page */
router.get('/contact', function(req,res,next){
res.render('contact',{title: 'Contact Me'})
})

module.exports = router;
