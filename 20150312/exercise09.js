//write a constructor function Trinagle
//that create a triangle given its three edges.
function Triangle(base, lato1, lato2){
	this.base = base;
	this.lato1 = lato1;
	this.lato2 = lato2;
}

//exercise09a

//write a method perimeter for Triangle
//that compute the perimeter of the triangle.
Triangle.prototype.perimeter = function(){
	return this.base+this.lato1+this.lato2;
}

//exercise09b

//write a method area for Triangle
//that compute the area of the triangle
//(Do you remeber the Erone's formula?).
//A= radice(perimetro*(perimetro-a)*(perimetro-b)*(perimetro-c))
Triangle.prototype.area= function(){
	return Math.sqrt(this.perimeter()*(this.perimeter()-this.base)*(this.perimeter()-(this.lato1)*this.perimeter()-this.lato2));
}