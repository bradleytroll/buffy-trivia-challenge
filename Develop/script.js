// Creates quiz questions through an array of objects
var questions = [
    {
        question: "What is the nickname of Buffy's slayer, Giles?",
        options: ["Bookworm", "Slasher", "Ripper", "Sage"],
        correctIndex: 2
    },
    {
        question: "Which slayer is called immediately after Buffy?",
        options: ["Kendra", "Senea", "Fray", "Faith"],
        correctIndex: 0
    },
    {
        question: "Which of the following was not a member of the Trio?",
        options: ["Andrew", "Tucker", "Jonathan", "Warren"],
        correctIndex: 1
    },
    {
        question: "Who killed Ben?",
        options: ["Buffy", "Glory", "Giles", "Spike"],
        correctIndex: 2
    },
    {
        question: "Which of the following was Spike's favorite TV show?",
        options: ["Days of Our Lives", "Melrose Place", "The Munsters", "Passions"],
        correctIndex: 3
    },
    {
        question: "What is the name of the award Buffy wins at prom?",
        options: ["Class Protector", "Prom Queen", "Most Unpopular", "Best Hair"],
        correctIndex: 0
    },
    {
        question: "What was the name of the government operation Riley worked for?",
        options: ["The Watcher's Council", "The Initiative", "The Sunnydale Underground Project", "Sunset"],
        correctIndex: 1
    },
    {
        question: "What is Faith's trademark catchphrase?",
        options: ["No sweat, pet", "Slay all day", "Five by Five", "One and done"],
        correctIndex: 2
    },
    {
        question: "What is the name of Giles' lifelong rival?",
        options: ["Ethan Rayne", "Wesley Wyndham Price", "Tara Maclay", "Quentin Travers"],
        correctIndex: 0
    },
    {
        question: "Which of the following grants vampires invincibility?",
        options: ["The Chalice of Athena", "The Urn of Osiris", "The Scythe", "The Gem of Amara"],
        correctIndex: 3
    },
    {
        question: "Which of the following is not a witch?",
        options: ["Willow", "Harmony", "Amy", "Tara"],
        correctIndex: 1
    },
    {
        question: "Who summoned Sweet, the dancing and singing hell demon?",
        options: ["Dawn", "Anya", "Xander", "Willow"],
        correctIndex: 2
    },
    {
        question: "Which of the following was not a potential slayer?",
        options: ["Kennedy", "Dawn", "Rona", "Amanda"],
        correctIndex: 1
    },
    {
        question: "What is Joyce Summers' job?",
        options: ["Bank Manager", "Glass Blower", "Police Officer", "Gallery Curator"],
        correctIndex: 3
    },
    {
        question: "Which of the following gets possessed by a hyena spirit?",
        options: ["Buffy", "Faith", "Xander", "Andrew"],
        correctIndex: 2
    },
    {
        question: "Which of the following does Anya fear most?",
        options: ["Trolls", "Bunnies", "Vampires", "Children"],
        correctIndex: 1
    },
    {
        question: "How many times does Buffy die throughout the run of the series?",
        options: ["0", "1", "2", "3"],
        correctIndex: 2
    },
    {
        question: "Which of the following does Buffy date?",
        options: ["Scott Hope", "Xander Harris", "Larry Bagby", "Forrest Gates"],
        correctIndex: 0
    },
    {
        question: "What did Maggie Walsh teach at U.C. Sunnydale?",
        options: ["Psychology", "Astronomy", "Theology", "Physics"],
        correctIndex: 0
    },
    {
        question: "What is the name of the hippest (and only) club in Sunnydale?",
        options: ["The Hop", "The Coven", "The Fix", "The Bronze"],
        correctIndex: 3
    },
    {
        question: "Who is the only person in the show with the power to restore Angel's soul?",
        options: ["Jenny Calendar", "Willow Rosenberg", "Rupert Giles", "D'Hoffryn"],
        correctIndex: 1
    },
    {
        question: "What gift does Angel give Buffy on her 17th birthday?",
        options: ["A Celtic cross", "His mother's diamond necklace", "A claddagh ring", "A stake"],
        correctIndex: 2
    },
];


// Grabs elements and assign variables
var questionEl = document.getElementById("question");
var startBtn = document.getElementById("start-button");
var timerEl = document.getElementById("timer-element");
var answerEl = document.getElementById("answer-options");
var questionTxt = document.getElementById("question");
var scoreEl = document.getElementById("score");
var currentScore = document.getElementById("current-score");
var result = document.getElementById("result-message");
var message = document.getElementById("correct-incorrect-message");
var scoreDiv = document.getElementById("high-score-div");
var correctSound = document.getElementById("correctSound");
var incorrectSound = document.getElementById("incorrectSound");

// Creates beginning timer count
var timer;
let timerCount = 70;

// Creates starting quesiton count
var currentQuestionIndex = 0;

// Creates beginning score
var quizScore = 0;

// Creates an empty array to score high scores
var highScores = [];

// Adds event listeners to start button to begin the quiz
startBtn.addEventListener("click", startQuiz);


// Functions

// Adds a function to the start button that, when clicked, fires two new functions: one to begin the timer, and one to display the first question.
function startQuiz(event) {
    timerCount = 70;
    currentQuestionIndex = 0;
    quizScore = 0;
    timerEl.textContent = "Seconds Remaining: " + timerCount;
    if (!timer) {
        startTimer();
        startQuestions();
    }
};


