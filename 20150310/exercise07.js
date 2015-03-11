//exercise07
//write a function that randomizes a 
//number in range (0..100), then prints all the 
//odd numbers from 40 to that one. 
//If the number was smaller than 40 nothing 
//should be printed

var odd_to_random = function (){
	var random = parseInt(Math.random()*100);
	if (random>=40){
		for (var i=40; i<=random; i++){
			if (i%2!==0){
				console.log(i);
			}
		}
	}
}