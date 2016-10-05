var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Georgios Psarakis' });
});
router.get('/work', function(req, res, next){
res.render('work',{title: 'My past Projects'});
});
router.get('/skills', function(req,res,next){
res.render('skills',{title: 'My Skills'});
});
router.get('/about', function(req,res,next){
res.render('about', {title: 'About Me'});
});
router.get('/contact', function(req,res,next){
res.render('contact',{title: 'Contact Me'})
})

module.exports = router;
