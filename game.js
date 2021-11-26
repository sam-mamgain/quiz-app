const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {}
let acceptingAnswer = false;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

let questions = [
  {
    question: 'which element do we put javascript?',
    choice1: '<script>',
    choice2: '<javascript>',
    choice3: '<js>',
    choice4: '<scripting>',
    answer: 1
  },
  {
    question: 'Inside which element do we put javascript?',
    choice1: '<scripting>',
    choice2: '<javascript>',
    choice3: '<js>',
    choice4: '<script>',
    answer: 4
  },
  {
    question: 'So Inside which element do we put javascript?',
    choice1: '<js>',
    choice2: '<javascript>',
    choice3: '<script>',
    choice4: '<scripting>',
    answer: 3
  },
  {
    question: 'Tell Inside which element do we put javascript?',
    choice1: '<script>',
    choice2: '<javascript>',
    choice3: '<js>',
    choice4: '<scripting>',
    answer: 1
  }
];

// CONSTANTS
let CORRECT_ANSWER = 10;
let MAX_QUESTION = 3;

let startGame = () => {
  score = 0;
  questionCounter = 0;
  availableQuestion = [...questions];

  getNewQuestion();
}

getNewQuestion = () => {
  if (availableQuestion.length === 0 || questionCounter >= MAX_QUESTION) {
    return window.location.assign('/end.html');
  };
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestion.length);
  currentQuestion = availableQuestion[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    let number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
  });

  availableQuestion.splice(questionIndex, 1);
  acceptingAnswer = true;
}

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if (!acceptingAnswer) return;

    acceptingAnswer = true;
    const selectedChoice = e.target;
    console.log('see', selectedChoice);
    const selectedAnswer = selectedChoice.dataset['number'];
    console.log(selectedAnswer, currentQuestion.answer);

    const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

    selectedChoice.parentElement.classList.add(classToApply);
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);

  })
})

startGame();