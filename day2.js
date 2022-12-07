'use strict';

const { readFileSync, promises: fsPromises } = require('fs');

/** Reads the file and retuns an array of the contents.
 */
function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const contentsArray = contents.split(/\r?\n/);

  console.log(typeof (contentsArray[0]));
  console.log("contentsArray: ", contentsArray);
  return contentsArray;
}

const contents = syncReadFile("./day2-data.txt");

// A=1, B=2, C=3
// X=1, Y=2, Z=3
// rock, paper, scissors
// lost=0, 3=draw, 6=won

const handScores = {
  a: 1,
  b: 2,
  c: 3,
  x: 1,
  y: 2,
  z: 3
};


/** Calculates score for winning or losing against the opponent*/
function calculateWinOrLoseScore(play) {
  let opponentHand = play[0];
  let myHand = play[2];

  // LOSE
  if (opponentHand === 'A' && myHand === 'Z') return 0;
  if (opponentHand === 'B' && myHand === 'X') return 0;
  if (opponentHand === 'C' && myHand === 'Y') return 0;

  // DRAW
  if (opponentHand === 'A' && myHand === 'X') return 3;
  if (opponentHand === 'B' && myHand === 'Y') return 3;
  if (opponentHand === 'C' && myHand === 'Z') return 3;

  // WIN
  if (opponentHand === 'A' && myHand === 'Y') return 6;
  if (opponentHand === 'B' && myHand === 'Z') return 6;
  if (opponentHand === 'C' && myHand === 'X') return 6;
}

/** Calculates total score adding win/lose score and hand score. */
function calculateTotalPlay(play) {
  const winLoseScore = calculateWinOrLoseScore(play);

  let myHand = play[2].toLowerCase();

  const myHandScore = handScores[myHand];

  return winLoseScore + myHandScore;
}

/** Calculates total score from all plays*/
function calculateTotalScore(playData) {
  let totalScore = 0;

  for (let i = 0; i < playData.length; i++) {
    totalScore += calculateTotalPlay(playData[i]);
  }
  console.log("TOTAL SCORE: ", totalScore);
  return totalScore;
}

calculateTotalScore(contents);


// PART 2


// x = lose, y = draw, z = win

function calculateHandScore(play) {
  let opponentHand = play[0];
  let outcome = play[2];

  // A - rock
  if (opponentHand === 'A' && outcome === 'X') return 3; // scissors
  if (opponentHand === 'A' && outcome === 'Y') return 1; // rock
  if (opponentHand === 'A' && outcome === 'Z') return 2; // paper

  // B - paper
  if (opponentHand === 'B' && outcome === 'X') return 1; // rock
  if (opponentHand === 'B' && outcome === 'Y') return 2; // paper
  if (opponentHand === 'B' && outcome === 'Z') return 3; // scissors

  // C - scissors
  if (opponentHand === 'C' && outcome === 'X') return 2; // paper
  if (opponentHand === 'C' && outcome === 'Y') return 3; // scissors
  if (opponentHand === 'C' && outcome === 'Z') return 1; // rock
}

const loseDrawWin = {
  x: 0,
  y: 3,
  z: 6
};

/** Calculates total score adding win/lose score and hand score. */
function calculateTotalPlayAgain(play) {
  const handScore = calculateHandScore(play);
  const winLoseScore = loseDrawWin[play[2].toLowerCase()];

  return handScore + winLoseScore;
}


/** Calculates total score from all plays*/
function calculateTotalScoreAgain(playData) {
  let totalScore = 0;

  for (let i = 0; i < playData.length; i++) {
    totalScore += calculateTotalPlayAgain(playData[i]);
  }
  console.log("TOTAL SCORE AGAIN: ", totalScore);
  return totalScore;
}

calculateTotalScoreAgain(contents);