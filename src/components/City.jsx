import React from 'react'
import './City.css'

const City = (props) => {
  return (
    <p>Hello, I am in {props.city}. It is {props.feature}.</p>
  )
}

export default City