let counter = 10;
const numbers = [];
for (let i = 0; i < 10; i++) {
  counter += 73;
  numbers.push(counter);
}
console.log(numbers);
if (numbers > 740) {
  console.log('Maximum number exceeded');
} else {
  console.log('Array values within range');
}
function getStats(numberList) {
  const stats = {};
  let largest = numberList[0];
  let total = 0;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > largest) {
      largest = numberList[i];
    }
  }
  for (let i = 0; i < numberList.length; i++) {
    total += numberList[i];
  }
  const average = total / numberList.length;
  stats.average = average;
  stats.largest = largest;
  return stats;
}
const counterStats = getStats(numbers);
const report =
  'The largest number was ' +
  counterStats.largest +
  ' and the average number was ' +
  counterStats.average;
console.log(report);
