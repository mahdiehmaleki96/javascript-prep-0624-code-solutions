// create your loops here.
function whileLoop1() {
  const whileArray = [];
  let index = 0;
  while (index < 10) {
    whileArray.push(index);
    index++;
  }
  return whileArray;
}
const whileLoop1Result = whileLoop1();
console.log('whileLoop1 output:', whileLoop1Result);

function whileLoop2() {
  const whileArray = [];
  let index = 0;
  while (index < 20) {
    whileArray.push(index);
    index += 2;
  }
  return whileArray;
}
const whileLoop2Result = whileLoop2();
console.log('whileLoop2 output:', whileLoop2Result);

function forLoop1() {
  const forArray = [];
  for (let i = 0; i < 10; i++) {
    forArray.push(i);
  }
  return forArray;
}
const forLoop1Result = forLoop1();
console.log('forLoop1 output:', forLoop1Result);

function forLoop2() {
  for (let i = 100; i > 0; i--) {
    console.log('time to explosion: ' + i);
  }
}
forLoop2();

const person = {
  name: 'Mahdieh',
  age: '28',
  hobby: 'hiking',
  invention: 'AI engine',
};
function forInLoop1(object) {
  const forInArray = [];
  for (const key in person) {
    forInArray.push(key);
  }
  return forInArray;
}
const forInLoop1Result = forInLoop1();
console.log('forInLoop1Result output: ', forInLoop1Result);

function forInLoop2(object) {
  const forInArray = [];
  for (const key in person) {
    forInArray.push(person[key]);
  }
  return forInArray;
}
const forInLoop2Result = forInLoop2();
console.log('forInLoop2 output: ', forInLoop2Result);
