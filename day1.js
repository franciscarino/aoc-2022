'use strict';

// import data from "./day1-data";

const { readFileSync, promises: fsPromises } = require('fs');


/** Reads the file and retuns an array of the contents.
 */
function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const contentsArray = contents.split(/\r?\n/);

  const contentsArrayOfNums = [];

  contentsArray.forEach(element => contentsArrayOfNums.push(parseInt(element)));

  console.log(typeof (contentsArrayOfNums[0]));
  console.log("contentsArrayOfNums: ", contentsArrayOfNums);
  return contentsArrayOfNums;
}

/** Counts calories per elf.
 * Returns a new array with calories per elf.
 */
function countCalories(data) {
  const caloriesPerElf = [];
  let calorieCount = 0;
  for (let i = 0; i < data.length; i++) {
    if (!data[i]) {
      caloriesPerElf.push(calorieCount);
      calorieCount = 0;
    } else {
      calorieCount += data[i];
    }
  }
  console.log("caloriesPerElf: ", caloriesPerElf);
  return caloriesPerElf;
}

/** Finds max calories in a given array */
function findMaxCalories(data) {
  const max = Math.max(...countCalories(data));

  console.log(max);
  return max;
}

const fileData = syncReadFile('./day1-raw-data.txt');

findMaxCalories(fileData);

// 68292



// PART 2

const caloriesPerElf = countCalories(fileData);

function findTopThreeSum(data) {
  let sortedArray = data.sort((a, b) => a - b);
  console.log("sortedArray ", sortedArray);

  let topThreeSum = data[data.length - 1]
    + data[data.length - 2]
    + data[data.length - 3];

  console.log("topThreeSum ", topThreeSum);
  return topThreeSum;
}

findTopThreeSum(caloriesPerElf);

// topThreeSum = 204640



