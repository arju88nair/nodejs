		// // server.js
		// // import the http module
		// var http        = require('http');
		
		// // handle sending requests and returning responses
		// function handleRequests(req, res) {
		// 	alert("h");
		//   // return string
		//   res.end('Hello world!');
		// }
		
		// // create the server
		// var server      = http.createServer(handleRequests);
		
		// // start server and listen on port x
		// server.listen(8080, function() {
		//   console.log('Listening on port 8080');
		// });
		
		
		
		
		// npm install --g ejs --save
		// npm install --g express-ejs-layouts --save
		
		
		//npm install --save body-parser
		
		
		var express        =require('express');
		var expressLayouts =require('express-ejs-layouts');
		var bodyParser     =require('body-parser');
		
		var app            =express();
		var port           =8080;
		app.set('view engine','ejs');
		app.use(expressLayouts);	
		app.use(bodyParser.urlencoded({
		extended: true
		}))
		
		var router         =require('./app/routes');
		//express middleware.Everytime the route hits,this middleware calls the path
		
		app.use('/',router);
		
		
		
		//static files
		
		app.use(express.static(__dirname+'/public'));
		
		app.listen(port,function(){
		
		console.log("ih");
		});
		
