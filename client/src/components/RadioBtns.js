import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import useFetch from '../functions/useFetch'
import { socketURL } from '../functions/url'
import { Skeleton } from '@mui/material'
import axios from 'axios'

export default function RadioBtns() {
  const [vehicle, setVehicle] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  const { data, error } = useFetch(`${socketURL()}/wheel`)

  const wheels = React.useMemo(() => {
    return (
      data &&
      data.map((val) => ({
        id: val.id,
        name: val.name,
        numberOfWheels: val.numberOfWheels,
      }))
    )
  }, [data])

  const handleSelect = (e) => {
    const value = e.target.value
    const url = `${socketURL()}/category?wheelId=${value}`
    setLoading(true)
    axios
      .get(url)
      .then((res) => {
        setVehicle(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err.message)
        setLoading(false)
      })
  }

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
            onChange={(e) => handleSelect(e)}
          >
            {wheels ? (
              <div>
                {wheels.map((wheel) => (
                  <FormControlLabel
                    key={wheel.id}
                    value={`${wheel.id}`}
                    control={<Radio />}
                    label={`${wheel.numberOfWheels} wheels`}
                  />
                ))}
              </div>
            ) : (
              <Skeleton variant="rectangular" width={210} height={40} />
            )}
          </RadioGroup>

          <FormLabel id="demo-row-radio-buttons-group-label">
            List of vehicles
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            // onChange={(e) => handleSelect(e)}
          >
            {!loading ? (
              <div>
                {vehicle.map((item) => (
                  <FormControlLabel
                    key={item.id}
                    value={`${item.name}`}
                    control={<Radio />}
                    label={`${item.name}`}
                  />
                ))}
              </div>
            ) : (
              <Skeleton variant="rectangular" width={380} height={40} />
            )}
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
