var app= angular.module('employeeList',[])
	.controller("listCtrl", function($scope){
		$scope.employees = [{"fName":"John","lName":"Doe","job":"Tech","status":"Current","email":"johnD@gmail.com","img":"http://lorempixel.com/300/300/people/"},
							{"fName":"John","lName":"Doe","job":"Tech","status":"Current","email":"johnD@gmail.com"}];
	});	