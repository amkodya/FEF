/* dataservice.js - Employee Directory */

angular.module("MyApp").service("DataService",function(){
	
	var addressArray = [];

	this.getAddresses = function(){
		var addyArray = JSON.parse(localStorage.getItem("addressesLS")) || [];
		addressArray = addyArray;
			console.log(addyArray);
		return addressArray;
	}

	this.saveAddress = function(pName,pAddress,pCity,pState,pZip){
		var savedAddresses = {name: pName, address: pAddress, city:pCity, state:pState, zip:pZip };
		addressArray.push(savedAddresses);
		localStorage.setItem("addressesLS",JSON.stringify(addressArray));
	}

	this.removeAddressAt = function(pIndex){
		addressArray.splice(pIndex,1);
		localStorage.setItem("addressesLS",JSON.stringify(addressArray));
	}

	this.destroyLocalStorage = function(){
		addressArray.splice(0);
		localStorage.clear();
	}

});