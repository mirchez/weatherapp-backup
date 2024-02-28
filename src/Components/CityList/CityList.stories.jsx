    import React, { Component } from 'react';
    import CityList from './CityList';
    import {action} from '@storybook/addon-actions'

    export default {
        title: "CityList",
        component: CityList
    }

    const cities = [
        {city: "Asuncion", country:"Paraguay"},
        {city: "Lima", country:"Peru"},
        {city: "Santiago", country:"Chile"},
        {city: "Washington", country:"USA"}
    ]

    export const CityListExample = () => <CityList cities={cities} onClickCity={action("click en ciudad")}/>