'use strict';

import data from "./day1-data";

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
  return caloriesPerElf;
}

function findMaxCalories(data) {
  return Math.max(...countCalories(data));
}

findMaxCalories(data);

// 68292



