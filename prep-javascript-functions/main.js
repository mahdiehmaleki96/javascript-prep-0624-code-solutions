function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const sum = addTwoNumbers(2, 2);
console.log('sum = ', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
const minutes = convertHoursToMinutes(2);
console.log('convert hours to minutes = ', minutes);

function getGreeting(name) {
  return 'Hello' + ' ' + name;
}
const greeting = getGreeting('World');
console.log('greeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
const sumTimesFive = addAndMultiplyBy5(10, 5);
console.log('sumTimesFive:', sumTimesFive);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
const productDivideByFive = multiplyAndDivideBy5(35, 10);
console.log('productDivideByFive:', productDivideByFive);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const difference = subtractTwoNumbers(22, 7);
console.log('difference:', difference);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
const circumference = getCircleCircumference(5);
console.log('circumference:', circumference);

function getFullName(firstname, lastname) {
  return firstname + ' ' + lastname;
}
const fullName = getFullName('Mahdieh', 'Maleki');
console.log('fullName:', fullName);

function cube(number) {
  return number * number;
}
const cubed = cube(5);
console.log('cubed:', cubed);
