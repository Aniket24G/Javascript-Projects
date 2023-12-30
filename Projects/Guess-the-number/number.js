let randomNumber = parseInt(Math.random()*100 +1);
const submit = document.getElementById('submit');
const input = document.getElementById('guess');
const guesses = document.getElementById('prevGuesses');
const remaining = document.getElementById('remaining');
const reset = document.querySelector('.info');

const p = document.createElement('p');

let prevGuesses = [];
let attempts = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',(e)=>{
        let guess = parseInt(input.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Enter a valid number")
    }else if(guess<1){
        alert("Please enter a number greater than 1")
    }else if(guess>100){
        alert("Please enter a number less than 100")
    }else{
        prevGuesses.push(guess);
        if(attempts===11){
            displayGuesses(guess);
            displayResult(`Game over. The correct guess is ${randomNumber}`);
            endGame();
        }else{
            displayGuesses(guess);
            check(guess);
        }
    }
}

function check(guess) {
    if(guess===randomNumber){
        displayResult("Hurray!! You guessed it right");
        endGame();
    }
}

function displayGuesses(guess){
    input.value='';
    guesses.innerHTML += `${guess} `;
    attempts++;
    remaining.innerHTML = `${11-attempts}`
}

function displayResult(message){
    alert(message);
}

function newGame(){
    const start = document.querySelector('#newGame');
    start.addEventListener('click',(e)=>{
        randomNumber = parseInt(Math.random()*100 +1);
        prevGuesses = [];
        attempts = 1;
        guesses.innerHTML = '';
        remaining.innerHTML = '';
        input.removeAttribute('disabled');
        reset.removeChild(p);
        playGame=true;

    })
}

function endGame(){
    input.value='';
    input.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start Over</h2>`;
    p.style.cursor='pointer';
    p.style.border='2px solid black';
    reset.appendChild(p);
    playGame=false;
    newGame();
}