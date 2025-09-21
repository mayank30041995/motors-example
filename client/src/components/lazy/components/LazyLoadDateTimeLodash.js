import React, { useState, useEffect } from 'react'
import { Box, Typography, Button } from '@mui/material'

export default function LazyLoadDateTimeLodash() {
  const [time, setTime] = useState('')
  const [uniqueNumbers, setUniqueNumbers] = useState([])

  // ✅ Load moment automatically
  useEffect(() => {
    let interval

    import('moment').then(({ default: moment }) => {
      const updateTime = () => {
        setTime(moment().format('MMMM Do YYYY, h:mm:ss a'))
      }

      updateTime() // Run immediately
      interval = setInterval(updateTime, 1000) // Update every second
    })

    return () => clearInterval(interval)
  }, [])

  // ✅ Load lodash only when button is clicked
  const handleLoadLodash = async () => {
    const _ = await import('lodash')
    const arr = [1, 2, 2, 3, 4, 4, 5]
    const unique = _.uniq(arr)
    setUniqueNumbers(unique)
  }

  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        ⏰ Current Date & Time
      </Typography>
      <Typography variant="h6" color="primary">
        {time || 'Loading...'}
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleLoadLodash}
        >
          Load Lodash Example
        </Button>
      </Box>

      {uniqueNumbers.length > 0 && (
        <>
          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            🔢 Unique Numbers (via Lodash)
          </Typography>
          <Typography variant="h6" color="secondary">
            {uniqueNumbers.join(', ')}
          </Typography>
        </>
      )}
    </Box>
  )
}
