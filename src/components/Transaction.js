import React from 'react'
import "./Transaction.css";
export default function Transaction(props) {
  return (
    <div id='transaction'>
        <p>{props.hash}</p>
        <p><strong>{props.block}</strong></p>
        <p>{props.from}</p>
        <p>{props.to}</p>
        <p>{props.value === 0 ? '0' : (props.value / 10**18)}</p>
        <p>{props.timestamp}</p>
    </div>
  )
}
