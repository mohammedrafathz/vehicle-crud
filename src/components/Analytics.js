import React from 'react';
import {Chart} from 'react-charts'

import Box from '../components/Box'

const Analytics = ({live, sold}) => {
  const data = [
    {
      datums: [{x: "", y: sold, r: undefined}],
      label: 'sold'
    },
    {
      datums: [{x: "", y: live, r: undefined}],
      label: 'live'
    },
    {
      datums: [{x: "", y: 0, r: undefined}],
    }
  ]

  const series = React.useMemo(() => ({
    type: 'bar'
  }), [])

  const axes = React.useMemo(
    () => [
      {primary: true, type: 'ordinal', position: 'bottom'},
      {position: 'left', type: 'linear', stacked: false}
    ],
    []
  )
  return (
    <>
      <Box>
        <Chart data={data} series={series} axes={axes} tooltip />
      </Box>
    </>
  )
}

export default Analytics
