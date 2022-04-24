import { v4 as uuidv4 } from 'uuid';


import {UPDATE_STUDENT, DELETE_STUDENT, ADD_STUDENT, FETCH_STUDENTS} from '../actions/StudentsActions'

const initialState = {

  students:  [],
  rollNo: "",
};

export default function StudentsReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_STUDENT: {
 console.log("UPDATE_STUDENT reducer",  action.payload);
      let newStudents = state.students.map((item,index) => {
        if (item.uid ===  action.payload.uid) {
          return  action.payload
        }
        else {
          return item
        }
      })
      return {
        ...state,
        students: newStudents
      };
    }
    case DELETE_STUDENT: {
      console.log("DELETE_STUDENT reducer id catch from action", action.payload);
      let newStudents = state.students.filter((student) => student.uid !== action.payload)
      return {
        ...state, 
        students: newStudents,
      };
    }

    case ADD_STUDENT: {
      console.log("action.payload in reducer", action.payload);
      let newStudents = [ ...state.students,  action.payload ]
      return {
        ...state, 
        students: newStudents,
      };
    }
    case FETCH_STUDENTS: {
      console.log("action.payload in reducer", action.payload);
      return {
        ...state, 
        students: action.payload,
      };
    }



    default:
      return state;
  }
}
