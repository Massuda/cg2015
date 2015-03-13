function Rectangle (base, altezza) {
	this.base = base;
	this.altezza = altezza;
}

Rectangle.prototype.area = function(){
	return this.base * this.altezza;
}