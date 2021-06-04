const GENRES = ["Rap", "Indie", "Country", "EDM", "Blues"];
const PROFESSIONS = ["Singer", "Songwriter", "Audio Engineer", "Producer"];
var starterArrayGenres = new Array(GENRES.length);
var starterArrayProfessions = new Array(PROFESSIONS.length);

const convertGenreToText = (options) => {
  var genrestring = "";

  for (var i = 0; i < GENRES.length; i++) {
    if (options[i]) {
      genrestring += GENRES[i] + ", ";
    }
  }
  genrestring = genrestring.slice(0, -2);

  return genrestring;
};

const convertProfessionToText = (options) => {
  var professionstring = "";

  for (var i = 0; i < PROFESSIONS.length; i++) {
    if (options[i]) {
      professionstring += PROFESSIONS[i] + ", ";
    }
  }
  professionstring = professionstring.slice(0, -2);

  return professionstring;
};

// const convertGenreTextToList = (genresText) => {
//   var starterArrayGenres = new Array(GENRES.length);
//   starterArrayGenres.fill(false);

//   for (var i = 0; i < GENRES.length; i++) {
//     if (genresText.includes(GENRES[i])) {
//       starterArrayGenres[i] = true;
//     }
//   }

//   return starterArrayGenres;
// };

// const convertProfessionsTextToList = (professiosnText) => {
//   var starterArrayProfessions = new Array(PROFESSIONS.length);
//   starterArrayProfessions.fill(false);

//   for (var i = 0; i < PROFESSIONS.length; i++) {
//     if (professiosnText.includes(PROFESSIONS[i])) {
//       starterArrayProfessions[i] = true;
//     }
//   }

//   return starterArrayProfessions;
// };

const convertGenresDictToList = (genres) => {
  var arrayToReturn = [];

  arrayToReturn.push(genres.rap);
  arrayToReturn.push(genres.indie);
  arrayToReturn.push(genres.country);
  arrayToReturn.push(genres.edm);
  arrayToReturn.push(genres.blues);

  return arrayToReturn;
};

const convertGenresListToDict = (genreslist) => {
  return {
    rap: genreslist[0] ? `t` : "f",
    indie: genreslist[1] ? "t" : "f",
    country: genreslist[2] ? "t" : "f",
    edm: genreslist[3] ? "t" : "f",
    blues: genreslist[4] ? "t" : "f",
  };
};

const convertProfessionsDictToList = (professions) => {
  var arrayToReturn = [];

  arrayToReturn.push(professions.singer);
  arrayToReturn.push(professions.songwriter);
  arrayToReturn.push(professions.audio_engineer);
  arrayToReturn.push(professions.producer);

  return arrayToReturn;
};

const convertProfessionsListToDict = (professionslist) => {
  return {
    singer: professionslist[0] ? "t" : "f",
    songwriter: professionslist[1] ? "t" : "f",
    audio_engineer: professionslist[2] ? "t" : "f",
    producer: professionslist[3] ? "t" : "f",
  };
};

export {
  convertGenreToText,
  convertProfessionToText,
  convertProfessionsListToDict,
  convertGenresListToDict,
  convertGenresDictToList,
  convertProfessionsDictToList,
  starterArrayGenres,
  starterArrayProfessions,
  GENRES,
  PROFESSIONS,
};
