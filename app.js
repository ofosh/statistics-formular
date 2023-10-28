// Mean
function mean(arr) {
  let sum = arr.reduce((a, b) => a + b, 0)
  return sum/arr.length;
}

// Median
function median(arr) {
  const arrSort = arr.sort((a, b) => a - b);
  return arrSort.length % 2 === 0 ? (arrSort[arrSort.length/2 - 1] + arrSort[arrSort.length/2]) / 2 : arrSort[Math.floor(arrSort.length/2)];
}

// Mode
function mode(arr) {
  const frequencyTable = [];
  arr.forEach(e => frequencyTable[e] = frequencyTable[e] + 1 || 1);

  let modes = [];
  let maxFrequency = 0;
  for(const key in frequencyTable) {
    if(frequencyTable[key] > maxFrequency) {
      modes = [Number(key)];
      maxFrequency = frequencyTable[key];
    }
    else if(frequencyTable[key] === maxFrequency) {
      modes.push(Number(key));
    }
  }
  if(modes.length === Object.keys(frequencyTable).length) modes - []
  return modes;
}

// Reverse

function reverse(arr) {
  const reverseBtn = arr.reverse((a, b) => a + b, 0)
  return reverseBtn;
}

// Maximum

function maximum() {
  return data.reduce((a,b) => a > b ? a : b)
}
// Minimum 
function minimum() {
  return data.reduce((a,b) => a < b ? a : b)
}

// Example
const data = [25, 4, 17, 40, 63, 25, 40, 54, 20, 90, 23];

// Console Test
console.log(`Data: ${data}`);
console.log(`Mean: ${mean(data)}`);
console.log(`Data: ${data.sort((a, b) => a - b)}`);
console.log(`Median: ${median(data)}`);
console.log(`Mode: ${mode(data)}`);
console.log(`Reverse: ${reverse(data)}`);
console.log(`Maximum: ${maximum(data)}`);
console.log(`Minimum: ${minimum(data)}`);
