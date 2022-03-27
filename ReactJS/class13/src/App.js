import React from 'react'
import { useSelector } from 'react-redux'
import Counter from './components/counter/Counter'
import Student from './components/students/Student';

export default function App() {
const store = useSelector((store)=> store.CounterReducer)
console.log("store in app.js", store);
  return (
    <div>
     <Counter/>
     <Student/>
    </div>
  )
}
