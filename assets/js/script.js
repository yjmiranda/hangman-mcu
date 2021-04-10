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
var lost = false;

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

    wordDiv.textContent = wordDivText;

    if(!wordDivText.includes('_')){
        moviePoster.setAttribute("src",movie.img);
        moviePoster.style.display = "block";
        numWins++;
        winsDiv.textContent = numWins;
        inputValidator.textContent = "You won! Press any key to continue.";
    }
}

const populateGuessListDiv = () => {
    guessListDiv.textContent = guessList.join();
}

chooseRandomMovie();
populateWordDiv();

document.onkeydown = input => {
    var letter = input.key.toUpperCase();

    if(!wordDivText.includes('_') || lost){
        lost = false;
        guessTracker = {};
        guessList = [];
        guessesLeft = 11;
        inputValidator.textContent = "";
        guessListDiv.textContent = "";
        guessesLeftDiv.textContent = guessesLeft;
        chooseRandomMovie();
        populateWordDiv();
    } else {
        if(alphabet.includes(letter)){
            inputValidator.textContent = "";
    
            if(word.includes(letter)){
    
                if(!guessTracker[letter]){
                    guessTracker[letter] = true;
                    populateWordDiv();
                }
    
            } else if(guessesLeft > 1){
                if(!guessTracker[letter]){
                    guessesLeft--;
                    guessesLeftDiv.textContent = guessesLeft;
                    guessList.push(letter);
                    guessTracker[letter] = true;
                    populateGuessListDiv();
                }
            } else {
                lost = true;
                guessesLeftDiv.textContent = 0;
                guessList.push(letter);
                populateGuessListDiv();
                inputValidator.textContent = "You lost. Press any key to try again.";
            }
    
        } else {
            inputValidator.textContent = "Please enter a letter.";
        }
    }
}