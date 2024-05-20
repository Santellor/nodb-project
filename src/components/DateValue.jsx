import React from 'react'

const DateValue = ({isEditing, date, setDate}) => {
    
  if (isEditing) {
    return (
        <td>
            <input type="text" value={date} onChange={(e) => setDate(e.target.value)}/>
        </td>
    )
} else {
    return (
        <td>
            {date}
        </td>          
    )
    
}

}

export default DateValue