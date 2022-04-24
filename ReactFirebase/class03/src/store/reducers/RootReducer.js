import { combineReducers } from "redux";
import StudentsReducer from "./StudentsReducer";
import CounterReducer from "./CounterReducer"
import AuthReducer from './AuthReducer'

const rootReducer = combineReducers({
   CounterReducer,
   StudentsReducer,
   AuthReducer
})

export default rootReducer