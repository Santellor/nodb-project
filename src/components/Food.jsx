import React from 'react'

const Food = ({setFood, isEditing, value }) => {
    
  if (isEditing) {
      return (
          <td>
              <input type="text" value={value} onChange={(e) => setFood(e.target.value)}/>
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

export default Food