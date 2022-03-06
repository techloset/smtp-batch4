import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import './App.css'
const data = [

  {
    uid: uuidv4(),
    name: 'naveed',
    email: 'learnwithnaveedsarwar@gmail.com',
    rollNo: 234234,
    className: 'web and mobile'
  },


  {
    uid: uuidv4(),
    name: 'Umar',
    email: 'umar@gmail.com',
    rollNo: 2342002334,
    className: 'web and mobile'
  },


  {
    uid: uuidv4(),
    name: 'Ali',
    email: 'Ali@gmail.com',
    rollNo: 23,
    className: 'web and mobile'
  },




]

export default function App() {

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [rollNo, setRollNo] = useState('')
  const [className, setClassName] = useState('')

  const [students, setStudents] = useState(data)


  const [isUpdate, setIsUpdate] = useState(false)
  const [updateUid, setUpdateUid] = useState(0)



  const onChangeNameHandler = (e) => {
    console.log('event---', e.target.value);
    setUserName(e.target.value)
  }

  const onSubmitHandler = () => {
    console.log('submit button clicked');
    if (!userName || !email || !rollNo || !className) {
      alert('All inputs are required')
      return
    }

    // do some logics with the form data
    console.log('Values', userName, email, rollNo, className)

    let student = {
      uid: uuidv4(),
      name: userName,
      email: email,
      rollNo: rollNo,
      className: className
    }

    setStudents([...students, student])

    setClassName('')
    setUserName('')
    setRollNo('')
    setEmail('')
  }

  const onDeleteHandler = (uid) => {

    console.log('email', uid);

    let newStudents = students.filter((student) => student.uid !== uid)

    setStudents(newStudents)

  }

  const onUpdateHandler = (item, index) => {
    setClassName(item.className)
    setUserName(item.name)
    setRollNo(item.rollNo)
    setEmail(item.email)
    setUpdateUid(item)
    setIsUpdate(true)
  }

  const onCtaUpdate = () => {
    console.log('onCtaUpdate');

    let student = {
      name: userName,
      email: email,
      rollNo: rollNo,
      className: className
    }


    let newStudents = students.map((item,index) => {
      if (item.uid ===  updateUid) {
        return student
      }
      else {
        return item
      }
    })

    setStudents(newStudents)

    setClassName('')
    setUserName('')
    setRollNo('')
    setEmail('')
    setIsUpdate(false)



  }


  return (
    <div>
      <h1>Student SignUp Form</h1>
      <div>Name: <input onChange={(e) => setUserName(e.target.value)} value={userName} placeholder='enter your name' type='text' /> </div>
      <div>Email: <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder='enter your Email' type='text' /> </div>
      <div>Roll No.: <input onChange={(e) => setRollNo(e.target.value)} value={rollNo} placeholder='enter your Roll No.' type='text' /> </div>
      <div>Class: <input onChange={(e) => setClassName(e.target.value)} value={className} placeholder='enter your Class' type='text' /> </div>
      {isUpdate ?
        <button onClick={onCtaUpdate}>Update</button> :
        <button onClick={onSubmitHandler}>Submit</button>
      }


      <h1>List of Students</h1>

      <table >
        <tr className='customTable'>
          <th>No.</th>
          <th>UID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Roll No.</th>
          <th>Class</th>
          <th>Actions</th>
        </tr>

        {
          students.map((item, index) => {
            return (
              <tr key={index} className='customTable'>
                <td>{index + 1}</td>
                <td>{item.uid}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.rollNo}</td>
                <td>{item.className}</td>
                <td>
                  <button onClick={() => onDeleteHandler(item.uid)}>Delete</button>
                  <button onClick={() => onUpdateHandler(item, index)}>Update</button>
                </td>
              </tr>
            )
          })
        }


      </table>



    </div>
  )
}
