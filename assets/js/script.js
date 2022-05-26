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


//Score 
var score = document.querySelector("score");
var highScore = document.querySelector("#highScore");
var scoreList = document.querySelector("#scoreList");
var finalScore = document.querySelector("#finalScore");
var submitInl = document.querySelector("#submitInl");
var initals = document.querySelector("#initals");
var questionTle = document.querySelector("#questionTle");
var activeIndex = 1;

// Questions
var answerList = document.querySelector("answerList")
var answer1 = document.querySelector("btn1");
var answer2 = document.querySelector("btn2");
var answer3 = document.querySelector("btn3");
var answer4 = document.querySelector("btn4");
var questionScore = 0;


// Time and Points
var timer = document.querySelector("timer");
var timeLeft = 80
var totalPoints = 0;

// Start Quiz 
var start = document.querySelector("#start");
var startButton = document.querySelector("#startButton");


// Points
var points = function() {
    totalPoints = totalPoints + 5;
    console.log("You have " + totalPoints + " points!");
};

// Timer
var timerEl = function() {
    var timeInterval = setInterval(() => {
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
  
  questions.addEventListener("click", function (event) {
    if (activeIndex === 5) {
      options.textContent = "CONGRATULATIONS!  GAME OVER";
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
    answer1.textContent = currentQuestion.options[1];
    answer2.textContent = currentQuestion.options[2];
    answer3.textContent = currentQuestion.options[3];
    answer4.textContent = currentQuestion.options[4];

    answerList.append(answer1);
    answerList.append(answer2);
    answerList.append(answer3);
    answerList.append(answer4);
    questions.append(questionTle);
    questions.append(answerList);
};

// Enters initials and score
submitInl.addEventListener("click", function(event){

})