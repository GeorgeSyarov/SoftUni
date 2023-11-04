function songs(input) {
  let numberOfSongs = input.shift();
  let playlist = input.pop();
  let listOfSongs = [];

  class Song {
    constructor(type, name, dur) {
      this.type = type;
      this.name = name;
      this.dur = dur;
    }
  }

  for (let i = 0; i < numberOfSongs; i++) {
    let [type, name, time] = input[i].split("_");
    let song = new Song(type, name, time);
    listOfSongs.push(song);
  }
  if (playlist === "all") {
    listOfSongs.forEach((i) => console.log(i.name));
  } else {
    let filtered = listOfSongs.filter((i) => i.type === playlist);
    filtered.forEach((i) => console.log(i.name));
  }
}
songs([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
