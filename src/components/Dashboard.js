import React, {useEffect, useState} from 'react'

import Navbar from './Navbar'
import Sidebar from './Sidebar'
import DataTable from './DataTable'
import backendApi from "../api/backend";

const Dashboard = () => {
  const [sideNav, setSideNav] = useState(false)
  const [vehicles, setVehicles] = useState([]);
  const [live, setLive] = useState(0);
  const [sold, setSold] = useState(0);

  const fetchVehicles = async () => {
    try {
      const {data} = await backendApi.get('/vehicle');

      const l = data.filter(d => !d.status)

      setLive(l.length);
      setSold(data.length - l.length);
      setVehicles(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, [])

  return (
    <>
      <Navbar toggleSideBar={setSideNav} refreshVehicles={fetchVehicles} />
      <Sidebar isOpen={sideNav} />
      <div className={'wrapper ' + (!sideNav ? '' : 'content')}>
        <DataTable vehicles={vehicles} refreshVehicles={fetchVehicles} live={live} sold={sold} />
      </div>
    </>
  )
}

export default Dashboard
