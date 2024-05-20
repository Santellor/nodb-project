import React from 'react'

const Exercise = ({setExer, isEditing, value }) => {
    
  if (isEditing) {
      return (
          <td>
              <input type="text" value={value} onChange={(e) => setExer(e.target.value)}/>
          </td>
      )
  } else {
      return (
          <td>
              {value}
          </td>          
      )
      
  }

}

export default Exercise