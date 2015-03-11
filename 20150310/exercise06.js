//exercise06
//write a function that randomizes 
//a number in range (0..100), 
//then prints all the even numbers 
//from 0 to the randomized

var even_to_random = function (){
	for (var i=0; i<=parseInt(Math.random()*100); i++){
		if (i%2===0){
			console.log(i);
		}
	}
}