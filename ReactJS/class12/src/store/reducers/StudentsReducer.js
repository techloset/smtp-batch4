
import {UPDATE_STUDENT, DELETE_STUDENT} from '../actions/StudentsActions'

const initialState = {
  loading: false,
  students: [],
  rollNo: "",
};

export default function StudentsReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_STUDENT: {
        // logics - data process
      return state;
    }
    case DELETE_STUDENT: {
         // logics - data process
      return state;
    }
    default:
      return state;
  }
}
