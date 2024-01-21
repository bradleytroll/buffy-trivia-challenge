// Creates quiz questions through an array of objects
var questions = [
    {
        question: "What is the nickname of Buffy's slayer, Giles?",
        options: ["Bookworm", "Slasher", "Ripper", "Sage"],
        correntIndex: 2
    },
    {
        question: "Which slayer is called immediately after Buffy?",
        options: ["Kendra", "Senea", "Fray", "Faith"],
        correntIndex: 0
    },
    {
        question: "Which of the following was not a member of the Trio?",
        options: ["Andrew", "Tucker", "Jonathan", "Warren"],
        correntIndex: 1
    },
    {
        question: "Who killed Ben?",
        options: ["Buffy", "Glory", "Giles", "Spike"],
        correntIndex: 2
    },
    {
        question: "Which of the following was Spike's favorite TV show?",
        options: ["Days of Our Lives", "Melrose Place", "The Munsters", "Passions"],
        correntIndex: 3
    },
    {
        question: "What is the name of the award Buffy wins at prom?",
        options: ["Class Protector", "Prom Queen", "Most Unpopular", "Best Hair"],
        correntIndex: 0
    },
    {
        question: "What was the name of the government operation Riley worked for?",
        options: ["The Watcher's Council", "The Initiative", "The Sunnydale Underground Project", "Sunset"],
        correntIndex: 1
    },
    {
        question: "What is Faith's trademark catchphrase?",
        options: ["No sweat, pet", "Slay all day", "Five by Five", "One and done"],
        correntIndex: 2
    },
    {
        question: "What is the name of Gile's lifelong rival?",
        options: ["Ethan Rayne", "Wesley Wyndham Price", "Tara Maclay", "O4"],
        correntIndex: 0
    },
    {
        question: "Which of the following grants vampires invincability?",
        options: ["The Chalice of Athena", "The Urn of Osiris", "The Scythe", "The Gem of Amara"],
        correntIndex: 3
    },
    {
        question: "Which of the following is not a witch?",
        options: ["Willow", "Harmony", "Amy", "Tara"],
        correntIndex: 1
    },
    {
        question: "Who summoned Sweet, the dancing and singing hell demon?",
        options: ["Dawn", "Anya", "Xander", "Willow"],
        correntIndex: 2
    },
    {
        question: "Which of the following was not a potential slayer?",
        options: ["Kennedy", "Dawn", "Rona", "Amanda"],
        correntIndex: 1
    },
    {
        question: "What is Joyce Summers' job?",
        options: ["Bank Manager", "Glass Blower", "Police Officer", "Gallery Curator"],
        correntIndex: 3
    },
    {
        question: "Which of the following gets possessed by a hyena spirit?",
        options: ["Buffy", "Faith", "Xander", "Andrew"],
        correntIndex: 2
    },
    {
        question: "Which of the following does Anya fear most?",
        options: ["Trolls", "Bunnies", "Vampires", "Children"],
        correntIndex: 1
    },
    {
        question: "How many times does Buffy die throughout the run of the series?",
        options: ["0", "1", "2", "3"],
        correntIndex: 2
    },
    {
        question: "Which of the following does Buffy date?",
        options: ["Scott Hope", "Xander Harris", "Larry Bagby", "Forrest Gates"],
        correntIndex: 0
    },
    {
        question: "What did Maggie Walsh teach at U.C. Sunnydale?",
        options: ["Psychology", "Astronomy", "Theology", "Physics"],
        correntIndex: 0
    },
    {
        question: "What is the name of the hippest (and only) club in Sunnydale?",
        options: ["The Hop", "The Coven", "The Fix", "The Bronze"],
        correntIndex: 3
    },
    {
        question: "Who is the only person in the show with the power to restore Angel's soul?",
        options: ["Jenny Calendar", "Willow Rosenberg", "Rupert Giles", "D'Hoffryn"],
        correntIndex: 1
    },
    {
        question: "What gift does Angel give Buffy on her 17th birthday?",
        options: ["A Celtic cross", "His mother's diamond necklace", "A claddagh ring", "A stake"],
        correntIndex: 2
    },
];

console.log(questions.length)
// Grabs elements and assign variables
var questionEl = document.getElementById("question-div");
var startBtn = document.getElementById("start-button")
var timerEl = document.getElementById("timer-element")
var answerEl = document.getElementById("answer-options")

// Creates beginning timer count
var timer;
timerCount = 70;

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
   // var currentQuestion = 






};

function endQuiz() {
    console.log('timer ended')
};