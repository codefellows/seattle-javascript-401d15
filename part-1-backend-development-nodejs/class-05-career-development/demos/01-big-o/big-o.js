'use strict';

// big-o is a way of describing the speed and memory usege of an algorithm
// because algorithms can run faster or slower given an input, we only ever
// use big-o to describe the worst case.

// we use the letter "n" to describe the number of items an aglogorthm is work with

// the array num strings has an "n" of 4
let numStrings = ['one', 'two', 'three', 'four'];

// O(n)
function arrayContains(input, find){
  // this algorithm is considerd to be "O(n)" because it runs over every item in the array
  // so if four items are in the array this loop is going to run four times in the worst case
  // so if "n" items are in the array this is going to run "n" times in the worst case
  for(let i=0; i<input.length; i++){
    if(input[i] === find) return true
  }
  return false
}

console.log('array has four', arrayContains(numStrings, 'four')); // runs four times
console.log('array has eleven', arrayContains(numStrings, 'eleven')); // runs four times
console.log('array has one', arrayContains(numStrings, 'one')); // runs once

// the object colors has an "n" of 5
let colors = {
  red: 'ff0000',
  green: '00ff00',
  blue: '0000ff',
  white: 'ffffff',
  black: '000000',
}

// O(1)
function objectContains(input, find){
  // this algorithm is considerd to be "O(1)" because no matter how big the input is
  // it will only run one statement in the worst case
  // so if 5 items are in the object only one statement is going to run in the worst case
  // so if "n" items are in the object only one statement is going to run in the worst case
  if(input[find]) return true;
  return false;
}

console.log('object has red', objectContains(colors, 'red')); // runs one statement
console.log('object has black', objectContains(colors, 'black')); // runs one statement
console.log('object has purple', objectContains(colors, 'purple')); // runs one statement

// the array dates has an "n" of 8
let dates = [
  new Date('10-23-1990'),
  new Date('02-11-2001'),
  new Date('06-14-1983'),
  new Date('01-01-1970'),
  new Date('04-07-1963'),
  new Date('06-20-1978'),
  new Date('08-03-2016'),
  new Date('11-14-1942'),
];

// more info on selection sort: https://en.wikipedia.org/wiki/Selection_sort
function selectionSort(array){
  // this algorithm is considerd to be "O(n^2)" because
  // it run for "n" items, "n" times in the worst case
  // so if 8 items are in the object the algorithm will run 8^2 (64) times
  // so if "n" items are in the object the algorithm will run n^2 times

  for(let i=0; i<array.length; ++i){ // runs n times
    let minIndex = i;

    for(let j=i+1; j<array.length; ++j){ // runs n times in the worst case
      if( array[j] < array[minIndex])
        minIndex = j;
    }

    if (minIndex != i){
      // swap the min value with the current value at i
      let tmp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = tmp;
    }
  }
  return array
}

console.dir(selectionSort(dates));

// sortedNumbers has an "n" of 13
let sortedNumbers = [2, 5, 7, 10, 22, 23, 26, 32, 45, 67, 73, 84, 92];

// O(log(n))
function binarySearch(array, find){
  // the binary search algorithm only works on sorted arrays
  // this algorithm is considered to be "O(log(n))" because
  // each time the algorithm runs it cuts the number of items it searchs in half
  // so with 8 items it will run 8 times then 4 time then 2 time then 1
  // so with 8 items it will run "log(8)" (aka 15) times
  // so with n items it will run "log(n)" times

  // TODO: uncomment this to watch the array get cut in half each time through
  //console.log(array);
  if (array.length == 1)
    return array[0] === find ? true: false ;

  let startIndex = Math.floor(array.length /2);
  let current = array[startIndex];

  if (current > find) return binarySearch(array.slice(0, startIndex), find);
  if (current < find) return binarySearch(array.slice(startIndex), find);
  return true;
}

console.log('binsearch sortedNumbers for 32', binarySearch(sortedNumbers, 32));
console.log('binsearch sortedNumbers for 1200', binarySearch(sortedNumbers, 1200));
