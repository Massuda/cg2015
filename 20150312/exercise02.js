(function() {
  var favorite_album = function( collection ) {
  // do nothing if got an empty collection
    console.log("collection.length= "+collection.length);
    if ( collection.length === 0 ) {
      return;
    }

    // define two variables and initialize them
    var max_played = collection[0].played,
      max_index  = 0;

    for ( var i=0, len = collection.length; i < len; i++ ) {
      if ( collection[i].played > max_played ) {
        max_played = collection[i].played;
        max_index  = i;
      }
    }

    return { play: max_played, index: max_index };
  };


function Song (played){
  this.played=played;
};

  var music = [new Song(1), new Song(2), new Song(3), new Song(5), new Song(4);];
  var fav = favorite_album( music );

  console.log( "Your favorite album was played " + fav.play + " times" );

  // Bonus: Write code here to make the following line print the above line
  console.log( fav );
}());
