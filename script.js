'use strict';
// var number;
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct guess!!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.number').textContent = 17;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let score = 20;
let secretnumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
console.log('secret number >>', secretnumber);
//document.querySelector('.number').textContent = secretnumber;

const getval = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //no inoput defined
  if (!guess) {
    document.querySelector('.message').textContent =
      '🎃 No Number defined or its zero!';
  }
  //when player wins the game
  else if (guess == secretnumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('.message').textContent = '🎉 Correct guess!!';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //guess is different
  else if (guess != secretnumber) {
    if (score > 1) {
      score--;
      if (guess > secretnumber) {
        document.querySelector('.message').textContent =
          '📈 Guess is too high !';
      } else {
        document.querySelector('.message').textContent =
          '📉 Guess is too low !';
      }

      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('body').style.backgroundColor = '#ff0000';
      document.querySelector('.message').textContent = '🤡 You lost the game !';
    }
  }
  //guess is too high
  //   else if (guess > secretnumber)
  //     if (guess > secretnumber) {
  //       if (score > 0) {
  //         score--;
  //         document.querySelector('.message').textContent =
  //           '📈 Guess is too high !';
  //         document.querySelector('.score').textContent = score;
  //       } else {
  //         document.querySelector('body').style.backgroundColor = '#ff0000';
  //         document.querySelector('.message').textContent =
  //           '🤡 You lost the game !';
  //       }
  //     }
  //     //guess is too low
  //     else if (guess < secretnumber) {
  //       if (score > 0) {
  //         score--;
  //         document.querySelector('.message').textContent =
  //           '📉 Guess is too low !';
  //         document.querySelector('.score').textContent = score;
  //       } else {
  //         document.querySelector('body').style.backgroundColor = '#ff0000';
  //         document.querySelector('.message').textContent =
  //           '🤡 You lost the game !';
  //       }
  // }
};

document.querySelector('.check').addEventListener('click', getval);

document.querySelector('.again').addEventListener('click', function () {
  console.log('Insifde');
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  console.log('secret number >>', secretnumber);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
