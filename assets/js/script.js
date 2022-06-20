var questions = [
    {
        question: "JavaScript is the programming language of the __.",
        options: [
            "A. Desktop",
            "B. Mobile",
            "C. Web",
            "D. Server",
        ],
        answer: "C. Web"
    },
    {
        question: "Which type of JavaScript Language is __?",
        options: [
            "A. Object-oriented",
            "B. Object-based",
            "C. Functional programming",
            "D. All of the above",
        ],
        answer: "B. Object-based"
    },
    {
        question: "In which HTML element, we put the JavaScript code?",
        options: [
            "A. <javascript>...</javascript>",
            "B. <js>...</js>",
            "C. <script>...</script>",
            "D. <css>...</css>",
        ],
        answer: "C. <script>...</script>"
    },
    {
        question: "JavaScript code can be written in ____.",
        options: [
            "A. JavaScript file (.js file)",
            "B. JavaScript file and in HTML document directly",
            "C. HTML document directly",
            "D. In style sheets (.css file)",
        ],
        answer: "B. JavaScript file and in HTML document directly"
    },
    {
        question: "Which symbol is used separate JavaScript statements?",
        options: [
            "A. Comma (,)",
            "B. Colon (:)",
            "C. Hyphen (_)",
            "D. Semicolon (;)",
        ],
        answer: "D. Semicolon (;)"
    },
    {
        question: "JavaScript ignores?",
        options: [
            "A. newlines",
            "B. tabs",
            "C. spaces",
            "D. All of the above",
        ],
        answer: "D. All of the above"
    },
    {
        question: "Which JavaScript method is used to access an HTML element by id?",
        options: [
            "A. getElementById()",
            "B. getElement(id)",
            "C. getElementById(id)",
            "D. elementById(id)",
        ],
        answer: "C. getElementById(id)"
    },
    {
        question: "Which JavaScript method is used to write HTML output?",
        options: [
            "A. document.write()",
            "B. document.output()",
            "C. console.log()",
            "D. document.writeHTML()",
        ],
        answer: "A. document.write()"
    },
];

//Score 
var score = document.getElementById("score");
var highScore = document.getElementById("highScore");
var scoreList = document.getElementById("listOfScores");
var finalScore = document.getElementById("score");
var submitInl = document.getElementById("submitInl");
var initials = document.getElementById("initals");
var viewScores = document.getElementById("viewScores");
var activeIndex = 6;
var quiz = [];

// Questions
var answerList = document.getElementById("answerList")
var answer1 = document.getElementById("btn1");
var answer2 = document.getElementById("btn2");
var answer3 = document.getElementById("btn3");
var answer4 = document.getElementById("btn4");
var questionScore = 0;
var myQuestions = document.getElementById("myQuestions");
var questionTle = document.getElementById("questionTle");
var options = document.getElementById("options");



// Time and Points
var timer = document.getElementById("timer");
var timeLeft = 20
var totalPoints = 0;

// Start Quiz 
var start = document.getElementById("start");
var startButton = document.getElementById("startButton");


// Points
var points = function () {
    totalPoints = totalPoints + 5;
    console.log("You have " + totalPoints + " points!");
};

// Timer
var timerEl = function () {
    var timeInterval = setInterval(function () {
        if (timeLeft > 1 || activeIndex < 8) {
            timer.textContent = timeLeft;
            timeLeft--;
            return timeLeft;
        } else if (timeLeft<1){
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);
};

// Start Quiz and start timer
startButton.addEventListener("click", function () {
    timerEl();
    questionEl(questions[activeIndex]);
});

myQuestions.addEventListener("click", function (event) {
    if ( event.target.textContent !== questions[activeIndex].answer) {
        timeLeft -= 5;
        activeIndex++;
        questionEl(questions[activeIndex]);

    } else {
        activeIndex++;
        questionEl(questions[activeIndex]);
    }
});

// Questions
var questionEl = function (currentQuestion) {

    questionTle.textContent = currentQuestion.question;
    answer1.textContent = currentQuestion.options[0];
    answer2.textContent = currentQuestion.options[1];
    answer3.textContent = currentQuestion.options[2];
    answer4.textContent = currentQuestion.options[3];

    answerList.append(answer1);
    answerList.append(answer2);
    answerList.append(answer3);
    answerList.append(answer4);
};

// // Enters initials and score
function storeScores(event) {
    event.preventDefault();
    if (initialInput.value === "") {
        alert("Please enter your initials!");
        return;
    }

    var savedScores = localStorage.getItem("high scores");
    var allScoresArray = [];

    if (savedScores === null) {
        allScoresArray = [];
    } else {
        allScoresArray = JSON.parse(savedScores)
    }

    var playerScore = {
        initials: initialInput.value,
        score: finalScore.textContent
    };

    console.log(playerScore);
    allScoresArray.push(playerScore);

    var scoresString = JSON.stringify(allScoresArray);
    window.localStorage.setItem("high scores", scoresString);

    showScores();
};

function clearQuestion() {
    answerList.innerHTML = ""
    questionTle.innerHTML = "Game Over, enter your highscore"

}

function showScores() {
    var savedScores = localStorage.getItem("high scores");

    if (savedScores === null) {
        return;
    }
    console.log(savedScores);

    var storeScores = JSON.parse(savedScores);
    console.log("Saved and parsed")
    console.log(storeScores)

    for (i = 0; i < storeScores.length; i++) {
        var existingScores = document.createElement("li");
        existingScores.innerHTML = storeScores[i].initials + ": " + storeScores[i].score;
        scoreList.appendChild(existingScores);
    }
};

submitInl.addEventListener("click", function (event) {
    storeScores(event);
});

// viewScores.addEventListener("click", function(event) { 
//     showScores(event);
// });

function endQuiz() {
    score.textContent = timeLeft;
    clearQuestion()
    showScores()
}
