'use strict';
// Selecting elements
const score0El = document.querySelector('#score--0');
let current0El = document.getElementById('current--0');
const score1El = document.querySelector('#score--1');
let current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScore = 0;
// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
// rolling dice functionality
btnRoll.addEventListener('click', function () {
  // random dice
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // Check for rolled 1:If True,switch to next player
  if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
  }
});
