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
        options: ["Ethan Rayne", "Wesley Wyndham Price", "Tara Maclay", "O4"],
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

console.log(questions.length)
// Grabs elements and assign variables
var questionEl = document.getElementById("question-div");
var startBtn = document.getElementById("start-button")
var timerEl = document.getElementById("timer-element")
var answerEl = document.getElementById("answer-options")
var questionTxt = document.getElementById("question")

// Creates beginning timer count
var timer;
timerCount = 70;

// Creates starting quesiton count
var currentQuestionIndex = 0;

// Adds event listeners
startBtn.addEventListener("click", startQuiz);


// Functions

// Adds a function to the start button that, when clicked, fires two new functions: one to begin the timer, and one to display the first question.
function startQuiz(event) {
    if (!timer) {
    startTimer();
    startQuestions();
    }
};


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
};

function startQuestions() {
    console.log("questions")
    var currentQuestion = questions[currentQuestionIndex];
    questionTxt.innerText = currentQuestion.question;
    answerEl.innerHTML = "";
    currentQuestion.options.forEach(function(answer, index) {
        var answerBtn = document.createElement("button");
        answerBtn.innerText = answer;
        answerBtn.addEventListener("click", function() {
            checkAnswer(index)
        });
        answerEl.appendChild(answerBtn);
    })

};

function endQuiz() {
    console.log('timer ended')
};

function checkAnswer() {
    console.log("check answer", index)
}