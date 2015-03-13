//exercise12
//write a funciton that randomizes two numbers 
//and prints the smallest number that is greater 
//than one, such that both numbers are 
//divided by it with no remainder. 
//For instance, for 9 and 6 you should print 3. 
//If there isn't one a proper note should be printed

var minimum_cd = function (){
	var random1 = parseInt(Math.random() * 100);
	var random2 = parseInt(Math.random() * 100);
	var found = false;
	if (random1 <= random2){
		minore=random1;
	}
	else{
		minore=random2;
	}
	for (var i=2; i<=minore && !found; i++){
		if (random1%i===0 && random2%i===0){
			console.log(i);
			found=true;
		}
	}
	if (!found)
		console.log("nessun numero trovato");
}