//8
//write a constructor function Point2D
//that create a 2D point given its x and y coordinates.
function Point2D(x1, y1){
	this.x = x1;
	this.y = y1;
}

//8a
//write a contructor function Edge
//that create an edge given its two vertices (i.e. two points).
function Edge(point1, point2){
	this.vertice1 = point1;
	this.vertice2 = point2;
}

//8b
//write a method length for Edge
//that compute the length of the edge. 
//(radice di (xb - xa)^2 + (yb-ya)^2)
Edge.prototype.length = function() {
	return Math.sqrt((Math.pow((this.vertice2.x - this.vertice1.x),2)
		+(Math.pow((this.vertice2.y - this.vertice1.y),2))));
}