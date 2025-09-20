import { Box, Paper } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

function RefComponent() {
  const inputEL = useRef(0)

  const onButtonClick = () => {
    // new Promise((resolve) =>
    //   setTimeout(() => {
    //     console.log('timer hits.....')
    //     resolve()
    //   }, 3000)
    // )

    inputEL.current.value = parseInt(inputEL.current.value || 0) + 1
    inputEL.current.focus()
    console.log('inputEl', inputEL.current.value)
  }

  useEffect(() => {
    console.log('inputEL.current.value', inputEL.current.value)
  }, [inputEL.current.value])

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 750,
          height: 500,
        },
      }}
    >
      <Paper elevation={12}>
        <h2>RefComponent {JSON.stringify(inputEL.current)}</h2>

        <input ref={inputEL} type="text" />

        <button onClick={onButtonClick}>Focus Input</button>
      </Paper>
    </Box>
  )
}

export default RefComponent
