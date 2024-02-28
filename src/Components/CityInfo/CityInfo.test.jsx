//AAA: Arrange Act Asert
import React from 'react'
import { render } from "@testing-library/react"; 
import CityInfo from "./CityInfo";


test("CityInfo render", async () => {

        const city = "ciudad del este";
        const country = 'Paraguay';

        const {findAllByRole} = render(<CityInfo city={city} country={country}/>)

        const cityAndCountryComponent = await findAllByRole('heading');

        expect(cityAndCountryComponent[0]).toHaveTextContent(city);

        expect(cityAndCountryComponent[1]).toHaveTextContent(country);

    })