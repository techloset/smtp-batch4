import React from 'react'
import { useDispatch } from 'react-redux'
import AddStudents from '../../components/addStudents/AddStudents'
import StudentList from '../../components/studentList/StudentList'
import { doLogout } from '../../store/actions/AuthActions'

export default function Home() {
  const dispatch = useDispatch()

  return (
    <div>
       <h1>Add Students</h1>
      <AddStudents/>

      <button onClick={()=> dispatch(doLogout())}> logout </button>


      <h1>List of students</h1>
      <StudentList/>
    </div>
  )
}
