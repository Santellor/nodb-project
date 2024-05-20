import React from 'react'

const Sleep = ({setSleep, isEditing, value }) => {
    
  if (isEditing) {
      return (
          <td>
              <input type="text" value={value} onChange={(e) => setSleep(e.target.value)}/>
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

export default Sleep