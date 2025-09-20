import React, { useEffect, useState } from 'react'
// import Chart from './Chart'

function Dashboard() {
  const [Chart, setChart] = useState(null)
  const [data, setData] = useState(null)

  // API call on mount
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/jherr/pokemon/main/index.json')
      .then((res) => res.json())
      .then(async (result) => {
        // new Promise((resolve) =>
        //   setTimeout(() => {
        //     resolve(setData(result))
        //   }, [4000])
        // )
        // Chart component ko tabhi load karo jab data aa jaye
        setData(result)
        const { default: ChartComponent } = await import('./Chart')
        setChart(() => ChartComponent)
      })
  }, [])

  if (!data || !Chart) {
    return <p>Loading dashboard...</p>
  }

  return (
    <div>
      <h2>Analytics</h2>
      <Chart data={data} />
    </div>
  )
}

export default Dashboard
