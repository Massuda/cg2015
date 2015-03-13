//exercise14
//write a funciton that randomizes two 
//numbers and prints their average and standard deviation

var average_standard_deviation = function(){
	var random1 = parseInt(Math.random() * 100);
	var random2 = parseInt(Math.random() * 100);
	console.log(random1, random2);
	var average=(random1 + random2)/2;
	console.log("Average= "+average);
	var standard_deviation = Math.sqrt((Math.pow(random1-average, 2)+Math.pow(random2-average, 2))/2);
	console.log("Standard Deviation= "+standard_deviation);
}