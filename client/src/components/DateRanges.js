import React from 'react'
import { DateRangePicker } from 'mui-daterange-picker'

const DateRanges = (props) => {
  const [open, setOpen] = React.useState(true)
  const [dateRange, setDateRange] = React.useState({})

  const toggle = () => setOpen(!open)

  return (
    <div className="container_date">
      <DateRangePicker
        open={open}
        toggle={toggle}
        onChange={(range) => setDateRange(range)}
      />
      <button
        type="submit"
        className="btn btn-primary btn-block mt-4"
        // disabled={props.isSubmitting}
      >
        Next
      </button>
    </div>
  )
}

export default DateRanges
