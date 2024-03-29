import React,{ useState } from 'react'
import Button from '../button/Button'



 const Counter = React.memo(() => {
    const [count, setCount] = useState(0)
    const [rows, setRows] = useState([])

    const incrementHandler = () => {
        setRows([...rows, { name: 'naveed', id: 234 }])
        setCount(count + 1)
    }

    const decrementHandler = () => {
        setCount(count - 1)
    }

    const resetHandler = () => {
        setCount(0)
    }

    const getStateForCount = () => {
        console.log('child rows', rows);
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