//Make Album
function makeAlbum(
  artist: string,
  albumTitle: string,
  numTracks?: number
): Record<string, string | number> {
  let album: Record<string, string | number> = {
    artist: artist,
    albumTitle: albumTitle,
  };
  if (numTracks) {
    album.numTracks = numTracks;
  }
  return album;
}
let album1 = makeAlbum("The Beatles", "Abbey Road");
let album2 = makeAlbum("Pink Floyd", "The Wall", 26);
let album3 = makeAlbum("Led Zeppelin", "IV", 8);

console.log(album1);
console.log(album2);
console.log(album3);
export {};
