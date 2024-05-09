import React, { useEffect } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import ImageIcon from '@mui/icons-material/Image'
import { DateRangePicker } from 'mui-daterange-picker'
import { socketURL } from '../functions/url'
import axios from 'axios'

const DateRanges = ({ onSubmitForm3 }) => {
  const [open, setOpen] = React.useState(true)
  const [loading, setLoading] = React.useState(false)
  const [booking, setBooking] = React.useState([])
  const [dateRange, setDateRange] = React.useState({})
  const toggle = () => setOpen(!open)

  useEffect(() => {
    if (!open) {
      const url = `${socketURL()}/user`
      setLoading(true)

      axios
        .get(url)
        .then((res) => {
          setBooking(res.data)
          setLoading(false)
        })
        .catch((err) => {
          console.error(err.message)
          setLoading(false)
        })
    }
  }, [open, booking])

  return (
    <div className="container_date">
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {booking &&
          booking.length > 0 &&
          booking.map((book, i) => (
            <ListItem key={i}>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={book.firstName}
                secondary={book.lastName}
              />
            </ListItem>
          ))}
      </List>
      {open ? (
        <div>
          <DateRangePicker
            open={open}
            toggle={toggle}
            onChange={(range) => setDateRange(range)}
          />
          <button
            type="submit"
            className="btn2"
            // disabled={props.isSubmitting}
            onClick={() => {
              onSubmitForm3(dateRange)
              toggle()
            }}
          >
            Submit
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default DateRanges
