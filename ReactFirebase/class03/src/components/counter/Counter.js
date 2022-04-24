import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../button/Button'

import {doDecrement, doIncrement, doReset} from "../../store/actions/CounterActions"


 const Counter = React.memo(() => {
    
     
    const dispatch = useDispatch()

    const count = useSelector((store) =>store.CounterReducer.count)
    console.log("count", count);

    const decrementHandler = () => {
        console.log("decrementHandler call");
        dispatch(doDecrement({id:"123"}))
    }

    const incrementHandler = () => {
          console.log("incrementHandler call");
        dispatch(doIncrement())
    }
    const resetHandler = () => {
        dispatch(doReset())
    }
    const getStateForCount = () => {
    }

    console.log('count above the return', count);
    return (
        <div style={{ margin: 20 }}>
            <h1>Counter App</h1>
            <button onClick={decrementHandler}>-</button>
            <span style={{ padding: 10 }}>{count}</span>
            <button onClick={incrementHandler}>+</button>
            <button style={{ margin: 12 }} onClick={resetHandler}>Reset</button>
            <Button onPress={getStateForCount} />
        </div>
    )
})

export default Counter