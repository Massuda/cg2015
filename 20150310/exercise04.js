//write a function select(data, key, values) 
//that given an array of objects data, 
//a string key and an array of values values, 
//returns the array of the objects where the 
//property key is equal to one of the values in values. 
//For example:

var select = function(data, key, values){
	var array=[];
	for(var i=0; i<data.length; i++){
		for (var j=0; j<values.length; j++){
			if (data[i][key]===values[j]){
				array.push(data[i])
			}
		}
	}
	return array;
}

var data = [
  {id:'01', name:'duffy'},
  {id:'02', name:'michey'},
  {id:'03', name:'donald'},
  {id:'04', name:'goofy'},
  {id:'05', name:'minnie'},
  {id:'06', name:'scrooge'}
];
var key = 'name';
var values = ['goofy', 'scrooge'];

select(data, key, values); // [ { id:'04', name:'goofy' }, { id:'06', name:'scrooge' } ]