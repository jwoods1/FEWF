// Main js
var app= angular.module('groceryList',[]);


app.controller("listCtrl", function($scope){
	$scope.items = [
		{'name':'Bananas','done':false},
		{'name':'Bread','done':false},
		{'name':'Coffee','done':false},
		{'name':'Creamer','done':false}

	];

	$scope.addItem = function(){
		$scope.items.push({name:$scope.formItemText, done:false});
		$scope.formItemText="";
	};
	$scope.removeItem = function(index){
    	$scope.items.splice(index, 1);
  	}

});