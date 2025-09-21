import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom' // If using react-router

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Website
          </Typography>

          {/* Navigation Buttons */}
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            ContactForm
          </Button>
          <Button color="inherit" component={Link} to="/footer">
            Footer
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
