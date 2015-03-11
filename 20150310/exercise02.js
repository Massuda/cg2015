//exercise02a
//write a function that pushes 
//into an array n random integer numbers
var random = function (n){
	var array = [];
	for (var i=0; i<n; i++){
		array.push(parseInt(Math.random()*100));
	}
	return array;
}

//exercise02b
//filter even numbers and return the odd ones
var odd = function (item) {
	return item % 2 !== 0;
};

//exercise02c
//sort obtained numbers from the smallest to the largest
var compare = function (value1, value2) {
	return value1 - value2;
};

var a = random(40).filter(odd).sort(compare);