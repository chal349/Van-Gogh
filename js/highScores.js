const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];


highScoresList.innerHTML = highScores
  .map(score => {
    const highScoresPosition = highScores;
    let index = highScoresPosition.indexOf(score);
    
    return `<li class="high-score"> ${index+1}. ${score.name} - ${score.score}</li>`;
  })
  .join("");