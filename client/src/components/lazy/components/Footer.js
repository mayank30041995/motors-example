import React from 'react'
import { Box, Typography, Grid, Link, IconButton } from '@mui/material'
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material'

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#1e1e1e', color: '#fff', mt: 8, p: 4 }}>
      <Grid container spacing={4}>
        {/* About */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2">
            We are dedicated to providing top-notch services and solutions. Our
            goal is to deliver excellence and ensure client satisfaction.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link href="/" color="inherit" underline="hover">
              Home
            </Link>
            <Link href="/about" color="inherit" underline="hover">
              About
            </Link>
            <Link href="/contact" color="inherit" underline="hover">
              Contact
            </Link>
            <Link href="/services" color="inherit" underline="hover">
              Services
            </Link>
          </Box>
        </Grid>

        {/* Contact */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body2">
            123 Main Street, City, Country
          </Typography>
          <Typography variant="body2">Email: info@example.com</Typography>
          <Typography variant="body2">Phone: +123 456 7890</Typography>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton href="#" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton href="#" color="inherit">
              <Twitter />
            </IconButton>
            <IconButton href="#" color="inherit">
              <Instagram />
            </IconButton>
            <IconButton href="#" color="inherit">
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  )
}
