(function () {
  person = {
    buy: function(car){
      console.log("I'm rich");
      return "I'm rich";
    },

    hello: function(){
      console.log("I work at IBM");
      return "I work at IBM";
    }
    
  };

  var  car = {
    price: 2000,
    drive: function () {
      console.log("Vrum Vrum");
      return "Vrum Vrum";
    }
  };

  // print Vrum Vrum
  car.drive();

  // print I'm rich
  if ( car.price > 1000 ) {
    person.buy(car);
  }
}());



(function () {
  var employees = [person, person, person];

  for (var i=0; i < employees.length; ++i ) {
    // print I work at IBM
    employees[i].hello();
  }
}());
