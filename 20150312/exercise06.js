(function() {
// Write your code here  
  var Album = {
    nome : nome,
    artista : artista,
    play : function(){
      console.log("Playing "+this.nome+" - "+this.artista);
    }
  }

  var MusicBox = {
    lista: [],
    favoriteAlbum: function(){
      return lista[0];
    },
    add : function(album){
      lista.push(album);
    }
  }



  var box = MusicBox();
  var a1 = Album("The Who", "Tommy");
  var a2 = Album("Tom Waits", "Closing Time");
  var a3 = Album("John Cale", "Paris 1919");
  var favorite;

  box.addAlbum(a1);
  box.addAlbum(a2);
  box.addAlbum(a3);

  a1.play() ; // prints "Playing The Who - Tommy"
  a2.play(); // prints "Playing Tom Waits - Closing Time"  
  a1.play(); // prints "Playing The Who - Tommy"

  favorite = box.favoriteAlbum(); 

  // prints "favorite album is The Who - Tommy"
  console.log("favorite album is " + favorite); 
}());