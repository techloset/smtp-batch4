import React from 'react'
import './Header.css'
import { styles } from './HeaderStyle';

export default function Header(props) {
    console.log("props in header", props);
  return (
    <div id="header" style={{...styles.header, fontSize:23}} >Header:  { props.flag ? props.piValue : 'null'}</div>

    // <div id="header" style={styles[props.customClass]} >Header:  { props.flag ? props.piValue : 'null'}</div>
    // <div id="header" className={props.customClass} style={styles.header} >Header:  { props.flag ? props.piValue : 'null'}</div>
  )
}
