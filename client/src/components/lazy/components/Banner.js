import React from 'react'
import { Box, Grid, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom' // Optional, if using routing
import heroImg from '../../../assets/hero-image.jpeg' // Replace with your actual image path

function Banner() {
  return (
    <Box sx={{ flexGrow: 1, padding: 4, backgroundColor: '#f5f5f5' }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Content */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            Welcome to Our Website
          </Typography>
          <Typography variant="body1" paragraph>
            We provide top-notch solutions tailored to your needs. Reach out to
            us for custom web design, development, and more!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/contact" // Or href="#contact" if not using React Router
          >
            Contact Us
          </Button>
        </Grid>

        {/* Right Side - Hero Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={heroImg}
            alt="Hero"
            loading="eager" // <-- ensures image loads immediately
            sx={{
              width: '100%',
              maxHeight: 400,
              objectFit: 'cover',
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Banner
