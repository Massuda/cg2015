(function () {
  // write your code here to make the program work 

  function Summer(){
    this.lista=[];
  }

  Summer.prototype.add = function(n){
    this.lista.push(n);
  }
  
  Summer.prototype.getCurrentSum = function(){
    var somma=0;
      for(var i=0; i<this.lista.length;i++){
        somma= somma+this.lista[i];
      }
      return somma;
  }

  var s1 = new Summer();
  var s2 = new Summer();

  s1.add(10);
  s1.add(20);

  s2.add(30);

  s2.add(5);

  // prints 30
  console.log(s1.getCurrentSum());

  // prints 35
  console.log(s2.getCurrentSum());

}());