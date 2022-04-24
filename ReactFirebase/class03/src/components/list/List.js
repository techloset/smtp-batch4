import React from 'react'
import { useSelector } from 'react-redux'

export default function List({firstName}) {

  const userName = useSelector((store)=> store.StudentsReducer.userName)

  return (
    <div>
        <ul>
            <li>Name: {userName}</li>
        </ul>
    </div>
  )
}
