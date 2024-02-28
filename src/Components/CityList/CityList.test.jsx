//Arrange, Act, Assert
import React from 'react'
import { fireEvent, render } from '@testing-library/react';
import CityList from './CityList';

const cities = [
    {city: "Asuncion", country:"Paraguay"},
    {city: "Lima", country:"Peru"},
    {city: "Santiago", country:"Chile"},
    {city: "Washington", country:"USA"}
]

test("CityList renders", async () =>{
    const {findAllByRole} = render(<CityList cities={cities}/>)

    const items = await findAllByRole("listitem")

    expect(items).toHaveLength(4)
});

test("CityList onclick on item", async () =>{
    // Debemos similar un click con funcion "mock" imiata a la funcion real
    const fnClickOnItem = jest.fn()

    const {findAllByRole} = render(<CityList cities={cities} onClickCity={fnClickOnItem}/>)

    const items = await findAllByRole("listitem")

    fireEvent.click(items[0])

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
    
})