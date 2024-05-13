
// * --------------FREECODECAMP---------------
//Class marks given as an array. New student mark given as a number.
//Class average as output. Student Mark gives grade output. 

function getAverage(scores) { //Calculates class average
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

function getGrade(score) { //Returns student Grade
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) { //Whether the student has passed or not
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) { //Output message
  const result = hasPassingGrade(studentScore)? "passed" : "failed";
  return `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(studentScore)}. You ${result} the course.`
}

//INPUT
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
