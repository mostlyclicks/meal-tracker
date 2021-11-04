import React from 'react'
import Day from './Day'

const Days = () => {
  return (
    <div style={{border:'1px solid black', width: "80%", height: "auto", display:'flex'}}>
      <h1>Days Container</h1>
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
    </div>
  )
}

export default Days
