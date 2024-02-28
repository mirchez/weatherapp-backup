import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'

const WeatherDetails = ({humidity, wind}) => {
  return (
    <>
        <Typography>Humedad: {humidity}</Typography>
        <Typography>Viento: {wind}</Typography>
    </>
  )
}

WeatherDetails.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired
}

export default WeatherDetails