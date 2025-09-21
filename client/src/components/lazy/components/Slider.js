import React from 'react'
import Slider from 'react-slick'
import { Card, CardMedia, CardContent, Typography } from '@mui/material'

// ✅ CSS is mandatory
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const slides = [
  {
    title: 'First Slide',
    img: process.env.PUBLIC_URL + '/assets/room-2.jpeg',
    desc: 'Desc 1',
  },
  {
    title: 'Second Slide',
    img: process.env.PUBLIC_URL + '/assets/room-3.jpeg',
    desc: 'Desc 2',
  },
  {
    title: 'Third Slide',
    img: process.env.PUBLIC_URL + '/assets/room-4.jpeg',
    desc: 'Desc 3',
  },
  {
    title: 'Fourth Slide',
    img: process.env.PUBLIC_URL + '/assets/room-5.jpeg',
    desc: 'Desc 4',
  },
]

export default function RoomSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <div style={{ padding: '2rem', background: '#f0f0f0' }}>
      <Typography variant="h4" gutterBottom>
        Room Slider
      </Typography>
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <Card key={idx} sx={{ maxWidth: 345, margin: 'auto' }}>
            <CardMedia
              component="img"
              src={slide.img}
              alt={slide.title}
              sx={{ height: 200 }}
            />
            <CardContent>
              <Typography variant="h6">{slide.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {slide.desc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </div>
  )
}
