/* CRUD APP - APP.JS */

angular.module('myApp',['ngRoute']) 

	/*routing views configuration*/
	.config(function($routeProvider){  //routeProvider - when or otherise (kind of like if/else)

		$routeProvider.when('/view1',{   // tell html to point to view1.html
			templateUrl : "view1.html",			//pull info from view1/html
			controller : "BillsController"   //name of controller on view1.html page
		}).when('/view2',{					// tell html to point to view2.html
			templateUrl : "view2.html",         //pull info from view2.html      
			controller : "HomeworkController"	//name of controller on view2.html page
		}).when('/view3/:awesome',{				// tell html to point to view3.html
			templateUrl : "view3.html",			// pulls info from view3.html
			controller : "choreController"		//name of controller on view3.html page
		}).otherwise({
			redirectTo : "/view1"
		});

	})

	/* app controller for homework list */
	.controller('HomeworkController', function($scope,dataService){

		$scope.hwCourse;
		$scope.hwName;
		$scope.hwDueDate;

		/*calls to dataservice to get hw array */
		$scope.homeworkArray = dataService.getHomeworks();

		/* add homework function by calling dataservice */
		$scope.addHomework = function() {
			dataService.newHomework($scope.hwCourse, $scope.hwName, $scope.hwDueDate);

			$scope.hwCourse = '';
			$scope.hwName = '';
			$scope.hwDueDate = '';
		}

		/* delete homework function by calling dataservice */
		$scope.deleteHomework = function(hwToDelete) {
			dataService.removeHomework(hwToDelete);
		}

		// reset add homework form
		$scope.resetForm = function() {
			$scope.hwCourse = '';
			$scope.hwName = '';
			$scope.hwDueDate = '';
		}


	// specify app controller for chore list
	}).controller('choreController', function($scope,$routeParams,dataService){

		$scope.chore;

		$scope.word = $routeParams.awesome;

		/* get core array by calling dataservice */
		$scope.choreArray = dataService.getChore();

		/* add chore function by calling dataservice */
		$scope.addChore = function() {
			dataService.newChore($scope.chore);

			$scope.chore = '';
		}

		/* delete chore function by calling dataservices */
		$scope.deleteChore = function(choreToDelete) {
			dataService.removeChore(choreToDelete);
		}

		/* specifying theapp controller for bills list */
	}).controller('BillsController', function($scope,dataService){

		$scope.billerName;
		$scope.billAmount;
		$scope.billDueDate;

		/* get bills array by calling dataservice */
		$scope.billArray = dataService.getBills();

		/* add bills function by calling dataservice */
		$scope.addBill = function() {
			dataService.newBill($scope.billerName, $scope.billAmount, $scope.billDueDate);

			$scope.billerName = '';
			$scope.billAmount = '';
			$scope.billDueDate = '';
		}

		/* delete bills function by calling dataservice */
		$scope.deleteBill = function(billToDelete) {
			dataService.removeBill(billToDelete);
		}

		/* reset add bills form */
		$scope.resetForm = function() {
			$scope.billerName = '';
			$scope.billAmount = '';
			$scope.billDueDate = '';
		}
	}); // end of app controller 


















