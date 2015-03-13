//exercise13
//write a funciton that randomizes two numbers 
//and prints their least common multiplication of them. 
//(use lcm for details)

var gcd = function(a, b) {
	if ( ! b) {
		return a;
	}
	return gcd(b, a % b);
};

var lcm = function(a, b){
	return (a*b)/gcd(a,b);
}

var random_lcm = function(){
	var random1 = parseInt(Math.random() * 100);
	var random2 = parseInt(Math.random() * 100);
	console.log(random1, random2);
	return lcm(random1, random2);
}