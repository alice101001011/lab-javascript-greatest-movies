// Added movies array to test functions in console

const movies = [
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.3
  },
  {
    title: 'The Godfather',
    year: 1972,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    score: 9.2
  },
  {
    title: 'The Godfather: Part II',
    year: 1974,
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    score: 9
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    director: 'Christopher Nolan',
    duration: '2h 32min',
    genre: ['Action', 'Crime', 'Drama', 'Thriller'],
    score: 9
  }]

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(anyArr) {
  const movieDirectors = anyArr.map((anyObj) => anyObj.director);

  return movieDirectors;
}

console.log("Iteration 1 – getAllDirectors:", getAllDirectors(movies));


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(anyArr) {
  const moviesGenreDirector = anyArr.filter(
    (anyObj) =>
      anyObj.director === 'Steven Spielberg' && anyObj.genre.includes('Drama')
  );

  return moviesGenreDirector.length;
}

console.log("Iteration 2 – howManyMovies:", howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(anyArr) {
  if (!anyArr.length) {
    return 0;
  }

  const sumScores = anyArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.score;
  }, 0);

  return Math.round((sumScores / anyArr.length) * 100) / 100;
}

console.log("Iteration 3 – scoresAverage:", scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(anyArr) {
  const arrDrama = anyArr.filter((anyObj) => anyObj.genre.includes('Drama'));

  const sumScoresDrama = arrDrama.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.score;
  }, 0);

  if (!arrDrama.length) {
    return 0;
  }

  return Math.round((sumScoresDrama / arrDrama.length) * 100) / 100;
}

console.log("Iteration 4 – dramaMoviesScore:", dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(anyArr) {
  const moviesByYear = [...anyArr];

  moviesByYear.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }

    return a.year - b.year;
  });

  return moviesByYear;
}

console.log("Iteration 5 – orderByYear:", orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(anyArr) {
  const movieTitlesArr = anyArr.map((anyObj) => anyObj.title);
  const movieTitlesAlphabetical = movieTitlesArr.sort().slice(0, 20);

  return movieTitlesAlphabetical;
}

console.log("Iteration 6 – orderAlphabetically:", orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(anyArr) {

let newArr = [...anyArr]

let hoursMinsToMinutes = newArr.map((anyObj) => {
  const durationArr = anyObj.duration.split(" ");
  const hours = Number(durationArr[0].replace(/[^0-9]/g,''));
  const minutes = durationArr[1]? Number(durationArr[1].replace(/[^0-9]/g,'')):0;
  const duration = hours * 60 + minutes;
  
  return {...anyObj, duration}
})

return hoursMinsToMinutes
  
} 

console.log("Iteration 7 – turnHoursToMinutes:", turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
