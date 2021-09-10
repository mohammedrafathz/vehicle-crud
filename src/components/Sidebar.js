import React from 'react'
import {Card, ListGroup, ListGroupItem} from 'reactstrap'

const SideBar = ({isOpen}) => {
  return (
    <>
      <Card className={'sidebar ' + (isOpen ? '' : 'hide')}>
        <ListGroup>
          <ListGroupItem color='secondary'>Inventory</ListGroupItem>
        </ListGroup>
      </Card>
    </>
  )
}

export default SideBar
