import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import CityInfo from "../CityInfo";
import Weather from "../Weather";

//li: tiene role "listitem" para usarse en el test


const renderCityAndCountry = eventOnClickCity => cityAndCountry =>{
    const {city, country} = cityAndCountry
    return (
        <li key={`${city}-${country}`} onClick={eventOnClickCity}>
            <Grid container
                justify="center"
                alignItems="center"
            >
                <Grid item    
                    md={8}
                    xs={12}>
                        <CityInfo city={city} country={country}/>
                </Grid>
                <Grid item
                    md={4}
                    xs={12}>
                        <Weather temperature={10} state='cloud'/>
                </Grid>
            </Grid>
           
        </li>
    )
}
//cities es array que en contiene en cada poscion tiene ciudad y pais
const CityList = ({cities, onClickCity}) => {
  return (
    <ul>
        {
            cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry)) 
        }
    </ul>
  )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            onClickCity: PropTypes.func.isRequired
        })
    ).isRequired,
}

export default CityList