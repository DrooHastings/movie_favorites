var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require ('mongoose');
var path = require( 'path');

//connect to mongoDB
mongoose.connect( 'mongodb://localhost:27017/movies');
//declare schema for favorites
var favSchema = mongoose.Schema ({
    title: String,
    year: Number,
    poster: String
  });
//model for favorites db called movies collection called favorites
var favorites = mongoose.model('favorites', favSchema );
//model collection called favorites


//uses
app.use(express.static('public') );
app.use(bodyParser.json() );
app.use(bodyParser.urlencoded( {extended:true}) );

//port
var port = process.env.PORT || 8888;
//favorites array
favArray = [];

//spin up server
app.listen(port, function(){
  console.log('server up on:', port);
});

//serve index
app.get('/', function(req,res){
  res.sendFile(path.resolve('public/views/index.html') );
});

app.post ( '/movies', function(req, res){
  console.log('in post route:', req.body);
  var newFav = favorites(req.body);
  newFav.save().then(function(){
  res.sendStatus(200);
  });

});//end POST

app.get('/movies', function(req,res){
  favorites.find().then(function (data){
      console.log('name undefined');
      res.send(data);
    });
});//end GET favorites

// app.get('/*', function(req, res) {
//   res.sendFile(path.resolve('public/views/index.html'));
// });
