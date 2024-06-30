const questions = [
    {
        question: "When was the Gibson Les Paul instroduced?",
        choices: ["1952", "1959", "1978"],
        correct: 0
    } ,{
        question: "When was the Gibson ES-335 instroduced?",
        choices: ["1950", "1958", "1960"],
        correct: 1
    } ,{
        question: "When was the Gibson SG instroduced?",
        choices: ["1961", "1972", "1984"],
        correct: 0
    } ,{
        question: "When was the Gibson Explorer instroduced?",
        choices: ["1951", "1958", "1972"],
        correct: 1
    } ,{
        question: "When was the Gibson Flying V instroduced?",
        choices: ["1986", "1975", "1958"],
        correct: 2
    } ,{
        question: "When was the Fender Telecaster instroduced?",
        choices: ["1948", "1951", "1965"],
        correct: 1
    } ,{
        question: "When was the Fender Stratocaster instroduced?",
        choices: ["1954", "1955", "1961"],
        correct: 0
    } ,{
        question: "When was the Fender Jazzmaster instroduced?",
        choices: ["1954", "1958", "1964"],
        correct: 1
    } ,{
        question: "When was the Fender Mustang instroduced?",
        choices: ["1958", "1985", "1964"],
        correct: 2
    } ,{
        question: "When was the Fender Jaguar instroduced?",
        choices: ["1958", "1996", "1962"],
        correct: 2
    }
]

let currentQuestion = 0;
let correctAnswers = 0;
let askedQuestions = [];


function getRandomQuestion() {
    let randomIndex = Math.floor(Math.random() * questions.length);
    while (askedQuestions.includes(randomIndex)) {
        randomIndex = Math.floor(Math.random() * questions.length);
    }
    askedQuestions.push(randomIndex);
    return questions[randomIndex];
}

function showQuestion() {
    const questionData = getRandomQuestion();

    const questionText = document.getElementById("question-text");
    questionText.textContent = `${currentQuestion + 1}. ${questionData.question}`; // Display current question number

    const choices = document.querySelectorAll(".choice");
    questionData.choices.forEach((choice, index) => {
        choices[index].textContent = choice;
    });

    const feedback = document.getElementById("feedback");
    feedback.textContent = `Question ${currentQuestion + 1} out of ${questions.length}`; // Display current question number out of total questions
}

function checkAnswer(selected) {
    const feedback = document.getElementById("feedback");
    if (selected === questions[askedQuestions[currentQuestion]].correct) {
        feedback.textContent = "Correct!";
        correctAnswers++;
    } else {
        feedback.textContent = "Incorrect!";
    }

    setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            showQuestion();
        } else {
            const quizContainer = document.querySelector(".quiz-container");
            quizContainer.innerHTML = `<p>You got ${correctAnswers} out of ${questions.length} questions.</p>`;
        }
    }, 2000);
}

showQuestion();