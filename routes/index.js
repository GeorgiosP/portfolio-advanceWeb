var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Georgios Psarakis' });
});
/* Get work page */
router.get('/work', function(req, res, next){
res.render('work',{title: 'My Projects'});
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



var transporter =
nodemailer.createTransport('smtps://geo.psarakis1234%40gmail.com:baa12345@smtp.gmail.com');

// nodemailer
router.post('/send', function(req,res){
  console.log(req.body)

var mailOptions = {
  from:'"Georgios Psarakis" <geo.psarakis1234@gmail.com>',
  to: req.body.email,
  subject: 'Thanks!',
  text: req.body.message,
  html: '<b>Thanks for getting in contact with me! I will respond ASAP:</b>',
};
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }else{
res.redirect('/contact')
      console.log('Message sent: ' + info.response)

}

}); // end of transpeter.sendMail

});// end of router.post
module.exports = router;
