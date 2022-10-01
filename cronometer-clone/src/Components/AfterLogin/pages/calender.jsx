import React, { useState } from 'react'
import { Calendar } from 'small-google-calendar'

const Calender = () => {
    const [date, setDate] = useState(new Date())
  return (
      <div>
        <Calendar onChange={(value) => setDate(value)} />
        <input value={`${date}`} />
      </div>
  )
}

export default Calender


 