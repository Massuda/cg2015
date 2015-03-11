//exercise05
//write a function that randomizes 
//3 numbers in range (0.. 100) 
//and prints the largest one

var random_three = function (){
	var array = [];
	for (var i=0; i<3; i++){
		array.push(parseInt(Math.random()*100));
	}
	var compare = function (value1, value2) {
		return value2 - value1;
	};
	console.log(array.sort(compare)[0]);
}