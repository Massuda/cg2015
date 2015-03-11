//exercise09
//write a funciton that randomizes a 
//number n in range 0..100. 
//Now randomizes n more numbers in that range, 
//printing the largest of them

var n_random = function (){
	var random = parseInt(Math.random()*100);
	var array = [];
	for (var i=0; i<random; i++){
		array.push(parseInt(Math.random()*100));
	}
	var compare = function (value1, value2) {
		return value2 - value1;
	};
	console.log(array.sort(compare)[0]);
}