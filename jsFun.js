// Problem 1
function add_spaces(inputString) {
	return inputString.split("").join(" ");
}

console.log(add_spaces('spam and eggs'));

// Problem 2
String.prototype.add_spaces = function () {
	return this.split("").join(" ");
};

console.log('spam and eggs'.add_spaces());

// Problem 3
function sumOfNumbersUsingForLoop(inputList) {
	var sum = 0;
	for (var i=0; i < inputList.length; i++) {
		sum += inputList[i];
	}
	return sum;
}

function sumOfNumbersUsingRecursion(inputList) {
	if (inputList.length == 0) {
		return 0;
	} else {		
		return inputList.pop() + sumOfNumbersUsingRecursion(inputList);
	}
}

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumOfNumbersUsingForLoop(list)); // 55
console.log(sumOfNumbersUsingRecursion(list)); // 55

// Problem 4
function execFunctionNumTimes(inputFunction, inputNumber) {
	for (var i=0; i < inputNumber; i++) {
		inputFunction();
	}
}

function helloWorld() {
	console.log("Hello world!");
}

execFunctionNumTimes(helloWorld, 3);

// Problem 5
function transformDataset(musicians) {
	var musiciansTransformed = Array();
	for (var i=0; i < musicians.length; i++) {
		musiciansTransformed[i] = {
			musicianNumber 	: musicians[i]["number"],
			artistName		: musicians[i]["artist"],
			yearsActive		: musicians[i]["end"] - musicians[i]["begin"]
		}
	}	
	return musiciansTransformed;
}

var musicians = [
	{number:1, artist:"Johnny Cash", 		begin:1957, end:2005},
	{number:2, artist:"Frank Zappa", 		begin:1968, end:1993},
	{number:3, artist:"Don Glen Vliet", 	begin:1970, end:2010},
	{number:4, artist:"Count Basie", 		begin:1949, end:1984},
	{number:5, artist:"B.B. King", 			begin:1957, end:2015},
	{number:6, artist:"Dionne Warwick", 	begin:1963, end:1985},
	{number:7, artist:"James Dewitt Yancey", begin:2001, end:2006},
	{number:8, artist:"Ella Fitzgerald", 	begin:1948, end:1996},
];
console.log(transformDataset(musicians));
