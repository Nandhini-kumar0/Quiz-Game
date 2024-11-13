const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyperlinks and Text Markup language", "Home tool markup language", "Hyper text markup language", "all the above"],
        correct: 2
    },
    {
        question: "Who is making the Web standards?",
        options: ["Microsoft", "Googke", "Mozilla", "World Wide Web"],
        correct: 3
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        options: ["<h1>", "<heading>", "<h6>", "<head>"],
        correct: 0
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<lb>", "<br>", "<break>", "<b>"],
        correct: 1
    },
    {
        question: "Choose the correct HTML element to define important text?",
        options: ["<strong>","<b>","<important>","i"],
        correct: 0
    },
    {
        question: "Choose the correct HTML element to define emphasized text?",
        options: ["<em>","italic>","<i>","None of the above"],
        correct: 0
    },
    {
        question: "Which character is used to indicate an end tag?",
        options: ["<","*","^","/"],
        correct: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    const buttons = document.querySelectorAll('.answer-button');

    buttons.forEach((button, index) => {
        button.textContent = currentQuestion.options[index];
        button.disabled = false; // Re-enable button for next question
        button.style.backgroundColor = ''; // Reset button color
    });

    document.getElementById('feedback').textContent = '';
    document.getElementById('next-button').style.display = 'none';
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.answer-button');
    
    if (selectedIndex === currentQuestion.correct) {
        document.getElementById('feedback').textContent = 'Correct!';
        score++;
        document.getElementById('score').textContent = score;
        buttons[selectedIndex].style.backgroundColor = '#4CAF50'; // Correct answer color
    } else {
        document.getElementById('feedback').textContent = 'Incorrect!';
        buttons[selectedIndex].style.backgroundColor = '#e74c3c'; // Incorrect answer color
        buttons[currentQuestion.correct].style.backgroundColor = '#4CAF50'; // Highlight correct answer
    }

    buttons.forEach(button => button.disabled = true); // Disable all buttons after answer
    document.getElementById('next-button').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('question').textContent = 'Quiz Completed!';
        document.querySelector('.answers-container').style.display = 'none';
        document.getElementById('next-button').style.display = 'none';
        document.getElementById('feedback').textContent = `Your final score is ${score}/${questions.length}.`;
    }
}

loadQuestion();
