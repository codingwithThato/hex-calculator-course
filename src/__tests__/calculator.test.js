// const { addHex } = require('../calculator');

// // tests addition
// test('adds two hex numbers',() => {
//     expect(addHex('A',5)).toBe('F');
// });

// // tests lowercase
// test('handles lowercase hex input', () => {
//     expect(addHex('a', 'b')).toBe('15');
// });

// //tests invalid characters
// test('throws error for invalid characaters', () => {
//     expect(() => addHex('Z9', '1')).toThrow('Invalid hex input');
// });




// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import Calculator from '../components/calculator';

// // tests negative result
// test('adds two hex numbers in the UI', () => {
//     render(<Calculator />);
//     fireEvent.click(screen.getByText('A'));
//     fireEvent.click(screen.getByText('+'));
//     fireEvent.click(screen.getByText('5'));
//     fireEvent.click(screen.getByText('='));
//     expect(screen.getByTestId('display')).toHaveTextContent('F');
// });