import { shuffleArray } from "../../utils/shuffle.js";
import { getArtists } from "../../utils/api.js";

export const artistArray = await getArtists();

export const artistsIndexedById = artistArray.reduce((acc, currentObj) => {
  acc[currentObj._id] = currentObj;
  return acc;
}, {});

export const artistsIndexedByName = artistArray.reduce((acc, currentObj) => {
  acc[currentObj.name] = currentObj;
  return acc;
}, {});

shuffleArray(artistArray);