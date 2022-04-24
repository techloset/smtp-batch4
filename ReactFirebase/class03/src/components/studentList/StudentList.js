import React from 'react'
import Button from '../button/Button'
import UseStudentList from './UseStudentList'

export default function StudentList() {
  
    const {onDeleteHandler, students, onUpdateHandler, loading} = UseStudentList()
 
    if(loading){
    return <div>Loading....</div>
  }

  return (
    <div>
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
                    <Button label="Delete" customStyle={{backgroundColor:'red'}} onPress={()=>onDeleteHandler(item.uid)} />
                    <Button label="Update" onPress={() => onUpdateHandler(item, index)} />
                </td>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}
