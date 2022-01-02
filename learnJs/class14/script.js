// OOP in js
// in js
// inheritance + classes + objects

// other languages
// encop
// pholymo
// overide
// overload
//

// var roll = 0

// class Students {
//     dob = ''
//     name = ''
//     roll = 0

//     constructor(a , b ){
//         console.log("name in constructor", a, b);
//         this.name = a
//         this.roll = b
//     }

//     getAgeOfStudent(){
//         // diffe ?
//         return ''
//     }

//     getStudentRoll(){
//         return this.roll
//     }
// }

// var student1 = new Students('Naveed', 324234);
// // student1.name = 'ali'
// student1.new = 'something'

// student1.newMethod = ()=> 'ali'

// var student2 = new Students('Umar', 234234);
// // student2.name = 'naveed'

// console.log("student1 name", student1.name);

// console.log("student2 name", student2.name);
// //  student1 = new Students('sfad', 23423);

// // var student3 = new Students('Ali', 3424);

// // console.log("student1", student1.name);

// // var student2 = {
// //     name: 'ali',
// //     roll: 123,
// //     getStudents: ()=> 'students'
// // }

// // console.log("student2", student2.name);

// function printHelloWorld() {

// }

// // inheritance in js

// class Parent{

//     name = ''
//     dob = ''

//      constructor(name){
//          this.name = name
//       console.log("constructor in parent");
//      }

//     getAge(){
//         return 'Age in Parent'
//     }

// }

// class Child extends Parent {
//     edu = ''
//     cnic = ''
//     city = ''

//     constructor(city, name){
//         console.log("constructor in child");

//         super(name)
//         this.city = city
//     }

//     getAge(){
//         return 'Age in child'
//     }

// }

// var child1 = new Child('Lahore', 'naveed');

// console.log("child1 age", child1.getAge());

// var chil2 = {

//     name:'',
//     dob:'',
//     edu: '',
//     cnic:'',
//     city:''
// }

// switch statement

// write a js program to print day of week

// if else if

var day = new Date().getDay();

console.log("day", day);

if (day === 1) {
  console.log("Mon");
} else if (day === 2) {
  console.log("Tue");
} else if (day === 3) {
  console.log("Wed");
} else if (day === 4) {
  console.log("Thur");
} else if (day === 5) {
  console.log("Fri");
} else if (day === 6) {
  console.log("Sat");
} else {
  console.log("Sunday");
}

switch ("Tue") {
  case "Mon":
      {
    console.log("Sun");
    break;
      }
  case "Tue":
    console.log("Mon");
    break;
  case 2:
    console.log("Tue");
    break;
  case 3:
    console.log("Wed");
    break;

  case 4:
    console.log("Thu");
    break;
  case 5:
    console.log("Fri");
    break;

  default:
      console.log("Sat");
    break;
}
