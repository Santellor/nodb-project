import React from 'react'

const MoodH = ({setMoodH, isEditing, moodH}) => {
    
  if (isEditing) {
      return (
          <td>
            <span>high: </span>
              <input name ='high' type="text" value={moodH} onChange={(e) => setMoodH(e.target.value)}/>
          </td>
      )
  } else {
      return (
          <td>
              <span>high: </span>
                {moodH}
          </td>          
      )
      
  }

}

export default MoodH