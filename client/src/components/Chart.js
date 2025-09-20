import React from 'react'

export default function Chart({ data }) {
  return (
    <div>
      <span>Chart</span>
      <div>{JSON.stringify(data, null, 2)}</div>
    </div>
  )
}
