import React from 'react'

export default function Header(props) {
    console.log("props in header", props);
  return (
    <div id="header">Header:  { props.flag ? props.piValue : 'null'}</div>
  )
}
