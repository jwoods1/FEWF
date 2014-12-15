angular.module("employeeList").service("dataService",function(){

  var itemArray = [];

  this.getItems = function(){
    var str = localStorage.getItem("itemLS");
    itemArray = JSON.parse(str) || itemArray;
    return itemArray;
  }
  this.addItem = function(item){
    itemArray.push(item);
    var str = JSON.stringify(itemArray);
    localStorage.setItem("itemLS",str);
  }
  this.removeItem = function(item){
    itemArray.splice(itemArray.indexOf(item),1);
    var str = JSON.stringify(itemArray);
    localStorage.setItem("itemLS",str);
  }
  this.editItem = function(item){
    
  }
});