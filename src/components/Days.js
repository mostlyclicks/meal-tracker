import React from 'react'
import Day from './Day'

const Days = () => {
  return (
    <div className="container border-solid border-2 border-black-400 mx-auto flex flex-wrap gap-6 justify-center p-4 bg-gray-50 rounded-2xl">
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
