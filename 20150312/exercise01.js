(function() {
  var larger = function(o1, o2) {
  if ( o1.size > o2.size ) {
        console.log('o1 is larger');
    } else {
        console.log('o2 is larger');
    }
  };

function Size (size) {
  this.size = size;
}
  var x = new Size(9);
  var y = new Size(10);

  larger(x, y);    
}());