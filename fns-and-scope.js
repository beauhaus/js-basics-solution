//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

// function isTyler(name) {
// 	return (name === "Tyler");
// }
// }

function isTyler(name) {
	if (name === "Tyler") {
		return true;
	} else {
		return false;
	}
}

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

function getName() {
	return prompt("Hey. What's yer name?", "name");
}
//Code Here


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome() {
	getName();
	alert("Welcome, " + getName());
}


//////////////////PROBLEM 4////////////////////



//What is the difference between arguments and parameters?

//Answer Here
// Nothing.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?
// false
// null
// NaN
// zero
// 	""
// undefined


//Answer Here



//////////////////PROBLEM 6////////////////////

//Create a function called myName that returns your name

//Code Here

function myName() {
	var b = "Beau";
	return b;
}

//Now save the function definition of myName into a new variable called newMyName

var newMyName = function myName() {
	var b = "Beau";
	return b;
};

//Now alert the result of invoking newMyName

alert(newMyName);

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn() {
	return function() {
		return "Leroy Jenkins";
	}
}
//Now save the result of invoking outerFn into a variable called innerFn.

//Code Here

var innerFn = outerFn();
//Now invoke innerFn.
