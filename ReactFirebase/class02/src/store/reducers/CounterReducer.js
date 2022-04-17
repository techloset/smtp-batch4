
import {INCREMENT, DECREMENT, RESET} from "../actions/CounterActions"

const initialState = {
    userName: "Naveed",
    count: 2,
}

export default function counterReducer(state= initialState, actions) {
    switch (actions.type) {
        case INCREMENT:{
            console.log("doIncrement reducer call");
            let count = state.count;
            count = count+1
         return {
             ...state,
             count
         }
        }

        case RESET:{
            console.log("RESET reducer call");
         return {
             ...state,
             count: 0
         }
        }

        case DECREMENT:{
            console.log("DECREMENT reducer call with data catch", actions.payload);

            let count = state.count;
            count = count - 1
         return {
             ...state,
             id: actions.payload.id,
             count
         }
        }
    
        default:
            return state
    }
}
