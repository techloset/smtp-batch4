import React from 'react'

export default function Input({label = '', placeholder='', onChange}) {
  return (
    <div>
        <label htmlFor="#input"> {label}  </label>
        <input id="input" type="text" placeholder={placeholder} onChange={onChange} />
    </div>
  )
}
