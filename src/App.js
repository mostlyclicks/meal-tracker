import UserHeader from './components/UserHeader'
import Days from './components/Days'
import React, { useState, useEffect } from 'react'
import { data } from 'autoprefixer'


function App() {

  const [user, setUser] = useState({first_name: "", last_name: ""})
  const [avgDailyCals, setAvgDailyCals] = useState(0)
  const [days, setDays] = useState([])
  
  useEffect(() => {
    // Function will call to get the data
    let data = {
      user: {
        first_name: "Carlos",
        last_name: "Interone"
      },
      average_daily_calories: 2478,
      days: [
        {
          _id: "a1s2d3g4",
          date: "Monday, Nov 1st",
          total_calories: 2784
        },
        {
          _id: "4g3f2d1s",
          date: "Tuesday, Nov 2nd",
          total_calories: 2784
        }
      ]
    }
    
    setUser(data.user)
    setAvgDailyCals(data.average_daily_calories)
    setDays(data.days)
    
  }, [])  
  
  const dayWasPressed = (day_id) => {
    console.log(`${day_id} was pressed`)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <UserHeader user={user} />
      <Days itemClicked={dayWasPressed} avgDailyCals={avgDailyCals} days={days}/>
    </div>
  );
}

export default App;
