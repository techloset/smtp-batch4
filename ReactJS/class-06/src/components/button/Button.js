import React from 'react'

export default function Button(props) {
    console.log("props", props);
  return (
    <div style={props.customStyle}>{props.abc || 'Default Button'}</div>
  )
}
