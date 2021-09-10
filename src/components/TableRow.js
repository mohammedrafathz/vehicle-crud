import React from 'react'
import UpdatModal from './UpdatModal'

const TableRow = ({index, record, refreshVehicles}) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{record.make ? record.make : "N/A"}</td>
      <td>{record.vehicleModel ? record.vehicleModel : "N/A"}</td>
      <td>{record.year ? record.year : "N/A"}</td>
      <td>{record.price ? record.price : "N/A"}</td>
      <td>{record.status ? "Sold" : "Live"}</td>
      <td><UpdatModal record={record} refreshVehicles={refreshVehicles} /></td>
    </tr>
  )
}

export default TableRow
