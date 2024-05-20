import React from 'react'

const MoodL = ({setMoodL, isEditing, moodL }) => {
    
  if (isEditing) {
      return (
          <td>
            <span>low: </span>
              <input name='low' type="text" value={moodL} onChange={(e) => setMoodL(e.target.value)}/>
          </td>
      )
  } else {
      return (
          <td>
              <span>low: </span>
                {moodL}
          </td>          
      )
      
  }

}

export default MoodL