import React from 'react'

export default function List({firstName}) {
  return (
    <div>
        <ul>
            <li>Name: {firstName}</li>
        </ul>
    </div>
  )
}
