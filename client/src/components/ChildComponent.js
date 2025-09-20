import React from 'react'

const ChildComponent = ({ data, onClick }) => {
  console.log('ChildComponent rendered')
  return (
    <>
      <div>{data}</div>
      <button onClick={onClick}>Click Me</button>
    </>
  )
}

export default React.memo(ChildComponent)
