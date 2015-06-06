/* GROCERY LIST app.js */

var app = angular.module('myApp', []);   // declares the app we're using (body ng-app="myApp")
app.controller('GroceryController', function($scope) {  //view controller from html page
														//(div ng-controller="groceryController")

	$scope.newItem;  // scope injects information into items - newItem variable (ng model=newitem)

	//list item
	$scope.groceries = ['Coconut Milk','Kale','Avacados']; //array for grocery list

	//remove list item
	$scope.addItem = function(){   // injects function add Item (ng-submit="addItem()")
		$scope.groceries.push($scope.newItem);   // array name --> pushes to end of new item
		$scope.newItem = '';				//clear out box, leaves in empty state
	}

	//remove list item
	$scope.removeItem = function(item){  // inject function of removeItem function (ng-click removeItem(gro))
		var idx = $scope.groceries.indexOf(item); //variable = index - array of groceries in index of item
			$scope.groceries.splice(idx,1); //removes individual item
	}

});