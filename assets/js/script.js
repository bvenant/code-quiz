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
        answer:"B. Object-based"
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
var scoreList = document.getElementById("scoreList");
var finalScore = document.getElementById("finalScore");
var submitInl = document.getElementById("submitInl");
var initials = document.getElementById("initals");
var viewScores = document.getElementById("viewScores");
var activeIndex = 1;
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
var timeLeft = 80
var totalPoints = 0;

// Start Quiz 
var start = document.getElementById("start");
var startButton = document.getElementById("startButton");


// Points
var points = function() {
    totalPoints = totalPoints + 5;
    console.log("You have " + totalPoints + " points!");
};

// Timer
var timerEl = function() {
    var timeInterval = setInterval(function () {
        if (timeLeft > 1 && activeIndex !==5) {
            timer.textContent = timeLeft;
            timeLeft --;
            return timeLeft;
        } else {
            clearInterval(timeInterval);
        }
    }, 1000);
};

// Start Quiz and start timer
startButton.addEventListener("click", function () {
    timerEl();
    questionEl(questions[0]);
  });
  
myQuestions.addEventListener("click", function (event) {
    if (activeIndex === 5) {
      options.textContent = "Nice Job!  GAME OVER";
      score.textContent = timeLeft;
    } else if (
      event.target.textContent !== questions[activeIndex - 1].answer
    ) {
      options.textContent = "Try again.";
      timeLeft -= 5;
    } else {
      options.textContent = "You are correct!";
      console.log(timeLeft);
      activeIndex++;
      questionEl(questions[activeIndex - 1]);
    }
  });

// Questions
var questionEl = function(currentQuestion) {

    questionTle.textContent = currentQuestion.question;
    answer1.textContent = currentQuestion.options[0];
    answer2.textContent = currentQuestion.options[1];
    answer3.textContent = currentQuestion.options[2];
    answer4.textContent = currentQuestion.options[3];

    answerList.append(answer1);
    answerList.append(answer2);
    answerList.append(answer3);
    answerList.append(answer4);
    // questions.append(questionTle);
    // questions.append(answerList);
};

// // Enters initials and score
function storeScores(event) {
    event.preventDefault();
    if (initialInput.value === "") {
        alert("Please enter your initials!");
        return;
  }

    var savedScores = localStorage.getItem("high scores");
    var allScoresArray;

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

var i = 0;
function showScores() {
    var savedScores = localStorage.getItem("high scores");

    if (savedScores === null) {
        return;
    }
    console.log(savedScores);

    var storeScores = JSON.parse(savedScores);

    for (; i < storeScores.length; i++) {
        var newHighScores = document.createElement("p");
        newHighScores.innerHTML = storeScores[i].initials + ": " + storeScores[i].score;
        listOfScores.appendChild(newHighScores);
    }
};

submitInl.addEventListener("click", function(event){ 
    storeScores(event);
});

viewScores.addEventListener("click", function(event) { 
    showScores(event);
});