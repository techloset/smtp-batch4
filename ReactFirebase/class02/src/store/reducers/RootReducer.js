import { combineReducers } from "redux";
import StudentsReducer from "./StudentsReducer";
import CounterReducer from "./CounterReducer"

const rootReducer = combineReducers({
   CounterReducer,
   StudentsReducer,

})

export default rootReducer