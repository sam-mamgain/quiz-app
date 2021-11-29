const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
finalScore.innerText = localStorage.getItem('mostRecentScore') || 0;

username.addEventListener('keyup', val => {
  console.log(username.value);
  saveScoreBtn.disabled = !username.value;
});

onSaveHighScore = event => {
  event.preventDefault();
  console.log('clicked');
}