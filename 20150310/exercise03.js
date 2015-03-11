var capitalize_word = function (str){
	return str.toUpperCase();
}

var capitalize_first_letter = function (str){
	var pieces = str.split(" ");
	for ( var i = 0; i < pieces.length; i++ ){
		var j = pieces[i].charAt(0).toUpperCase();
		pieces[i] = j + pieces[i].substr(1);
	}
	return pieces.join(" ");
}