import React,{useState} from 'react'

export default function App() {
  
  const [email, setEmail] = useState('learnwithnaveedsarwar@gmail.com')
  const [userName, setUserName] = useState('')

  const [students, setStudents] = useState([1,2,3,4,5])
 const [flag, setFlag] = useState(true)


 const onClickHandler = () =>{

  // repeat js

  // for loop

  for (let index = 0; index < 10; index++) {
   console.log('for loop', index);
  }

  // while loop

  // do while lopp


  // for each loop
  var returnForEach = students.forEach(element => {
    console.log('element', element);
  });

console.log("returnForEach", returnForEach);
  // filter loop
  var returnFilterLoop = students.filter(element => {
    console.log('element', element);
    return element * 2
  });
console.log("returnFilterLoop", returnFilterLoop);

  // map loop

  var returnMapLoop = students.map(element => {
    console.log('element', element);
    return element * 2
  });
console.log("returnMapLoop", returnMapLoop);

 

 }

//  const ctaHanlder = ()=>{
//   onClickHandler()
//  }
 

const onChangeHandler = (e) =>{
  console.log("e", e.target.name);
  // setUserName()

}



  return (
    <div>

    {flag?  <h1>Learn Js</h1> : ""}
   
    <p>email:{email}</p>

    <p>name:{userName}</p>

    {students.map((item,index)=> <h1>Hello {item} index{index} </h1>)}

    <input type="text" name="userName" onChange={(e)=>onChangeHandler(e)} />
    
    <button required onClick={()=>onClickHandler()}>submit</button>

    </div>
  )
}

