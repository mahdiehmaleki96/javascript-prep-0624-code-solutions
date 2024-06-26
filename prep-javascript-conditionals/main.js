function isAdult(age) {
  if (age >= 18) {
    return console.log('True');
  } else if (age < 18) {
    return console.log('False');
  }
}
const isAdultResult = isAdult(21);

function didStudentPass(score) {
  if (score >= 70) {
    return console.log('True');
  } else if (score < 70) {
    return console.log('False');
  }
}
const didStudentPassResult = didStudentPass(65);

function gradeCalculator(score) {
  if (score < 60) {
    return console.log('F');
  } else if (score < 70) {
    return console.log('D');
  } else if (score < 80) {
    return console.log('C');
  } else if (score < 90) {
    return console.log('B');
  } else if (score < 100) {
    return console.log('A');
  } else if (score > 100) {
    return console.log('A++');
  }
}
const gradeCalculatorResult = gradeCalculator(110);

function seasonMessenger(season) {
  if (season === 'summer') {
    return console.log('It is hot today');
  } else if (season === 'spring') {
    return console.log('The flowers are blooming');
  } else if (season === 'autumn') {
    return console.log('The leaves are changing colors');
  } else if (season === 'winter') {
    return console.log('It is cold today');
  } else {
    return console.log('Please enter the valid value');
  }
}
const seasonMessengerResult = seasonMessenger('winter');

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'Saturday' || dayOfTheWeek === 'Sunday') {
    return console.log('Have a good weekend!');
  } else if (
    dayOfTheWeek === 'Monday' ||
    dayOfTheWeek === 'Tuesday' ||
    dayOfTheWeek === 'Wednesday' ||
    dayOfTheWeek === 'Thursday' ||
    dayOfTheWeek === 'Friday'
  ) {
    return console.log('It is a weekday!');
  }
}
const dayDetectorResult = dayDetector('Tuesday');
