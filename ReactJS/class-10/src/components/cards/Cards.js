import React,{useEffect} from "react";
import CardItem from "../cardItem/CardItem";

export default function Cards(props) {

    // constructor and component will mount 
// useEffect(()=>{
// // same  constructor and component will mount 
// },[])


// useEffect(()=>{
//   return ()=> {
//     // component will unMount
//   }
//   },[])


//   useEffect(()=>{

//       // should component update
  
//     },[email])


  // useEffect(()=>{

  //   // should component update

  // },[props.text])

  

  return (
    <div>
      <div className="container">
        <div className="row">
          {props.cardsArray.map((item, index) => {
            return (
              <div className="col-4">
                <CardItem data={item} index={index} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
