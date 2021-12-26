// // truly
// true, 1,2,-1, "sdfa"
// // falsy
// false, 0 , null, undefined

// null pointer
var obj = {
  name: "naveed",
  // color:{
  // modal:{
  //     some:'item'
  // }
  // }
};

// console.log("obj", obj.color.modal);
// 1st solution
// if (obj.color) {
//     if (obj.color.modal) {
//         console.log("obj", obj.color.modal.some);

//     }

// }

function dept(params) {}
// console.log("obj", obj?.color?.modal?.some);

// try catch

// var len = numbers.length
var loading = true;
try {
  // console.log("try log");
  var len = numbers.length;
  //   request to internet > 1min
  // console.log("obj", obj);
  // var loading = false
  // dept()
} catch (error) {
  // if(error.type == 'sfa'){
  // }
  // var loading = false
  // console.log("error", error);
} finally {
  var loading = false;

  // console.log("every time log show");
}

// console.log("some log after try catch");
//

// spread op
// ...

let studentOther = {
  roll: "234234",
  section: "c",
  name: "ali",
};

let student = {
  ...studentOther,
  name: "naveed",
  batch: "4",
};
console.log("student");
// let finalStudent = {
//     roll:studentOther.roll,
//     section: studentOther.section,
//     name: student.name,
//     batch: student.batch
// }

// let finalStudent = {
//     ...student,
//     ...studentOther
// }

// console.log("finalStudent", finalStudent);

// Object.assign()

// var firstNumbers = [1,2,3,4,5,6,7,8,9,10]
// var finalNumbers = [...firstNumbers, ...numbers]

// loops
// for

// while
// do while

var twoNumberResult = sumTwoNumbers(12, 21);

function sumTwoNumbers(num1, num2) {
  var result = num1 + num2;
  return result;
}
//  console.log("twoNumberResult", result);
//  var twoNumberResult2 = sumTwoNumbers(3232,21)
// alert(twoNumberResult2)

// arrow function
// var sumTwoNumbers2 = (num1, num2) => num1 + num2
// sumTwoNumbers2()
// var sumTwoNumbers2 = (num1, num2) => {
//     var result = num1 + num2
//     return result
// }

// var twoNumberResult2 = sumTwoNumbers2(221,23)
// console.log("sum with arrow function",twoNumberResult2);

// function someFun(params) {

// }
// for loop
var numbers = [11, 12, 13, 14, 15,16];

for (let index = 0; index < numbers.length; index++) {
    var item = numbers[index];
    console.log("item", item);
  }
// for each loop
// numbers.forEach((dsfa, adsf) => {
//   console.log("item in for each", dsfa, adsf);
// });

// common things
// 1- it's only works on array
// 2- getting callback function in param

// for each
var resultOfForeach = numbers.forEach((item, index) => {
  console.log("item in for each", item, index);
});
console.log("resultOfForeach", resultOfForeach);
// for each unable to return anything
// map loop
var resultOfMap = numbers.map((item, index) => {
    console.log("item in map", item, index);
    if (item % 2 === 0) {
        return item *2
    }

  })
// map loop will return the new array - 
// it will exact same length of main array
console.log("resultOfMap", resultOfMap);

// filter loop

var resultOfFilter = numbers.filter((item, index) => {
    console.log("item in map", item, index);
    if (item % 2 === 0) {
        return item *2
    }
  })
  console.log("resultOfFilter", resultOfFilter);
//  it will return new array
// length of new array may be same with main array or can be less than, but not greater than to main array