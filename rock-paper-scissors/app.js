let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choise');
const yourScoreEl = document.querySelector('#your-score');
const compScoreEl = document.querySelector('#com-score');
const msgEl = document.querySelector('#msg');

const getComputerChoice = () => {
  const options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * options.length)];
};

const updateScoreboard = () => {
  if (yourScoreEl) yourScoreEl.textContent = userScore;
  if (compScoreEl) compScoreEl.textContent = compScore;
};

const evaluateResult = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) return 'draw';

  const winConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

  return winConditions[userChoice] === computerChoice ? 'win' : 'lose';
};

const playGame = (userChoice) => {
  const computerChoice = getComputerChoice();
  const result = evaluateResult(userChoice, computerChoice);

  if (result === 'win') {
    userScore += 1;
    if (msgEl) msgEl.textContent = `You win! ${userChoice} beats ${computerChoice}`;
  } else if (result === 'lose') {
    compScore += 1;
    if (msgEl) msgEl.textContent = `You lose! ${computerChoice} beats ${userChoice}`;
  } else {
    if (msgEl) msgEl.textContent = `Draw! Both chose ${userChoice}`;
  }

  updateScoreboard();
};

choices.forEach((choiceEl) => {
  choiceEl.addEventListener('click', () => {
    const userChoice = choiceEl.id.toLowerCase();
    playGame(userChoice);
  });
});
