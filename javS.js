let score = {
    wins: 0,
    losses: 0,
    ties: 0
  };

function playgame(move){
    const mymove=move;
    const opp=computermove();  
    let result = '';
    if (mymove === 'scissors') {
        if (opp === 'rock') {
          result = 'You lose.';
        } else if (opp === 'paper') {
          result = 'You win.';
        } else if (opp === 'scissors') {
          result = 'Tie.';
        }

      } 
      else if (mymove === 'paper') {
        if (opp === 'rock') {
          result = 'You win.';
        } else if (opp === 'paper') {
          result = 'Tie.';
        } else if (opp === 'scissors') {
          result = 'You lose.';
        }
        
      } 
      else if (mymove === 'rock') {
        if (opp === 'rock') {
          result = 'Tie.';
        } else if (opp === 'paper') {
          result = 'You lose.';
        } else if (opp === 'scissors') {
          result = 'You win.';
        }
        }
    if (result === 'You win.') {
        score.wins += 1;
        } else if (result === 'You lose.') {
        score.losses += 1;
        } else if (result === 'Tie.') {
        score.ties += 1;
        }
    
    console.log(result);
    updateScore();
    updatemoves(mymove,opp);
    updateres(result);


}

function computermove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}

function updateScore() {
    document.querySelector('.scores')
      .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function updatemoves(mymove, opp) {
    document.querySelector('.moves')
    .innerHTML = `Your Move is ${mymove} and Computer Move is ${opp}.`;
}

function updateres(result) {
    document.querySelector('.result')
      .innerHTML = `${result}`;
}