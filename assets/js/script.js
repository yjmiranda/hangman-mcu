var moviePoster = document.getElementById("movie-poster");
var winsDiv = document.getElementById("winsDiv");
var wordDiv = document.getElementById("wordDiv");
var guessesLeftDiv = document.getElementById("guessesLeftDiv");
var guessListDiv = document.getElementById("guessListDiv");
var inputValidator = document.getElementById("inputValidator");
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
    wordDivText = "";
    for(let i = 0; i < word.length; i++){
        if(!alphabet.includes(word[i]) || guessTracker[word[i]]){
            wordDivText += word[i];
        } else if(!guessTracker[word[i]]){
            wordDivText += "_ ";
        } 
    }

    console.log(wordDivText);
    wordDiv.textContent = wordDivText;

    if(!wordDivText.includes('_')){
        moviePoster.setAttribute("src",movie.img);
        moviePoster.style.display = "block";
        inputValidator.textContent = "You won! Press any key to continue.";
    }
}

chooseRandomMovie();
populateWordDiv();

console.log(word);

document.onkeydown = input => {
    var letter = input.key.toUpperCase();

    if(!wordDivText.includes('_')){
        guessTracker = {};
        guessList = [];
        guessesLeft = 11;
        inputValidator.textContent = "";
        chooseRandomMovie();
        populateWordDiv();
    } else {
        if(alphabet.includes(letter)){
            inputValidator.textContent = "";
    
            if(word.includes(letter)){
    
                if(!guessTracker[letter]){
                    guessList.push(letter);
                    guessTracker[letter] = true;
                    populateWordDiv();
                }
    
            }
    
        } else {
            inputValidator.textContent = "Please enter a letter.";
        }
    }
}