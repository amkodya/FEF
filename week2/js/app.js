/* app.js employee directory */

var theApp = angular.module("MyApp",[]);
theApp.controller("MyNewController",function($scope,DataService){

	$scope.addresses = DataService.getAddresses();
		$scope.newAddress = {};

		$scope.addNewAddress = function(){
			DataService.saveAddress($scope.newAddress.company,$scope.newAddress.street, $scope.newAddress.city, $scope.newAddress.state, $scope.newAddress.zipCode);
			$scope.newAddress = {};
		};

		$scope.removeAddy = function(idx){
			DataService.removeAddressAt(idx);
		}

		$scope.clearIt = function(){
			DataService.destroyLocalStorage();
		}

})

