// Main js
var app= angular.module('groceryList',[]);


app.controller("listCtrl", ['$scope', function($scope){
	$scope.items = [
		{'name':'Bananas','done':false},
		{'name':'Bread','done':false},
		{'name':'Coffee','done':false},
		{'name':'Creamer','done':false}

	];

	$scope.addItem = function(){
		$scope.items.push({name: $scope.item});
		$scope.item ="";
	};
	$scope.removeItem = function(index){
    	$scope.items.splice(index, 1);
  	}

}]);