var myApp = angular.module('myApp', []);



//set up config
// myApp.config(function($routeProvider, $locationProvider){
//   $routeProvider.when('/', {
//     templateUrl: 'public/views/index.html',
//     controller: 'MovieController as MC'
// }).when('/favorites', {
//     templateUrl: 'public/views/favorites.html',
//     controller: 'FavoritesController as FC'
//   }).otherwise({ redirectTo: '/'});
//   //loc provider
//   $locationProvider.html5Mode(true);
// });


//set up controller
myApp.controller( 'MovieController', function($http){
  console.log('NG');

  //globals
  var vm = this;
  vm.items = [];
  vm.favorites= [];






vm.searchMovies= function(name){
  console.log('in searchMovies');
  console.log('this is name:', name);
  $http({
    method: 'GET',
    url: 'http://www.omdbapi.com/?s=' + name
  }).then(function success(response){
    console.log('response data is:', response.data.Search);
    vm.items = response.data.Search;
  });
};

vm.addFav = function(title, year, poster){
  objectToSend ={
    title: title,
    year: year,
    poster: poster
  };
  console.log('in addFav with id:', title, year, poster);
  $http({
    method: 'POST',
    url: '/movies',
    data: objectToSend
  }).then(function success(response){
      console.log('back from the server with:', response);

  });
  };

  vm.getFav = function(){
    console.log('in getFav');
    $http({
      method: 'GET',
      url: '/movies'
    }).then(function success(response){
      console.log('response:', response.data);
      vm.favorites = response.data;
    });//ng-repeat to the DOM resonse =vm.favs
  };//end getFav



});//end controller

// myApp.controller( 'FavoritesController', function($http){
//   console.log('NG');
//
//
//
//
//
// });//end FavoritesController
