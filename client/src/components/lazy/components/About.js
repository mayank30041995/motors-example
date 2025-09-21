import React from 'react'
import { Box, Typography, Grid, CardMedia } from '@mui/material'

export default function About() {
  return (
    <Box sx={{ padding: '4rem 2rem', backgroundColor: '#f5f5f5' }}>
      <Grid container spacing={4} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.8 }}>
            Welcome to our company! We are dedicated to providing the best
            services and solutions to our clients. Our team of professionals
            works tirelessly to ensure customer satisfaction and innovative
            solutions.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.8 }}>
            With years of experience in the industry, we combine expertise,
            creativity, and technology to deliver outstanding results. Join us
            on our journey to make a difference!
          </Typography>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image={process.env.PUBLIC_URL + '/assets/room-2.jpeg'} // Example image
            alt="About Us"
            sx={{ width: '100%', borderRadius: 2 }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
