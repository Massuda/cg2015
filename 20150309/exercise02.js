//write a script containing the function identity(n)
//that returns the n rows by n columns identity matrix
function identity(n) {
	for (i=1;i<n+1;i++) {
		str='';
		for (j=1;j<n+1;j++) {
			if(i===j)
				x=1;
			else
				x=0;
			if (j===n)
				str+=x+'\t'
			else
				str+=x+',\t'
		}
		console.log(str);	
	}
}