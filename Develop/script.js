// Grabs elements and assign variables
var questionEl = document.getElementById("question-div");
var startBtn = document.getElementById("start-button")
var timerEl = document.getElementById("timer-element")

// Creates beginning timer count
var timer;
timerCount = 70;

// Adds event listeners
startBtn.addEventListener("click", startQuiz);


// Functions

// Adds a function to the start button that, when clicked, fires two new functions: one to begin the timer, and one to display the first question.
function startQuiz(event) {
    startTimer();
    startQuestions();
}


// Adds basic timer to the div.
function startTimer() {
  timer = setInterval(function() {
    if (timerCount > 0) {
        timerCount--;
        timerEl.textContent = "Seconds Remaining: " + timerCount;
    } else if (timerCount === 0) {
        // TROLL NOTE: See about building function here instead of below once you decide what it needs to do
        endQuiz()
        clearInterval(timer)
        timerEl.textContent = "Time's Up!"
    }
   }, 1000);
}

function startQuestions() {
    console.log("questions")
}

function endQuiz() {
    console.log('timer ended')
}