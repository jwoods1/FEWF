angular.module("employeeList").service("dataService",function(){

  var empArray = [{"fName":"John",
                        "lName":"Doe",
                        "job":"Tech",
                        "status":"Current",
                        "email":"johnD@gmail.com",
                        "img":"http://lorempixel.com/300/300/people/"},
                         {"fName":"John",
                         "lName":"Doe",
                         "job":"Tech",
                         "status":"Current",
                         "email":"johnD@gmail.com"}];
  this.getEmps = function(){
    return empArray;
  }

  this.addEmployee = function(empObj){
    empArray.push(empObj);
  }
})