// Funciton starts and appends basic timer to the DOM. If the timer count is above zero, it will begin to reduce the timer count by one every second. Once the timer count is equal to zero, the timer clears and a message appears telling the user that time is up. 
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
};

// Function displays the first question and answer buttons to the DOM.
function startQuestions() {
    // Sets the current question based on the index in the questions array. Appends the text of the question to the DOM.
    var currentQuestion = questions[currentQuestionIndex];
    questionTxt.innerText = currentQuestion.question;
    // Creates buttons for each answer choice by iterating through a forEach loop, appends the buttons to the DOM, and fires a function to check whether or not the answer chosen is correct.
    answerEl.innerHTML = "";
    currentQuestion.options.forEach(function(answer, index) {
        var answerBtn = document.createElement("button");
        answerBtn.innerText = answer;
        answerBtn.addEventListener("click", function() {
            checkAnswer(index)
        });
        answerEl.appendChild(answerBtn);
    })
    startBtn.remove();
};

// Compares the user-chosen answer to the correct answer indext to determine if the answer is correct or incorrect and act accordingly.
function checkAnswer(index) {
    var currentQuestion = questions[currentQuestionIndex];
    // If user gets correct answer, the score increases and a correct message is shown.
    if (index === currentQuestion.correctIndex) {
        quizScore++;
        showCorrect();
    // If the user gets an incorrect answer and there are more than 10 seconds remaining, an incorrect message is shown.
    } else if (timerCount >= 10) {
        timerCount -= 10;
        showIncorrect();
    // If the timer has less than 10 seconds and the ansewr is incorrect, the game will end.
    } else if (timerCount < 10) {
        clearInterval(timer);
        timerEl.textContent = "Time's Up!"
        endQuiz();
    }
    };
    
// Shows a message confirming the user chose a correct answer which times out after 5 seconds. Then, the quiz proceeds to the next question.
function showCorrect() {
    message.textContent = "Correct!"
    currentScore.textContent = "Current Score: " + quizScore;
    correctSound.play();
    setTimeout(function()  {
        message.textContent = "";
    }, 5000);
    nextQuestion();
}

// Shows a message confirming the user chose an incorrect answer which times out after 5 seconds. Then, the quiz proceeds to the next question.
function showIncorrect() {
    message.textContent = "Incorrect. You've lost 10 seconds!"
    currentScore.textContent = "Current Score: " + quizScore;
    incorrectSound.play();
    setTimeout(function() {
        message.textContent = "";
    }, 5000);
    nextQuestion();
}

// Creates a function to progress to the next question or, if there are no questions remaining, to end the quiz.
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        startQuestions();
    } else {
        endQuiz();
    }
}

// Creates a function to end the quiz. Elements and text are removed and replaced wiht a final message that tells the user their score and gives them an option to save their high schore and see the top ten scores.
function endQuiz() {
    questionEl.remove();
    answerEl.remove();
    currentScore.textContent = "Your Final Score is " + quizScore;
    var saveBtn = document.createElement("button");
    saveBtn.textContent = "Click to Save Your Score";
    scoreDiv.appendChild(saveBtn);
    
    saveBtn.addEventListener("click", postFinalScore);

    // Hide the "High Scores" button after it's clicked
    saveBtn.addEventListener("click", function() {
        saveBtn.style.display = "none";
    });
}

// Creates a function to post the user's final score.
function postFinalScore() {
    questionEl.remove();
    answerEl.remove();
    currentScore.textContent = "Your Final Score is " + quizScore;

    // Creates an input for the user to type their initials to be saved.
    var initialsInput = document.createElement("input");
    initialsInput.setAttribute("type", "text");
    initialsInput.setAttribute("placeholder", "Enter Initials");
    initialsInput.style.height = "20px"
    scoreDiv.appendChild(initialsInput);

    // Creates a button that will allow users to save their score.
    var saveBtn = document.createElement("button");
    saveBtn.textContent = "Save Score";
    scoreDiv.appendChild(saveBtn);

    saveBtn.addEventListener("click", function() {
        var userInitials = initialsInput.value.trim();
        if (userInitials !== "") {
            // Retrieves highScores array from local storage and adds the new initials. Then, the initials are sorted by score.
            highScores = JSON.parse(localStorage.getItem("highScores")) || [];
            highScores.push({ initials: userInitials, score: quizScore });
            highScores.sort(function(a, b) {
                return b.score - a.score;
            });
            highScores = highScores.slice(0, 10);
            // Saves user initials in local storage.
            localStorage.setItem("highScores", JSON.stringify(highScores));
            // Calls a function to display the high scores.
            displayHighScores();
            initialsInput.remove();
            // Hide the "Save Score" button after it's clicked
            saveBtn.style.display = "none";
        }
    });
}

// Creates a funciton to display high scores array, which has already been sorted by score.
function displayHighScores() {
    scoreDiv.innerHTML = "<h2>Top 10 High Scores</h2>";
    // Creates a list for the high score array objects.
    var list = document.createElement("ol");
    highScores.forEach(function (score, index) {
        var li = document.createElement("li");
        li.textContent = score.initials + ": " + score.score;
        list.appendChild(li);
    });
    // Appends list
    scoreDiv.appendChild(list);
    // Creates a button to restart the game, which triggers a page reload.
    var restart = document.createElement("button");
    restart.textContent = "Click to Try Again";
    scoreDiv.appendChild(restart);
    restart.addEventListener("click", function() {
        location.reload();
    });
};
