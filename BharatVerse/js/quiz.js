const questions = [

    {
        question:
            "Madhubani painting is traditionally associated with which state?",

        options: [
            "Bihar",
            "Punjab",
            "Kerala",
            "Gujarat"
        ],

        answer: 0
    },


    {
        question:
            "Which festival is strongly associated with Assam?",

        options: [
            "Onam",
            "Bihu",
            "Pongal",
            "Holi"
        ],

        answer: 1
    },


    {
        question:
            "Kathakali originated in which Indian state?",

        options: [
            "Tamil Nadu",
            "Rajasthan",
            "Kerala",
            "Odisha"
        ],

        answer: 2
    },


    {
        question:
            "Warli painting is traditionally associated with which region?",

        options: [
            "Maharashtra",
            "Assam",
            "Bihar",
            "Kashmir"
        ],

        answer: 0
    },


    {
        question:
            "Bharatanatyam is a classical dance form associated with which state?",

        options: [
            "West Bengal",
            "Tamil Nadu",
            "Goa",
            "Himachal Pradesh"
        ],

        answer: 1
    }

];


let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;


const questionElement =
    document.getElementById("question");

const optionsElement =
    document.getElementById("options");

const questionNumber =
    document.getElementById("questionNumber");

const scoreElement =
    document.getElementById("score");

const progressBar =
    document.getElementById("progressBar");

const nextBtn =
    document.getElementById("nextBtn");

const quizCard =
    document.getElementById("quizCard");

const quizResult =
    document.getElementById("quizResult");

const finalScore =
    document.getElementById("finalScore");

const creditsEarned =
    document.getElementById("creditsEarned");

const resultMessage =
    document.getElementById("resultMessage");

const restartBtn =
    document.getElementById("restartBtn");


function loadQuestion() {

    const question =
        questions[currentQuestion];


    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    questionElement.textContent =
        question.question;


    optionsElement.innerHTML = "";


    selectedAnswer = null;

    nextBtn.disabled = true;


    progressBar.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;


    question.options.forEach(function (option, index) {

        const button =
            document.createElement("button");

        button.className = "option";

        button.textContent = option;


        button.addEventListener(
            "click",
            function () {

                selectAnswer(index, button);

            }
        );


        optionsElement.appendChild(button);

    });

}


function selectAnswer(index, selectedButton) {

    if (selectedAnswer !== null) {
        return;
    }


    selectedAnswer = index;


    const question =
        questions[currentQuestion];


    const optionButtons =
        document.querySelectorAll(".option");


    optionButtons.forEach(function (button) {

        button.disabled = true;

    });


    if (index === question.answer) {

        selectedButton.classList.add("correct");

        score++;

        scoreElement.textContent = score;

    } else {

        selectedButton.classList.add("wrong");

        optionButtons[
            question.answer
        ].classList.add("correct");

    }


    nextBtn.disabled = false;

}


nextBtn.addEventListener(
    "click",
    function () {

        currentQuestion++;


        if (currentQuestion < questions.length) {

            loadQuestion();

        } else {

            showResult();

        }

    }
);


function showResult() {

    quizCard.style.display = "none";

    quizResult.style.display = "block";


    finalScore.textContent =
        score;


    
        const credits = score * 20;

let currentCredits =
    Number(localStorage.getItem("cultureCredits")) || 0;

currentCredits += credits;

localStorage.setItem(
    "cultureCredits",
    currentCredits
);


     if (score === 5) {

        resultMessage.textContent =
            "Outstanding! You really know India's cultural heritage.";

    } else if (score >= 3) {

        resultMessage.textContent =
            "Great job! Keep exploring India's incredible heritage.";

    } else {

        resultMessage.textContent =
            "Good start! Explore more heritage and try again.";

    }

}

restartBtn.addEventListener(
    "click",
    function () {

        currentQuestion = 0;

        score = 0;

        scoreElement.textContent = "0";


        quizResult.style.display = "none";

        quizCard.style.display = "block";


        loadQuestion();

    }
);


loadQuestion();