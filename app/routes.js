
var express = require('express');

var path=require('path');

var router =express.Router();

// Lot more seperation for more routes.Cleaner design

//export our router//

module.exports=router;

router.get('/',function(req,res)

	{
		// res.sendFile(path.join(__dirname,'../index.html'));
		res.render('pages/index');
	});


router.get('/about',function(req,res)

	{
		var name="The Nair";
		res.render('pages/about',{'name':name});
	});


router.get('/contact',function(req,res)

	{
		res.render('pages/contact');
	});


router.post('/contact',function(req,res){

var names=req.body.name;
res.render('pages/about',{'name':names});
	
})