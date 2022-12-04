'use strict';

// import data from "./day1-data";

const { readFileSync, promises: fsPromises } = require('fs');

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const contentsArray = contents.split(/\r?\n/);

  console.log("contentsArray: ", contentsArray);
  return contentsArray;
}


function countCalories(data) {
  const caloriesPerElf = [];
  let calorieCount = 0;
  for (let i = 0; i < data.length; i++) {
    if (!data[i]) {
      caloriesPerElf.push(parseInt(calorieCount));
      calorieCount = 0;
    } else {
      calorieCount += parseInt(data[i]);
    }
  }
  console.log("caloriesPerElf: ", caloriesPerElf);
  return caloriesPerElf;
}

function findMaxCalories(data) {
  const max = Math.max(...countCalories(data));

  console.log(max);

  return max;
}

const fileData = syncReadFile('./day1-raw-data.txt');

findMaxCalories(fileData);

// 68292



