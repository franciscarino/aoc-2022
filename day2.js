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

function calculateTotalPlay(play) {
  const winLoseScore = calculateWinOrLoseScore(play);

  let myHand = play[2].toLowerCase();

  const myHandScore = handScores[myHand];

  return winLoseScore + myHandScore;
}

function calculateTotalScore(playData) {
  let totalScore = 0;

  for (let i = 0; i < playData.length; i++) {
    totalScore += calculateTotalPlay(playData[i]);
  }
  console.log("TOTAL SCORE: ", totalScore);
  return totalScore;
}

calculateTotalScore(contents);





