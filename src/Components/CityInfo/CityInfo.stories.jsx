import React, { Component } from 'react';
import CityInfo from './CityInfo';
import 'typeface-roboto';

    export default {
        title: "CityInfo",
        component: CityInfo
    }

    export const CityExample = () => (<CityInfo city={"Ciudad del Este"} country={"Paraguay"} ></CityInfo>)