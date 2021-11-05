import React from 'react'

const DayHeader = (props) => {
  
  return (
    <div className="flex justify-between mb-4 items-baseline">
      <h2 className="w-half font-bold text-2xl">All Days</h2>
      <h2 className="w-half">Average Daily Calories: {props.adc}</h2>
    </div>
  )
}

export default DayHeader
