// 
var num1;
num1 = 2;
// var num2 = 2;  1000
// var num3 = 3; 300
// var num4 = 4; 4000
// var num5 = 5;
// var num6 = 6; 
// var num7 = 7; 
// var num8 = 8;
// var num9 = 9;
// var num100 = 100;
// var num1000 =  1000;

// console.log("Num5", num5);

// Array
// var prices = [1121,12123,123123,,123,1,2312,3]
var numbers = ["naveed","Ali",3,4.0,5,6,false,8,null,10.11, "Ali"]
// get
console.log("Numbers", numbers);
console.log("Bool Val", numbers[6]);
console.log("Num 8", numbers[7]);
console.log("length of array is =", numbers.length);
// set
numbers[6] = true
numbers[7] = 12
numbers[608] = "batch4"
// numbers[1000] = 500;
console.log("Num 8 after update", numbers[7]);
console.log("Numbers", numbers);

// how to find array length
console.log("length of array is =", numbers.length);
// Get all index from array using loop

for (let index = 0; index < numbers.length; index++) {
  // console.log("numbers[index];", index, numbers[index]);
  if (numbers[index] === 'Ali') {
    console.log("Number index for Ali is = ", index);
  }
}


// write a js program to draw table for 2 
// example output
// 2 * 1 = 2
// 2 * 2 = 4
// ...
// 2 * 20 = 40

// Program 2:
// write a js program to draw the shape below in console using loop
// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *