import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { WiCloud,
        WiDayCloudy,
        WiDayFog,
        WiDaySunny ,
        WiRain} from 'react-icons/wi';
import { IconContext } from 'react-icons';

const stateByName = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiRain
}

const validValues = [
    "cloud",
    "cloudy",
    "fog",
    "sunny",
    "rain"
]

const renderState = (state) =>{
    const IconState = stateByName[state]
    return <IconState/>
}

const Weather = ({ temperature, state }) => {
    return (
        <div>
            <IconContext.Provider  value={{size:'5em'}}>
                    {renderState(state)}
            </IconContext.Provider>
            <Typography variant='h3' display='inline'>{temperature}</Typography>
        </div>
    );
}

Weather.propTypes = {
    temperature: PropTypes.string.isRequired,
    state: PropTypes.oneOf(validValues).isRequired
}

export default Weather;
