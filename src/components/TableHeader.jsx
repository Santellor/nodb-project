import React from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr className='date-row'>
          <th></th>
          <th>date</th>
          <th>sleep</th>
          <th>exercise</th>
          <th>meals</th>
          <th colSpan={3}>mood</th>
          <th>notes</th>
      </tr>
  </thead>
  )
}

export default TableHeader