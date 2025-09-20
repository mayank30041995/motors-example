import { Box, Paper } from '@mui/material'
import React, { useEffect, useState, useRef } from 'react'

let style = {
  fontWeight: 600,
  border: '1px solid #ebebebff',
  padding: '8px',
  borderRadius: '10px',
  color: '#FFF',
  background: 'red',
  margin: '15px',
}
function RefComponent2() {
  const [count, setCount] = useState(0)
  const prevCount = useRef()

  useEffect(() => {
    if (prevCount.current !== undefined && prevCount.current !== count) {
      console.log('Count changed:', prevCount.current, '→', count)
    }
    prevCount.current = count // prev value ko store karo
  }, [count]) // dependency array → ye tab chalega jab count change hoga

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
        <button
          style={{
            ...style,
            background: '#8fcffaff',
          }}
          onClick={() => setCount(count + 1)}
        >
          Count: {count}
        </button>
        <button style={{ ...style }} onClick={() => setCount(count)}>
          Count: {count}
        </button>
      </Paper>
    </Box>
  )
}

export default RefComponent2
