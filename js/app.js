// Main js
var app= angular.module('employeeList',['ngRoute','ngAnimate'])

.config(function($routeProvider){

    $routeProvider.when("/", {
      templateUrl : "main.html",
      controller : "listCtrl"
    })
    .when("/edit/:paramEdit",{
      templateUrl : "edit.html",
      controller : "listCtrl"
    })
    .when("/employee",{
      templateUrl : "employee.html",
      controller : "listCtrl"
    })
    .otherwise({
      redirectTo : "/"
    });
})

.controller("listCtrl", function($scope,dataService,$routeParams){
	
	$scope.items = dataService.getItems();

	$scope.addItem = function(){
		dataService.addItem($scope.item);

		$scope.item ="";

	};
	$scope.removeItem = function(item){
    	dataService.removeItem(item);
  	};

  $scope.editItem = function(item){
      dataService.editItem(item);
  }

});

