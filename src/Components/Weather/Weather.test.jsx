import React from 'react';
import Weather from "./Weather";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// Arrange
test("Weather render sunny", async () => {
    const { findByRole } = render(<Weather temperature='10' state="sunny"/>);
    
    // Act
    const temp = await findByRole("heading");

    // Assert
    expect(temp).toHaveTextContent('10');
});
