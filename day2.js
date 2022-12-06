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

syncReadFile("./day2-data.txt");

// A=1, B=2, C=3
// X=1, Y=2, Z=3
// lost=0, 3=draw, 6=won

