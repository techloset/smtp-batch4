import React,{useState} from 'react'

export default function CustomDatePicker() {
  const [date,setDate] = useState(null)

  const onChangeHanlder = (e) =>{
    console.log('e',e.target.value);
    setDate(e.target.value)
  }
  
  return (
    <div>
      <h1>Choose Date</h1>
     <input onChange={onChangeHanlder} type={'date'} />
      <h1>Chosen Date is:{date}</h1>
    </div>
  )
}
