var moviePoster = document.getElementById("movie-poster");
var winsDiv = document.getElementById("winsDiv");
var wordDiv = document.getElementById("wordDiv");
var guessesLeftDiv = document.getElementById("guessesLeftDiv");
var guessListDiv = document.getElementById("guessListDiv");
var numWins = 0; //current number of wins
var word; //current word to guess
var movie; //current movie object
var guessesLeft = 11; //number of guesses left
var guessList = []; //a list of the letters guessed this game
var guessTracker = {}; //trackes the letters that have been guessed this game

const chooseRandomMovie = () => {
    movie = movies[Math.floor(Math.random() * movies.length)];
    word = movie.name;
}

chooseRandomMovie();