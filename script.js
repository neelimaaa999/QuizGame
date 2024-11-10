let currentQuestionIndex = 0;
let score = 0;

// Example questions
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars"
  },
  {
    question: "What is the largest mammal?",
    choices: ["Elephant", "Blue Whale", "Shark", "Giraffe"],
    answer: "Blue Whale"
  },
  {
    question: "What is the smallest country in the world?",
    choices: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
    answer: "Vatican City"
  }
];

// DOM Elements
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const nextButton = document.getElementById('next');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');

// Initialize quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultElement.classList.add('hide');
  nextButton.classList.remove('hide');
  loadQuestion();
}

// Load question
function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  choicesElement.innerHTML = "";

  currentQuestion.choices.forEach(choice => {
    const button = document.createElement('button');
    button.classList.add('choice');
    button.textContent = choice;
    button.addEventListener('click', () => selectAnswer(choice));
    choicesElement.appendChild(button);
  });

  nextButton.disabled = true;
}

// Select answer
function selectAnswer(choice) {
  const correctAnswer = questions[currentQuestionIndex].answer;
  if (choice === correctAnswer) {
    score++;
  }
  nextButton.disabled = false;
}

// Next question or finish quiz
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    finishQuiz();
  }
});

// Finish quiz
function finishQuiz() {
  questionElement.classList.add('hide');
  choicesElement.classList.add('hide');
  nextButton.classList.add('hide');
  resultElement.classList.remove('hide');
  scoreElement.textContent = 'You scored ${score} out of ${questions.length}';
}

// Restart quiz
function restartQuiz() {
  questionElement.classList.remove('hide');
  choicesElement.classList.remove('hide');
  startQuiz();
}

// Start quiz on page load
startQuiz();
