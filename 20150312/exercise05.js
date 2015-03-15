//implement the following Bingo object. 
//The Bingo object should randomize a number between 
//1 and 10 on creation and provide a single 
//method guess(number). That method should return 
//true if the argument was the secret number. Test your class.

(function(){
	function Bingo(){
		this.number = parseInt(Math.random()*10+1);
	}
	Bingo.prototype.guess=function(number){
		if(this.number===number)
			return true;
		else 
			return false;
	}
	console.log(new Bingo().guess(5););
}())