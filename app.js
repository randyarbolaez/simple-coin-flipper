let headOrTails = document.getElementById('head-or-tails');
let header = document.getElementById('header');
let headCounter = document.getElementById('head-counter');
let tailsCounter = document.getElementById('tails-counter');

let headCount = 0;
let tailCount = 0;

function flipCoin() {
  let number = Math.floor(Math.random() * 2);
  if (number === 0) {
    headOrTails.innerHTML = `<img src="img/head.png" alt="head"/>`;
    header.innerHTML = `<b>Head</b> or Tails`;
    headCount++;
  } else {
    headOrTails.innerHTML = `<img src="img/tails.png" alt="tails"/>`;
    header.innerHTML = `Head or <b>Tails</b>`;
    tailCount++;
  }
  headCounter.innerHTML = `Head Count - ${headCount}`;
  tailsCounter.innerHTML = `Tails Count - ${tailCount}`;
}
