var myApp = angular.module ( 'myApp', [] );

//set up controller
myApp.controller( 'MovieController', function($http){
  console.log('NG');

  //globals
  var vm = this;
  vm.items = [];
  vm.favorites = [];


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


































});//end controller
