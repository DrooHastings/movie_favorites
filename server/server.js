var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require ('mongoose');
var path = require( 'path');

//connect to mongoDB

//declare schema for favorites

//model for favorites db called movies collection called favorites

//model collection called favorites


//uses
app.use(express.static('public') );
app.use(bodyParser.json() );
app.use(bodyParser.urlencoded( {extended:true}) );

//port
var port = process.env.PORT || 8888;

//spin up server
app.listen(port, function(){
  console.log('server up on:', port);
});

//serve index
app.get('/', function(req,res){
  res.sendFile(path.resolve('public/views/index.html') );
});
