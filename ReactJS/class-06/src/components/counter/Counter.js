import {useState} from 'react'



export default function Counter() {
    const [count, setCount] = useState(0)
    
    const incrementHandler = () =>{
        setCount(count+1)
    }

    const decrementHandler = ()=>{
        setCount(count-1)
    }
    
    const resetHandler = () => {
        setCount(0)
    }

    console.log('count above the return', count);
  return (
    <div style={{margin:20}}>
        <h1>Counter App</h1>
          <button onClick={decrementHandler}>-</button>
          <span style={{padding:10}}>{count}</span>
          <button onClick={incrementHandler}>+</button>
          <button style={{margin:12}} onClick={resetHandler}>Reset</button>
    </div>
  )
}
