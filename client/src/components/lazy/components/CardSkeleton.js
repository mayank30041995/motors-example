import React from 'react'
import { Box, Skeleton, Grid, Typography } from '@mui/material'

export default function CardSkeleton() {
  const placeholders = [1, 2, 3]

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 5,
      }}
    >
      {/* Section Title */}
      <Typography variant="h4" gutterBottom align="center">
        Loading Section...
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {placeholders.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {/* Card title skeleton */}
              {/* <Skeleton variant="text" width="60%" height={30} /> */}

              {/* Card image skeleton */}
              <Box
                sx={{
                  width: '100%',
                  height: 250,
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <Skeleton variant="rectangular" width="100%" height="100%" />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
