import React from 'react'

const Notes = ({setNotes, viewingNote, isEditing, value }) => {
  if (!viewingNote) {
    return ( 
      <>
      </>
    ) 
  } else {
    if (isEditing) {
        return (
          <tr>
          <td className='note'>note:
          </td>
            <td className='note' colSpan={10}>
                <input type="text" value={value} onChange={(e) => setNotes(e.target.value)}/>
            </td>
            </tr>
        )
        
    } else {
        return (
          <tr>
            <td className='note'>
            </td>
            <td className='note' colSpan={10}>
                {value}
            </td>  
          </tr>        
        )
        
    }
  }
}

export default Notes