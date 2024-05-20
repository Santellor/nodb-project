import React from 'react'
const TableFooter = ({addDate}) => {
  return (
    <tfoot>
        <tr>
        </tr>
        <tr>
            <td></td>
            <td colSpan={10}>
        <button onClick={addDate}>add your stats today</button>
        </td>
        </tr>
    </tfoot>
  )
}

export default TableFooter