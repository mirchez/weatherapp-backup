import React, { Component } from 'react'
import WeatherDetails from './WeatherDetails'

export default{
    title: "WeatherDetails",
    Component: WeatherDetails
}

export const weatherDetailsExample = () =>{
    return <WeatherDetails humidity={10} wind={20}/>
}