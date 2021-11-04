import React from 'react'
import Day from './Day'

const Days = () => {
  return (
    <div className="container border-solid border-2 border-black-400 mx-auto flex flex-wrap gap-4 justify-center p-4">
      <h1 className="w-full">Days Container</h1>
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
