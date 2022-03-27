import React from 'react'
import { useSelector } from "react-redux";


import About from '../../pages/about/About'
import List from '../list/List'

export default function Cards({firstName}) {
  
  const userName =  useSelector((store)=> store.StudentsReducer.userName)


  return (
    <div>
    UserName: {userName}
    <List firstName = {firstName}/>
    {/* <About firstName={firstName}/> */}

    </div>
  )
}
