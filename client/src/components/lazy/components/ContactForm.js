import React, { useState } from 'react'
import { Box, TextField, Button, Typography } from '@mui/material'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder: Replace with API call or form handling logic
    console.log('Form submitted:', formData)
    alert('Form submitted! Check console for data.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <Box
      sx={{
        maxWidth: 500,
        mx: 'auto',
        mt: 5,
        p: 4,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: '#fafafa',
      }}
    >
      <Typography variant="h4" gutterBottom align="center">
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          multiline
          rows={4}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          fullWidth
        >
          Send Message
        </Button>
      </form>
    </Box>
  )
}
