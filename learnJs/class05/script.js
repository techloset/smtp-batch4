// write a js program, add 5 and 10 two numbers and show the result in console

console.log("Line no.2");
function addTwoNumbers(num1 = 5, num2 = 10) {
  console.log("Param1 ", num1);
  console.log("Param2 ", num2);
  // var result = num1 + num2;
  // console.log("result - line no.7", result);
  // console.log("result - line no.7", result);
  // console.log("result - line no.7", result);
  // console.log("result - line no.7", result);
  // console.log("result - line no.7", result);
  // console.log("result - line no.7", result);
}
parseInt()

// function addTwoNumbers2() {
//   var num1 = 15;
//   var num2 = 10;
//   var result = num1 + num2;
//   console.log("result - line no.7", result);
// }
console.log("Line no.9");
// var number = prompt("Enter Number",3,5)
// addTwoNumbers(number,10);



console.log("line14");


// addTwoNumbers();
addTwoNumbers();
// addTwoNumbers(15,17);
// if (condition) {
//   var num1 = 5;
//   var num2 = 10;
//   var result = num1 + num2;
//   console.log("result", result);
// }

// functions

// write a js program, add 10 and 15 two numbers and show the result in console
// var num3 = 10;
// var num4 = 15;
// var result2 = num3 + num4;
// console.log("result", result2);


// DOM

function setH2Text() {
var dom = document;
var someName = dom.getElementById("idH2")
console.log("someName", someName.innerHTML);
var nameInput = dom.getElementById("name")
someName.innerHTML = nameInput.value
console.log("dom", dom);
}



function resetH2Text() {
  var dom = document;
  var someName = dom.getElementById("idH2")
  var nameInput = dom.getElementById("name")
  console.log("someName", someName.innerHTML);
  someName.innerHTML = nameInput.value
  console.log("dom", dom);
  }
// setH2Text()

function addTwo() {
  var dom = document;
  var num1 = dom.getElementById("number1")
  var num2 = dom.getElementById("number2")
  var result =  parseInt(num1.value) + parseInt(num2.value)
  var someName = dom.getElementById("idH2")
  someName.innerHTML = result
  console.log("dom", dom);
  }


