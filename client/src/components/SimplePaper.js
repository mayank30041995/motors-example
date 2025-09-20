import * as React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { useState } from 'react'
import ChildComponent from './ChildComponent'
import { useMemo } from 'react'
import { useCallback } from 'react'
import Dashboard from './Dashboard'

export default function SimplePaper({ children }) {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0)
  const [data, setData] = useState('hello')
  const [theme, setTheme] = useState('light')

  const expensiveCalculation = (num) => {
    console.log('Calculating...')
    for (let i = 0; i < 100000000; i++) {
      num += 1
    }
    return num
  }

  const memoizedValue = useMemo(() => {
    if (number) {
      return expensiveCalculation(number)
    }
  }, [number])

  const handleClick = () => {
    console.log('Button Clicked')
    setCount(count + 1)
  }

  const memorizedHandleClick = useCallback(() => {
    console.log('Button Clicked Memorized')
    setCount((prevCount) => prevCount + 1)
  }, [])

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
        <h1>memo, useMemo, useCallback & useRef</h1>
        <button
          onClick={() => {
            if (count < 10) {
              setCount(count + 1)
            } else {
              setData('hii')
            }
          }}
        >
          Count: {count}
        </button>

        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <br />
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>
        <p>{count}</p>
        <div>Result: {memoizedValue}</div>
        <div>Theme: {theme}</div>
        <ChildComponent data={data} onClick={memorizedHandleClick} />
        {/* <Dashboard /> */}
        {children}
      </Paper>
    </Box>
  )
}
