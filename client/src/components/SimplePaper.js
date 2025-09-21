import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import ChildComponent from './ChildComponent'
import { TextField, Typography } from '@mui/material'

export default function SimplePaper({ children }) {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState('') // immediate input value
  const [debouncedNumber, setDebouncedNumber] = useState(null) // debounced value
  const [data, setData] = useState('hello')
  const [theme, setTheme] = useState('light')

  const debounceRef = useRef(null)

  // Expensive calculation runs only on debouncedNumber
  const expensiveCalculation = (num) => {
    console.log('Calculating Memo Results...')
    let result = num
    for (let i = 0; i < 100000000; i++) {
      result += 1
    }
    return result
  }

  const memoizedValue = useMemo(() => {
    if (debouncedNumber !== null) {
      return expensiveCalculation(debouncedNumber)
    }
    return 0
  }, [debouncedNumber])

  // Callback click handler
  const callbackHandleClick = useCallback(() => {
    console.log('Button Clicked Callback')
    setCount((prevCount) => prevCount + 1)
  }, [])

  // Lazy-load lodash debounce
  useEffect(() => {
    import('lodash/debounce').then(({ default: debounce }) => {
      debounceRef.current = debounce((value) => {
        setDebouncedNumber(value)
      }, 500) // 500ms delay
    })
  }, [])

  // Input handler
  const handleChange = (e) => {
    const value = e.target.value
    setNumber(value) // update input immediately

    if (debounceRef.current) {
      const parsed = parseInt(value)
      debounceRef.current(!isNaN(parsed) ? parsed : 0)
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 750,
          height: 1200,
        },
      }}
    >
      <Paper elevation={12} sx={{ p: 3 }}>
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

        <Typography variant="h5" gutterBottom>
          Smooth Input with Debounce & Lazy Import
        </Typography>

        <TextField
          label="Enter Number"
          type="number"
          value={number}
          onChange={handleChange}
          fullWidth
        />

        <p>Debounced Value: {debouncedNumber ?? 'Waiting for Typing...'}</p>

        <br />
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>

        <p>Count: {count}</p>
        <div>Result: {memoizedValue}</div>
        <div>Theme: {theme}</div>

        <ChildComponent data={data} onClick={callbackHandleClick} />

        {children}
      </Paper>
    </Box>
  )
}

/*

1️⃣ Smooth typing

The raw input state (number) updates immediately, so the user sees their typing instantly.

The expensive calculation runs only on the debounced value (debouncedNumber) → prevents blocking the main thread.

2️⃣ Efficient computation

useMemo ensures the heavy calculation is memoized per debounced number.

No unnecessary recalculations while typing fast.

3️⃣ Optimized bundle

lodash/debounce is lazy-loaded dynamically, so your main bundle stays small.

The browser only downloads debounce when the component mounts → saves initial load time.

4️⃣ Modern React best practices

Uses useRef for the debounce function to avoid recreating it on every render.

useCallback is used for click handlers to prevent unnecessary re-renders of child components.

⚡ Optional further optimizations

Web Worker for heavy calculations

For extremely heavy loops, you can offload the calculation to a Web Worker so even debounced runs don’t block the UI.

React.lazy for the component itself

If SimplePaper is not immediately visible, you can lazy-load it with React.lazy + Suspense.

*/
