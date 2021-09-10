import React from 'react'
import {Button} from 'reactstrap'
import AddModal from './AddModal'

const Navbar = ({toggleSideBar, refreshVehicles}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Button
          size="sm"
          outline
          color="dark"
          className='me-3'
          onClick={() => toggleSideBar(t => !t)}>
          <span className="navbar-toggler-icon"></span>
        </Button>
        <a className="navbar-brand me-auto" href="/">Vehicle Dashboard</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li>
              <AddModal refreshVehicles={refreshVehicles} />
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
