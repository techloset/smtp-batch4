import React from 'react'

const Button =  React.memo((props)=> {
    console.log("props", props);
    const onClickHanlder =()=>{
     props.onPress()
    }
  return (
    <div onClick={onClickHanlder} style={props.customStyle}>{props.abc || 'Default Button'}</div>
  )
})

export default Button