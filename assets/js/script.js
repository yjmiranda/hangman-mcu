var moviePoster = document.getElementById("movie-poster");
var winsDiv = document.getElementById("winsDiv");
var wordDiv = document.getElementById("wordDiv");
var guessesLeftDiv = document.getElementById("guessesLeftDiv");
var guessListDiv = document.getElementById("guessListDiv");
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numWins = 0; //current number of wins
var word; //current word to guess
var wordDivText = "";
var movie; //current movie object
var guessesLeft = 11; //number of guesses left
var guessList = []; //a list of the letters guessed this game
var guessTracker = {}; //trackes the letters that have been guessed this game

const chooseRandomMovie = () => {
    movie = movies[Math.floor(Math.random() * movies.length)];
    word = movie.name;
}

const populateWordDiv = () => {
    for(let i = 0; i < word.length; i++){
        if(!alphabet.includes(word[i]) || guessTracker[word[i]]){
            wordDivText += word[i];
        } else if(!guessTracker[word[i]]){
            wordDivText += "_ ";
        } 
    }
    console.log(wordDivText);
    wordDiv.innerHTML = wordDivText;
}

chooseRandomMovie();
populateWordDiv();

console.log(word);