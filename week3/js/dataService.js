/* dataservice.js */

angular.module('myApp').service("dataService",function() {
	

	/* default homework array */
	var homeworksArray = [
		{
			course: "Information Retrieval",
			asgName: "Homework 2",
			dueDate: "2015-05-27"
		},
		{
			course: "Front-End Web Frameworks",
			asgName: "Lists Application",
			dueDate: "2015-05-22"
		},
		{
			course: "Information Retrieval",
			asgName: "Homework 4",
			dueDate: "2015-06-15"
		},
		{
			course: "Information Retrieval",
			asgName: "Homework 3",
			dueDate: "2015-06-08"
		},
		{
			course: "Front-End Web Frameworks",
			asgName: "Research Project",
			dueDate: "2015-05-30"
		}
	];

	/* returns the array of homeworks */
	this.getHomeworks = function() {
		var str = localStorage.getItem("HomeworkList");
		homeworksArray = JSON.parse(str) || homeworksArray;
		return homeworksArray
	}

	/* adds a new homework to the homeworks array */
	this.newHomework = function(course, name, date) {
		var newHomework = {
			course: course,
			asgName: name,
			dueDate: date
		};

		homeworksArray.push(newHomework);
		var str = JSON.stringify(homeworksArray);
		localStorage.setItem("HomeworkList", str);
	}

	/* deletes a homework from the homework array */
	this.removeHomework = function(homework) {
		homeworksArray.splice(homeworksArray.indexOf(homework), 1);
		localStorage.setItem("HomeworkList",JSON.stringify(homeworksArray));
	}

	// CHORES -------------------------------------------------------------------

	/* default chore array */
	var choreArray = [ "Sweep kitchen", "Vacuum living room", "Scrub Bathroom", "Clean Car"];

	// return the array of chores
	this.getChore = function() {
		var str = localStorage.getItem("choreList");
		choreArray = JSON.parse(str) || choreArray;
		return choreArray;
	}

	//add new homework assignment
	this.newChore = function(myChore) {
		var newChore = myChore;

		choreArray.push(newChore);
		var str = JSON.stringify(choreArray);
		localStorage.setItem("choreList",str);
	}

	//deletes a homework assignment from array
	this.removeChore = function(noChore) {
		choreArray.splice(choreArray.indexOf(noChore), 1);
		localStorage.setItem("choreList",JSON.stringify(choreArray));
	}

	// BILLS ----------------------------------------------------------------

	var billsArray = [
		{
			name: "Car Payment",
			amount: "240.00",
			dueDate: "2015-06-15"
		},
		{
			name: "Victoria's Secret",
			amount: "150.00",
			dueDate: "2015-06-28"
		},
		{
			name: "Capital One",
			amount: "150.00",
			dueDate: "2015-06-28"
		},
		{
			name: "Geico",
			amount: "85.00",
			dueDate: "2015-07-16"
		}

	];

	//return bill array
	this.getBills = function() {
		var str = localStorage.getItem("BillsList");
		billsArray = JSON.parse(str) || billsArray;
		return billsArray;
	}

	//adds new bills to bill array
	this.newBill = function(name, amount, date) {
		var newBill = {
			name: name,
			amount: amount,
			dueDate: date
		};

		billsArray.push(newBill);
		var str = JSON.stringify(billsArray);
		localStorage.setItem("BillsList", str);
	}

	//delete bill from array
	this.removeBill = function(bill) {
		billsArray.splice(billsArray.indexOf(bill), 1);
		localStorage.setItem("BillsList",JSON.stringify(billsArray));
	}






}); //end of myApp