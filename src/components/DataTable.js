import React from 'react'
import {Card, CardBody, Table} from 'reactstrap'

import Analytics from './Analytics';
import TableRow from './TableRow';

const DataTable = ({live, sold, vehicles, refreshVehicles}) => {
  return (
    <Card>
      <CardBody>
        <h2>Vehicle Inventory:</h2>
        <br />
        <Analytics live={live} sold={sold} />
        <br />
        <Table striped bordered>
          <thead>
            <tr>
              <th>S No</th>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.length > 0 ?
              vehicles.map((v, i) => <TableRow index={i} key={v._id} record={v} refreshVehicles={refreshVehicles} />) :
              <tr>
                <td colSpan='10' className="text-center">
                  There are now vehicles available. Please add one.
                </td>
              </tr>
            }
          </tbody>
        </Table>
      </CardBody>
    </Card >
  )
}

export default DataTable
