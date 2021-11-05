import React from 'react'
import Day from './Day'
import DayHeader from './DayHeader'

const Days = (props) => {

  const avgDailyCals = props.avgDailyCals
  console.log(avgDailyCals)

  const days = props.days

  return (
    <div className="container border-solid border-2 border-black-400 mx-auto p-4 pb-8 bg-gray-100 rounded-2xl">
      <DayHeader adc={avgDailyCals}/>
      <div className="justify-around flex gap-2 flex-row flex-wrap mx-auto" >
        
        {days.map((day) => {
          return (
            <Day 
              date={day.date}
              totalCalories={day.total_calories}
              onclick={props.itemClicked}
            />
          )
        })}

      </div>
    </div>
  )
}

export default Days
