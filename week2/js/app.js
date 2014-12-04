var app= angular.module('employeeList',[])
	.controller("listCtrl", function($scope,dataService){
		
    $scope.employees = dataService.getEmps();

    $scope.addEmployee = function(){
      dataService.addEmployee($scope.empObject);

      $scope.empObject = {"fName":$scope.fName};
      $scope.fName = '';
   

    };


	});	