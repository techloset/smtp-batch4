import { createStore } from "redux";
import rootReducer from '../store/reducers/RootReducer'

const Store = createStore(rootReducer)

export default Store