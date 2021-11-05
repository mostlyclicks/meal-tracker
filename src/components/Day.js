import React from 'react'

const Day = (props) => {


  return (
    <div className="flex text-center flex-col p-3 rounded-md shadow-lg bg-white" style={{width:"calc(50% - 1em)"}}>
      <p className="uppercase text-xs text-gray-500">{props.date}</p>
      <h3 className="text-2xl md:text-3xl">{props.totalCalories}</h3>
      <small className="text-gray-500">calories</small>
    </div>
  )
}

export default Day
