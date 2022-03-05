// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(anyArr) {

  const movieDirectors = anyArr.map((anyObj) => anyObj.director);

  return movieDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(anyArr) {

  const moviesGenreDirector = anyArr.filter((anyObj) => anyObj.director === "Steven Spielberg" && anyObj.genre.includes("Drama"));

  return moviesGenreDirector.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(anyArr) {

  if (!anyArr.length) {
    return 0;
  } 

  const sumScores = anyArr.reduce((accumulator, currentValue) => {
    return (accumulator + currentValue.score)}, 0);

  return Math.round((sumScores / anyArr.length) * 100)/100;

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(anyArr) {

  const arrDrama = anyArr.filter((anyObj) => anyObj.genre.includes("Drama"));
  
  const sumScoresDrama = arrDrama.reduce((accumulator, currentValue) => 
    {return accumulator + currentValue.score}, 0);

  if (!arrDrama.length) {
    return 0;
  }

  return Math.round((sumScoresDrama / arrDrama.length) * 100)/100;

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(anyArr) {

  const moviesByYear = [...anyArr];

  moviesByYear.sort((a,b) => {

    if (a.year === b.year) {
      return a.title.localeCompare(b.title)
    }

    return a.year - b.year;
  });

  return moviesByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(anyArr) {

  const movieTitlesArr = anyArr.map(anyObj => anyObj.title);
  const movieTitlesAlphabetical = movieTitlesArr.sort().slice(0, 20);

  return movieTitlesAlphabetical;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(anyArr) {

  let moviesInMinutes = anyArr.map((anyObj) => {
    
  })
}

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
    bestYearAvg,
  };
}
