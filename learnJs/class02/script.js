
// variables
var number = 1;
// variable naming
// wrong
// var 3242asdf = 32
// var @sdfa = 32;
// var var = 32

// correct
var NumberData = '1'
var number_second = 2;
var number23 = 23;
var _sdf = 'sfd'
var name = "naveed"
var NAME = "sdf"
// pascal case
var FirstNameForUser = "Naveed"
// camel Case
var lastNameForUser = "Naveed"
var user = "Naveed Sarwar"
// dataTypes
// 1221 - int data
// 213.213 - float data
// naveed - string data
// false / true - bool data
// null
// undefined
var someVar;
var num = 3242;
var numFloat = 232.23;
var stringData = "My Name is Naveed"
var flag = true;
// string data
// '323'
// "Naveed"
// `Naveed`
// console.log("Data type of Variable ==>", typeof flag);
// Type convert for js
var numberInString = "123"
console.log("Data type of => ", typeof numberInString);
var numberInNumber = parseInt(numberInString)
numberInNumber = parseFloat(numberInString)
// var convertInString = numberInNumber.toString()
console.log("data type of numberInNumber", numberInNumber);
// math expressions
// DMAS
// + , - 
// * , /, %
var addTwoNumber = 2 -  10 / 10 * (23 + 23) * 3;
console.log("addTwoNumber", addTwoNumber);
// statements
// ==
//  <
//  > 
//  >=
//  <=
//  !=
//  &&
//  ||
//  !
// assignment Operator
var a = 2;
var b = 2;
// equal to operator
// in math a = a
// in computer a == a > no data type check
// in computer a === a > data type will also consider
console.log(2 == 3);
// var result =  2 > 2 || 3 == 3
var result =  2 > 2 && 3 == 3 || 4 == 4 && 2 < 4
console.log("Result ", result);

// And Table 
// T T = T
// T F = F
// F T = F
// F F = F

// OR Table
// T T = T
// T F = T
// F T = T
// F F = F
