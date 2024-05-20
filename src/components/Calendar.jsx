import React from 'react'
import DateRow from './DateRow.jsx'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import TableHeader from './TableHeader'
import TableFooter from './TableFooter.jsx'
import Header from './Header'


const Calendar = () => {

  // establish states for date data
  const [calendarData, setCalendarData] = useState([])

  // update the date data based off what is stored on the server
  useEffect(() => {
    console.log(`useEffect`)
    axios.get('/calendar')
        .then((res) => {
            console.log(res.data)
         setCalendarData(res.data)
        }) 
}, [])

  // add a new date entry
  const addDate = async () => {

    const newDate =  {
      isEditing: true, 
      viewingNote: true, 
      sleep: 6, 
      exer: 30, 
      food: 3, 
      moodH:8, 
      moodL:3, 
      notes: "new note"
    }

    const res = await axios.post('/calendar/new-date', newDate)
    console.log(res.data)
    setCalendarData([...calendarData, res.data])
  }

  // remove a date entry
  const removeDate = async (id) => {

    const {data} = await axios.delete(`/calendar/remove-date/${id}`)
      console.log(id, data)
      setCalendarData(data)
  }

  // edit a date entry
  const editDate = async (id, body) => {

    const {data} = await axios.put(`/calendar/edit-date/${id}`, body)
      console.log(id, data)
      setCalendarData(data)
  }


  // create a dateRow for every object in dateData
  const allDates = calendarData.map((element) =>
    < DateRow 
      initIsEditing={element.isEditing? true: false}
      initViewingNote={element.viewingNote}
      // initViewingNote={element.viewingNote? element.viewingNote: false}
      initDate={element.date}
      initSleep={element.sleep}
      initExer={element.exer}
      initFood={element.food}
      initMoodH={element.moodH}
      initMoodL={element.moodL}
      initNotes={element.notes}
      removeDate={() => removeDate(element.id)}
      editDate={editDate}
      key={element.id}
      id={element.id} 
    />
  )


  return (
    <>
    < Header />
      <table>
          <TableHeader/>
        <tbody>
          {allDates}
        </tbody>
          <TableFooter addDate={addDate}/>
      </table>
      
    </>
  )
}

export default Calendar