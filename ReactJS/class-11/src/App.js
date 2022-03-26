import React,{useState} from 'react'
import Cards from './components/cards/Cards'
import Input from './components/input/Input'

export default function App() {
  const [first, setfirst] = useState("")

  const onChangeHandler = (e) =>{
    setfirst(e.target.value)
  }

  return (
    <div>
      <Cards firstName={first}/>
      <Input placeholder='First Name' label="First Name" onChange={onChangeHandler}/>
    </div>
  )
}
