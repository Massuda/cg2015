//exercise08
//write a funciton that randomizes a number 
//in range (0..100), then prints all the 
//odd numbers from 40 to that one. 
//If the number was smaller than 40, 
//print all the numbers down to the randomized 
//one (i.e. if the result was 37, you should print: 
//40, 39, 38, 37)

var to_random = function (){
	var random = parseInt(Math.random()*100);
	if (random>=40){
		for (var i=40; i<=random; i++){
			if (i%2!==0){
				console.log(i);
			}
		}
	}
	else {
		for (var j=40; j>=random; j--)
			console.log(j);
	}
}