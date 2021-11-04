import React from 'react'
import Day from './Day'

const Days = () => {
  return (
    <div className="container border-solid border-2 border-black-400 mx-auto    p-4 bg-gray-100 rounded-2xl">
      <div className="flex justify-between mb-4 items-baseline">
        <h2 className="w-half font-bold text-2xl">All Days</h2>
        <h2 className="w-half">Average Daily Calories: 2478</h2>
      </div>
      <div className="justify-center md:justify-start w-auto flex flex-wrap gap-6 md:gap-7 mx-auto">
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
      </div>
    </div>
  )
}

export default Days
