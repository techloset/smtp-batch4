import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {deleteStudent, fetchStudents} from "../../store/actions/StudentsActions"

export default function UseStudentList() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const students = useSelector((store)=> store.StudentsReducer.students)
  
  useEffect(() => {
    dispatch(fetchStudents(setLoading))
  }, [])
  

  const onDeleteHandler = (uid) => {
    console.log("uid in delete handler - component", uid);
      dispatch(deleteStudent(uid))
  }

  const onUpdateHandler = (item, index) => {

  }

  return {
    students, 
    onDeleteHandler,
    onUpdateHandler,
    loading
  }
}
