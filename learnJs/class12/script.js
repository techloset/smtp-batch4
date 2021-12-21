// object handling

// Entity => attributes + actions
// laptop as an entity,
// var laptop = ['company:apple', 'ram:16gb', 'hard:1tb', 'ssd:256gb', 'color:silver']

// for (let index = 0; index < laptop.length; index++) {
//     const element = laptop[index];
//     // console.log(element.slice(0,4));
//     if (element.slice(0,4) === 'hard') {
//         console.log(element.slice(5,element.length));
//     }

// }

// var laptops = ['apple2015:company:apple', 'dell3242:ram:16gb', 'hard:1tb', 'ssd:256gb', 'color:silver']

// objects
// key pair values
// var laptopApple = {
//   color: "black",
//   hard: "1tb",
//   ram: "16gb",
//   ssd: "256gb",
// };

// laptopApple.color = undefined;

// laptopApple.isPc = "new Value";
// laptopApple.isPc = "new sfda";

// var hardSize = laptopApple.hard;
// laptopApple.hard = "2tb";
// console.log("laptopApple", laptopApple);

// function setName(params) {}

// var getName = prompt("enter your name");

// var laptopDell = {
//   name: getName,
//   isPC: false,
//   screenSize: 2134,
//   inputDevices: ["usb", "mic"],
//   color: "white",
//   hard: "2tb",
//   ram: "16gb",
//   ssd: "256gb",
//   powerOn: setName,
// };

// delete laptopApple.color;

// var laptops = {
//   apple: {
//     color: "black",
//     hard: "1tb",
//     ram: "16gb",
//     ssd: "256gb",
//   },

//   dell: {
//     color: "white",
//     hard: "2tb",
//     ram: "16gb",
//     ssd: "256gb",
//   },
// };

// delete laptops.apple;

// var laptopsArray = [
//   {
//     model: "del",
//     color: "black",
//     hard: "1tb",
//     ram: "16gb",
//     ssd: "256gb",
//   },
//   {
//     model: "apple",
//     color: "white",
//     hard: "2tb",
//     ram: "16gb",
//     ssd: "256gb",
//   },
// ];

// // keys?

// console.log("keys", Object.keys(laptopApple));

// // values?
// console.log("values", Object.values(laptopApple));

// // console.log("ram of laptop", laptop.ram);

// // write a js program to save 5 dell laptops in ram, having attributes of model, color, ram, ssd
// // array of objects
// var dellLaptops = [
//   {
//     model: "3422",
//     color: "black",
//     ram: "16gb",
//     ssd: "180gb",
//   },
//   {
//     model: "324",
//     color: "black",
//     ram: "16gb",
//     ssd: "180gb",
//   },

//   {
//     model: "234234",
//     color: "white",
//     ram: "16gb",
//     ssd: "180gb",
//   },

//   {
//     model: "9234",
//     color: "black",
//     ram: "16gb",
//     ssd: "180gb",
//   },
//   {
//     model: "2342421",
//     color: "black",
//     ram: "16gb",
//     ssd: "180gb",
//   },
// ];

// // var students = [ false, 23423 ,'234' ,[],{} ];
// for (let index = 0; index < 5; index++) {
//   students.push({
//     rollNo: index,
//     name: "naveed",
//   });
// }


// next  
// DOM
// Advance js, class, sort, filter, map, search, reduce, spread, arrow function, 

// date
// var pastDate = new Date('01-02-2020');

// var futureDate = new Date(01-02-2023);

// var currentDate = new Date();
// var getTime = currentDate.getTime()

// write js program to find number of fridays in current month


// switch statement,




// conditional statement / operator

// if (2 < 5) {
  
//     if ( 3< 4 ) {
//          name = "umar"
//     }
//     else {
//     name = 'naveed'
//     }
// }
//  else {
//      name =  'ali'
//  }

// var name = 2 < 5 ? 3< 4 ? "umar" :  'naveed'  : 'ali'
