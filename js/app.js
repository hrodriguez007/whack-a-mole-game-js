const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

//hardcode as zero in js
let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

//get random square to pop
function randomSquare() {
    //for each sqaure in our square array want
    //to remove the mole if it exists on any of the squares
    //want it clear first
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    //random index from 0-8
    //get the mole on a random square each time
    let randomSquare = squares[Math.floor(Math.random() * 9 )];
    randomSquare.classList.add('mole');

    //get the id of random square and saving it as hit position
    hitPosition = randomSquare.id
}

//get a point for each hit
squares.forEach(square => {
    //when square is hit i.e. mole whacked
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++;
            score.textContent = result;
            //have it be cleared
            hitPosition = null;
        }
    })
})

//set timer
function moveMole() {
    timerId = setInterval(randomSquare, 700)
}

//call funtion at the page load
moveMole();


//get timer to work
function countDown() {
    //count down by each second
    currentTime--;
    timeLeft.textContent = currentTime;

    //if we get to end of timer
    //want to clear the timer
    //show end result
    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('GAME OVER! Your final score is ' + result)
    }
}

let countDownTimerId = setInterval(countDown, 700)