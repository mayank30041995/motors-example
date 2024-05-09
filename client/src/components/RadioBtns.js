import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

export default function RadioBtns() {
  return (
    <div className="form">
      <div className="form-group">
        <FormControl className="mt-1">
          <FormLabel id="demo-row-radio-buttons-group-label">
            Select number of wheels
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(e) => console.log('dfsdfnlsdkf', e.target.value)}
          >
            <FormControlLabel value="2" control={<Radio />} label="2 wheels" />
            <FormControlLabel value="4" control={<Radio />} label="4 wheels" />
          </RadioGroup>

          <FormLabel id="demo-row-radio-buttons-group-label">
            List of vehicle
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(e) => console.log('dfsdfnlsdkf', e.target.value)}
          >
            <FormControlLabel value="5" control={<Radio />} label="2 wheels" />
            <FormControlLabel value="6" control={<Radio />} label="4 wheels" />
            <FormControlLabel value="5" control={<Radio />} label="2 wheels" />
            <FormControlLabel value="6" control={<Radio />} label="4 wheels" />
            <FormControlLabel value="5" control={<Radio />} label="2 wheels" />
            <FormControlLabel value="6" control={<Radio />} label="4 wheels" />
          </RadioGroup>

          <button
            type="submit"
            className="btn btn-primary btn-block mt-4"
            // disabled={props.isSubmitting}
          >
            Next
          </button>
        </FormControl>
      </div>
    </div>
  )
}
