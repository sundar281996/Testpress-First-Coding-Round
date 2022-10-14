// 1. Write a program to print the reverse of the given string.
// Input
// codecode
// Output
// edocedoc
// Input Constraints
// 1<=Length of string<=100
// Input string contains only lowercase characters ['a' to 'z'].

// solution:

let Userinput = "codecode";
let input1 = String(Userinput);
function reverseString(str) {
  return str.split("").reverse().join("").toLowerCase();
}
console.log(reverseString(input1));

// 2. Given a number, check whether it is a prime number or not.
// Input 1
// 3
// Output 1
// Yes
// Input 2
// 4
// Output 2
// No

// solution:

let Userinput1 = 89;
function check(n) {
  if (n / 2 == 1 || (n % 2 !== 0 && n > 2)) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
check(Userinput1);

// 3. Given an array of numbers, arrange them in a way that it forms the largest value.
// Input
// [54, 546, 548, 60]
// Output
// 6054854654

// solution:

var arr = [54, 546, 548, 60];
let arrf = (input) => {
  let output = input.reverse().join("");
  return output;
};
console.log(arrf(arr));

// 4. Given a number N, print reverse of number N.
// Input
// 988
// Output
// 889
// Note
// Do not print leading zeros in output.
// For example N = 100
// Reverse of N should be 1 not 001.

// solution:

let input = 1000;
const reversedNum = (num) =>
  parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);
let output = reversedNum(input);
console.log(output);

// Given an array of numbers, find the maximum and minimum element in the array.
// Input
// [54, 546, 548, 60]
// Output
// 548 54

// solution:

let arrr = [12, 54, 546, 548, 60];

let arrfn = (input) => {
  let arr1 = input[0];

  for (let i = 1; i < input.length; i++) {
    if (input[i] > arr1) {
      arr1 = input[i];
    }
  }
  return arr1;
};
var a = arrfn(arrr);

let arrfn1 = (input) => {
  let arr2 = input[0];

  for (let i = 1; i < input.length; i++) {
    if (input[i] < arr2) {
      arr2 = input[i];
    }
  }
  return arr2;
};
var b = arrfn1(arrr);
console.log(a, b);
