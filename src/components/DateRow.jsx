import React from 'react'
import DateValue from './DateValue'
import EditButtons from './EditButtons'
import Exercise from './Exercise'
import Food from './Food'
import MoodH from './MoodH'
import MoodL from './MoodL'
import Notes from './Notes'
import Sleep from './Sleep'
import { useState } from 'react'

const DateRow = ({initIsEditing, 
                  initViewingNote,
                  initDate, 
                  initSleep, 
                  initExer, 
                  initFood, 
                  initMoodH, 
                  initMoodL, 
                  initNotes, 
                  removeDate,
                  editDate,
                  id}) => {

  // Establish states for my data
  const [isEditing, setIsEditing] = useState(initIsEditing)
  const [date, setDate] = useState(initDate)
  const [sleep, setSleep] = useState(initSleep)
  const [exer, setExer] = useState(initExer)
  const [food, setFood] = useState(initFood)
  const [moodH, setMoodH] = useState(initMoodH)
  const [moodL, setMoodL] = useState(initMoodL)
  const [notes, setNotes] = useState(initNotes)
  const [viewingNote, setViewingNote] = useState(initViewingNote)

  let avg = (+moodH + +moodL)/2
  console.log (moodH, moodL, avg)


  // edit function
  const edit = () => {
    setIsEditing(!isEditing)
    !isEditing ? setViewingNote(true) : setViewingNote(false)
    

    const editedDate = {
      id: id,
      sleep: sleep ,
      exer: exer, 
      food: food, 
      moodH: moodH, 
      moodL: moodL, 
      notes: notes,
      date: date,
    }

    isEditing ? editDate(id, editedDate) : null
  }


  // function to toggle the visibility of notes
  const showNotes = () => {
    setViewingNote(!viewingNote)
  }

  return (
  <>
    <tr className='buffer-row'>

    </tr>
    <tr className='date-row'>
      < EditButtons isEditing={isEditing} removeDate={removeDate} edit={edit} />
      < DateValue isEditing={isEditing} date={date} setDate={setDate}/>
      < Sleep isEditing={isEditing} value={sleep} setSleep={setSleep}/>
      < Exercise isEditing={isEditing} value ={exer} setExer={setExer}/>
      < Food isEditing={isEditing} value ={food} setFood={setFood}/>
      < MoodH isEditing={isEditing} moodH ={moodH} setMoodH={setMoodH} moodL ={moodL} setMoodL={setMoodL} />
      < MoodL isEditing={isEditing} moodH ={moodH} setMoodH={setMoodH} moodL ={moodL} setMoodL={setMoodL} />
      <td> avg: {avg} </td>
      <td> <button onClick={showNotes}>View Notes</button>
      </td>
    </tr>
          <Notes isEditing={isEditing} viewingNote={viewingNote} value ={notes} setNotes={setNotes} />
    </>
  )
}
export default DateRow