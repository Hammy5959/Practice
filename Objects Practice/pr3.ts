`Album: Write a function called make_album() that builds a Object describing a music album. The
 function should take in an artist name and an album title, and it should return a Object 
 containing these two pieces of information. Use the function to make three dictionaries 
 representing different albums. Print each return value to show that Objects are storing the 
 album information correctly. Add an optional parameter to make_album() that allows you to store
  the number of tracks on an album. If the calling line includes a value for the number of
   tracks, add that value to the album’s Object. Make at least one new function call that 
   includes the number of tracks on an album.`;

interface musicAlbum {
  artisName: string;
  albumTitle: string;
  numtracks?: number;
}
function make_album(
  artisName: string,
  albumTitle: string,
  numtracks?: number
): musicAlbum {
  let album: musicAlbum = {
    artisName: artisName,
    albumTitle: albumTitle,
  };
  if (numtracks) {
    album["numtracks"] = numtracks;
  }

  return album;
}

let album1:musicAlbum=make_album("Atif Aslam", "Coke Studio");
let album2:musicAlbum=make_album("Arijit Singh", "Song", 3);
let album3:musicAlbum=make_album("Nusrat","Qawali",15)
console.log(album1)
console.log(album2)
console.log(album3)
