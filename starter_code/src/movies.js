/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

var duration = movies.map(function(mov) {
  var x = parseInt(mov.duration[0]);
  var y = parseInt(mov.duration.slice(3, 5));
  var h2M = x * 60;
  mov.duration = h2M + y;
  return mov;
});

console.log(duration);

// Get the average of all rates with 2 decimals

var average = movies.reduce(function(counter, movie) {
  return counter + parseFloat(movie.rate) / duration.length;
}, 0);

console.log(average);

var count = 0;
var averageDrama = movies.reduce(function(counter, movie) {
  if (movie.genre.includes("Drama")) {
    count++;

    return counter + parseInt(movie.rate);
  } else {
    count += 0;
    return counter + 0;
  }
}, 0);

console.log("hello", count);
console.log(averageDrama);
console.log(averageDrama / count);

// Order by time duration, in growing order

var orderByDuration = movies.sort(function(movieA, movieB) {
  return movieA.duration > movieB.duration
    ? 1
    : movieA.duration === movieB.duration
    ? 0
    : -1;
});

console.log(orderByDuration);

// How many movies did STEVEN SPIELBERG

let stevenFilms = movies.filter(movie => {
  if (movie.director == "Steven Spielberg") return movie;
});
console.log(stevenFilms.length);

// Order by title and print the first 20 titles

let orderAlphabetically = movies.sort(function(movieA, movieB) {
  return movieA.title > movieB.title ? 1 : -1;
});
console.log(orderAlphabetically.slice(0, 20));

// Best yearly rate average

let sortOnYear = movies.sort(function(movieA, movieB) {
  return movieA.year > movieB.year ? 1 : -1;
});

var years = [];
var qty = [];
var totalRate = [];
var bestYearAverage = sortOnYear.map(function(movie) {
  if (!years.includes(movie.year)) {
    years.push(movie.year);
    qty.push(1);
    totalRate.push(parseInt(movie.rate));
  } else {
    var index = years.indexOf(movie.year);
    qty[index] += 1;
    totalRate[index] += parseInt(movie.rate);
  }
});

console.log(years);
console.log(qty);
console.log(totalRate);
