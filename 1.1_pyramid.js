/* 
*--------------------FREECODECAMP---------------------
& Uses string.repeat(), array.push(), array.unshift()

* MY SOLUTION
* This code has multiple negatives.
* 1. Each line is logged at each loop.
* 2. Inverted Pyramid takes time to recode
*/


/* const num = 10;
const space = "-";
const hash = "#"

for (let i=1; i<=num; i++){
  console.log(line(i,num));
}

function line(rowNumber, totalRows){
  const printLine = space.repeat(totalRows-rowNumber) + hash.repeat(2*rowNumber-1) + space.repeat(totalRows-rowNumber);
  return printLine;
} */



/*
* FREECODECAMP SOLUTION
* Uses array to store the each line of pyramid in memory and logs all at once
* Solves the inversion problem by adding each rows at the beginning of the array with UNSHIFT Method.
*/


const character = "#";
const count = 8;
const rows = [];
const inverted = true;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) { 
  if(inverted){
    rows.unshift(padRow(i, count)); //Each line is pushed to the rows array start.
  } else {
    rows.push(padRow(i, count)); //Each line is pushed to the rows array end.
  }
}

let result = ""

for (const row of rows) {
  result = result + row + "\n"; //To store each value of rows array in a multiple row format.
}

console.log(result);