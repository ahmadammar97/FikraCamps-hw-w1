/** Q1
 * Assume you have the USD prices for this week from Saturday to Thursday
 * in contrast to the Iraqi Dinar as an array
 * arr = [150, 146, 142, 143, 145, 144]
 * calculate the max profit at which day you should buy at and what day should you sell at
 * for this example we buy at Monday and we sell at Wednesday
 */

function BestProfit(arr) {
  let buy,sell,days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  buy = arr.indexOf(Math.min.apply(Math, arr));
  sell = buy;
  for (let i = buy; i < arr.length; i++) {
    arr[i] > sell?sell=arr[i]:null;
  }
  sell=arr.indexOf(sell);
  return `we buy at ${days[buy]} and we sell at ${days[sell]}`
}
console.log(BestProfit([150, 146, 142, 143, 145, 144]));

/** Q2
 * assume you have two time periods
 * for example
 * period1 = 13/5/2021 01:00 to 14/5/2021 01:00
 * period2 = 15/5/2021 01:00 to 16/5/2021 01:00
 * write a function that tells us whether two given periods overlap or not
 * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "15/5/2021 13:00","16/5/2021 13:00" ) => no overlap
 * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "14/5/2021 13:00","16/5/2021 13:00" ) => overlap
 */

function CheckOverlap(t1Start, t1End, t2Start, t2End) {
    overlap = t1Start < t2End && t2Start > t1End;
    return overlap==true?"no overlap":"overlap";
}
console.log(CheckOverlap("13/5/2021 13:00","14/5/2021 13:00","14/5/2021 13:00","16/5/2021 13:00")
);

/** Q3
 * assume you have a shoes factory and the production lines produces shoes as follows
 * L R LL R R RR LL
 * write a function that takes these shoes as in a string
 * shoes = "RLRLRRLL"
 * then return how many pairs in it
 * result = 4
 * example HowManyPairs("RLRLRRLL") => 4
 * example HowManyPairs("RRLLRRRLLR") => 2
 */

function HowManyPairs(shoes) {
  let counts = {},
    sampleArray = Array.from(shoes),
    numberOfPairs;
  sampleArray.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });
  counts["R"] > counts["L"]
    ? (numberOfPairs = counts["L"])
    : (numberOfPairs = counts["R"]);
  return numberOfPairs;
}
console.log(HowManyPairs("RLRLRRLL"));

/** Q4
 *    Write a function that takes a string and return JSON of all the letters and its count. check the example to know more
 *    letterCount('abcac') => {a: 2, b: 1, c: 2}
 */

function HowManyLetters(word) {
  let letterCount = {};
  for (i of word) {
    if (letterCount[i]) {
      letterCount[i] = letterCount[i] + 1;
    } else {
      letterCount[i] = 1;
    }
  }
  return letterCount;
}
console.log(HowManyLetters("kkssffoos"));

/** Q5
   * Create a function that takes an array of integers as an argument and returns the same array in ascending order. Using sort() would be easy, but for this challenge YOU have to sort the array creating your own algorithm.
  
  Examples
  sortArray([2, -5, 1, 4, 7, 8]) ➞ [-5, 1, 2, 4, 7, 8]
  
  sortArray([23, 15, 34, 17, -28]) ➞ [-28, 15, 17, 23, 34]
  
  sortArray([38, 57, 45, 18, 47, 39]) ➞ [18, 38, 39, 45, 47, 57]
  Notes
  The arrays can contain either positive or negative elements.
  The arrays will only contain integers.
  The arrays won't contain duplicate numbers.
  This is a challenge to enhance your ability, using the sort built-in won't enhance your skills.
   */

function sortArray(array) {
  let sorted = false,
    temp;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        sorted = false;
      }
    }
  }
  return array;
}

console.log(sortArray([23, 15, 34, 17, -28]));

/** Q6
   * Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
  
  Examples
  minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
  
  minMax([2334454, 5]) ➞ [5, 2334454]
  
  minMax([1]) ➞ [1, 1]
   */

function minMax(numbers) {
  return [Math.max.apply(Math, numbers), Math.min.apply(Math, numbers)];
}
console.log(minMax([1]));

/** Q7
   * Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
  
  Examples
  missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
  
  missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
  
  missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
  Notes
  The array of numbers will be unsorted (not in order).
  Only one number will be missing.
   */
function missingNum(n) {
  return 55 - n.reduce((a, b) => a + b, 0);
}
console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));

/** Q8
   * Write a function that accepts a positive integer between 0 and 999 inclusive and returns a string representation of that integer written in English.
  
  Examples
  numToEng(0) ➞ "zero"
  
  numToEng(18) ➞ "eighteen"
  
  numToEng(126) ➞ "one hundred twenty six"
  
  numToEng(909) ➞ "nine hundred nine"
  Notes
  There are no hyphens used (e.g. "thirty five" not "thirty-five").
  The word "and" is not used (e.g. "one hundred one" not "one hundred and one").
   */

const lessThanTwenty = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
const tenthsLessThanHundred = [
  "zero",
  "ten",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
function numToEng(number, words = []) {
  if (number === 0) return words.length ? words.join(" ") : "zero";
  if (number < 20) {
    words.push(lessThanTwenty[number]);
    return numToEng(0, words);
  } else if (number < 100) {
    words.push(tenthsLessThanHundred[Math.floor(number / 10)]);
    return numToEng(number % 10, words);
  } else if (number < 1000) {
    words.push(numToEng(Math.floor(number / 100)) + " hundred");
    return numToEng(number % 100, words);
  }
}
console.log(numToEng(999));
