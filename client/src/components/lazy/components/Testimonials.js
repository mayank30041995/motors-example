import React from 'react'
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from '@mui/material'

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, Company A',
    img: process.env.PUBLIC_URL + '/assets/room-2.jpeg',
    message: 'This is an amazing service! Highly recommend it.',
  },
  {
    name: 'Jane Smith',
    role: 'CTO, Company B',
    img: process.env.PUBLIC_URL + '/assets/room-3.jpeg',
    message: 'Fantastic experience, the team was very professional.',
  },
  {
    name: 'Mike Johnson',
    role: 'Manager, Company C',
    img: process.env.PUBLIC_URL + '/assets/room-4.jpeg',
    message: 'I love the quality and attention to detail.',
  },
  {
    name: 'Emily Davis',
    role: 'Designer, Company D',
    img: process.env.PUBLIC_URL + '/assets/room-5.jpeg',
    message: 'Absolutely satisfied with the results!',
  },
]

export default function Testimonials() {
  return (
    <Box sx={{ padding: '2rem', background: '#f5f5f5' }}>
      <Typography variant="h4" gutterBottom align="center">
        Testimonials
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial, idx) => (
          <Grid item key={idx} xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                image={testimonial.img}
                alt={testimonial.name}
                sx={{ height: 200 }}
              />
              <CardContent>
                <Typography variant="h6">{testimonial.name}</Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {testimonial.role}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  "{testimonial.message}"
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
