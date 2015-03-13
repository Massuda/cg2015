//exercise11
//write a funciton that randomizes a number 
//in range (1000..9999) and calculate the 
//sum of its digits repeatedly until you 
//reach one digit only. For instance, 
//if the randomized number was 1049, program should print 5

var digits_sum = function (){
	var random = parseInt(Math.random() * (10000 - 1000) + 1000);
	var n = random.toString();
	console.log(random);
	while (n.length>1){
		var number=0;
		for(var i=0; i<n.length; i++){
			number = number+parseInt(n.charAt(i));
		}
		n = number.toString();
	}
	return number;
}