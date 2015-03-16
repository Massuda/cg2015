//MusicBox
(function() {

function MusicBox(){
  this.albums = [];
}
MusicBox.prototype.addAlbum = function(album){
  return this.albums.push(album);
}
MusicBox.prototype.favoriteAlbum = function(){
  return this.albums[0];
}

function Album(artista, titolo){
  this.artista = artista; 
  this.titolo = titolo;
}
Album.prototype.play = function(){
  console.log("Playing " + this.artista +" - " + this.titolo);
}
 

  var box = new MusicBox();
  var a1 = new Album("The Who", "Tommy");
  var a2 = new Album("Tom Waits", "Closing Time");
  var a3 = new Album("John Cale", "Paris 1919");
  var favorite;

  box.addAlbum(a1);
  box.addAlbum(a2);
  box.addAlbum(a3);

  a1.play() ; // prints "Playing The Who - Tommy"
  a2.play(); // prints "Playing Tom Waits - Closing Time"  
  a1.play(); // prints "Playing The Who - Tommy"

  favorite = box.favoriteAlbum(); 

  // prints "favorite album is The Who - Tommy"
  console.log("favorite album is " + favorite.artista + " - " + favorite.titolo);
}());