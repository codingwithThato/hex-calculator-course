const { addHex } = require('../calculator');

// tests addition
test('adds two hex numbers',() => {
    expect(addHex('A',5)).toBe('F');
});

// tests lowercase
test('handles lowercase hex input', () => {
    expect(addHex('a', 'b')).toBe('15');
});

//tests invalid characters
test('throws error for invalid characaters', () => {
    expect(() => addHex('Z9', '1')).toThrow('Invalid hex input');
});




// // tests for valid input
// test('input is valid hexadecimal', () => {
//     expect(() => addHex('1F', 'A')).not.toThrow(); 
//     expect(() => addHex('G1', 'A')).toThrow('Invalid hex input'); 
// });

