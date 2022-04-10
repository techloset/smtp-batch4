import { v4 as uuidv4 } from 'uuid';


import {UPDATE_STUDENT, DELETE_STUDENT, ADD_STUDENT} from '../actions/StudentsActions'

const initialState = {

  students:  [

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
    }  
  
  ],
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



    default:
      return state;
  }
}
