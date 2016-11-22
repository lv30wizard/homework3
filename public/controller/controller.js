var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http',
  funtion($scope,$http){
  console.log("Hello World from controller");


  var refresh = function(){
    $http.get('/homework3list').success(function(response){
      console.log("Got data!");
      $scope.homework3list = response;
      $scope.contact = "";
    });
  };
  refresh();

}]);
