import React from 'react'
import './Button.css'

export default function Button(props) {
  return (
    <button className='buttonStyle' style={props.customStyle} onClick={props.onPress}>{props.label}</button>
  )
}
