// DOM Repeat

// concat strings
var result = "Naveed";
// if (result.toLowerCase()) {
  
// }

// result.toUpperCase()
var result2 = 2;
var space = " ";
var concatString = result + result2 + space + "Naveed";
console.log("concatString", concatString);
var concatString2 = `${result} ${result2} Naveed`;
console.log("concatString2", concatString2);

function ctaHandler() {
  var name = "Naveed";
  var dom = document;
  var userNameInput = dom.getElementById("userName");
  console.log("userNameInput", userNameInput.value);
  var resultTag = dom.getElementById("result");
  // resultTag.innerHTML = "Output: " + name
  resultTag.innerHTML = `Output: ${userNameInput.value}`;
}
// string
// ""
// ''
// ``

function consoleMethod(i) {
  console.log("console line", i);
}

// console.log("console line");
// consoleMethod()
// consoleMethod()
// consoleMethod()
// consoleMethod()
// consoleMethod()
// consoleMethod()
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");
// console.log("console line");

// let index = 0
//  console.log("console line 85");
// for(;index <= 5;) {
//   consoleMethod(index)
//   index++
//   if (condition) {
//     break
//   }

// //  console.log("console line 87", index);
// //  console.log("console line 88", index);
// }

// var index = 0;
// var data = ['a','k','i','s','t','a','n']
// var stringData = "P"
//  while (stringData !== "Pakistan") {
//   stringData = stringData + data[index]
//   index++
//   if (condition) {
//     break;
//   }
//  }

// for(let index = "P"; index === "Pakistan"; index++) {
//   console.log("console line 87", index);
//   console.log("console line 88", index);
//  }
// console.log("console line 95");

// const pi = 3.1444
// let somePi = 3.144
// var someVarPi = 3.1444
var number = parseInt("15", 10);
console.log("number", number);
const  parseInt =   (num, redis) => {
  console.log("parseInt=?>>", num, redis);
}


var statement = 5 < 10 && 2 < 2 || 4 == 4
