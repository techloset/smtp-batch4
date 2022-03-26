import { createStore } from "redux";
import rootReducer from '../store/reducers/RootReducer'

const store = createStore(rootReducer)

export default store