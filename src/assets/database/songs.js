import { shuffleArray } from "../../utils/shuffle.js";
import { getSongs } from "../../utils/api.js";

export const songsArray = await getSongs();


export const songsIndexedByArtist = songsArray.reduce((acc, currentSong) => {
  const artist = currentSong.artist;
  if (artist in acc) {
    acc[artist].push(currentSong);
  } else {
    acc[artist] = [currentSong];
  }
  return acc;
}, {});

export const songsIndexedById = songsArray.reduce((acc, currentSong) => {
  const { _id } = currentSong;

  acc[_id] = currentSong;
  return acc;
}, {});

shuffleArray(songsArray);

console.log(songsIndexedById);