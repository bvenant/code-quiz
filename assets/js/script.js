var questions = [
    {
        question: "JavaScript is the programming language of the __.",
        options: [
        "A. Desktop",
        "B. Mobile",
        "C. Web",
        "D. Server",
        ],
        answer: "C"
    },
    {
        question: "Which type of JavaScript Language is __?",
        options: [
        "A. Object-oriented",
        "B. Object-based",
        "C. Functional programming",
        "D. All of the above",
        ],
        answer:"b"
    },
    {
        question: "In which HTML element, we put the JavaScript code?",
        options: [
        "A. <javascript>...</javascript>",
        "B. <js>...</js>",
        "C. <script>...</script>",
        "D. <css>...</css>",
        ],
        answer: "C"
    },
    {
        question: "JavaScript code can be written in ____.",
        options: [
        "A. JavaScript file (.js file)",
        "B. JavaScript file and in HTML document directly",
        "C. HTML document directly",
        "D. In style sheets (.css file)",
        ],
        answer: "B"
    },
    {
        question: "Which symbol is used separate JavaScript statements?",
        options: [
        "A. Comma (,)",
        "B. Colon (:)",
        "C. Hyphen (_)",
        "D. Semicolon (;)",
        ],
        answer: "D"
    },
    {
        question: "JavaScript ignores?",
        options: [
        "A. newlines",
        "B. tabs",
        "C. spaces",
        "D. All of the above",
        ],
        answer: "D"
    },
    {
        question: "Which JavaScript method is used to access an HTML element by id?",
        options: [
        "A. getElementById()",
        "B. getElement(id)",
        "C. getElementById(id)",
        "D. elementById(id)",
        ],
        answer: "C"
    },
    {
        question: "Which JavaScript method is used to write HTML output?",
        options: [
        "A. document.write()",
        "B. document.output()",
        "C. console.log()",
        "D. document.writeHTML()",
        ],
        answer: "A"
    },
];

var answer = document.querySelector("#answer");

//Score 
var highScore = document.querySelector("#highScore");
var scoreList = document.querySelector("#scoreList");
var finalScore = document.querySelector("#finalScore");
var submitInl = document.querySelector("#submitInl");
var initals = document.querySelector("#initals");
var questionTle = document.querySelector("#questionTle");


// Time and Point
var timer = document.querySelector("#timer");
var timeLeft = 80
var totalPoints = 0;

// Start Quiz 
var start = document.querySelector("#start");
var startBtn = document.querySelector("#startBtn");


// Functions
var points = function() {
    totalPoints = totalPoints + 5;
    console.log("You have " + totalPoints + " points!");
};

var timerEl = function() {
    var timeInterval = setInterval(() => {
        if (end === false) {
            timer.textContent = timeLeft;
            timeLeft --;
            return timeLeft;
        } else {
            timer.textContent = "";
            clearInterval(timeInterval);
        }
    }, 1000);
    
    console.log("Time Starts NOW")
    if (end === true){
        timer.textContent = timeLeft;
    }
};




