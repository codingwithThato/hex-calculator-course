import React, { useState } from 'react';
// import { addHex, subtractHex, multiplyHex, divideHex } from '../calculator';

export default function Calculator() {
// const [input, setInput] = useState('');
// const [operator, setOperator] = useState(null);
// const [firstValue, setFirstValue] = useState('');
// const [display, setDisplay] = useState('0');

// const handleButtonClick = (value) => {
//   if (/^[0-9A-F]$/i.test(value)) {
//     setInput((prev) => prev + value.toUpperCase());
//     setDisplay((prev) =>
//       prev === '0' || ['+', '-', '*', '/'].includes(prev)
//         ? value.toUpperCase()
//         : prev + value.toUpperCase()
//     );
//   } else if (['+', '-', '*', '/'].includes(value)) {
//     setFirstValue(input);
//     setOperator(value);
//     setInput('');
//     setDisplay(value);
//   } else if (value === '=') {
//     if (!firstValue || !input || !operator) return;
//     try {
//       let result;
//       if (operator === '+') result = addHex(firstValue, input);
//       if (operator === '-') result = subtractHex(firstValue, input);
//       if (operator === '*') result = multiplyHex(firstValue, input);
//       if (operator === '/') result = divideHex(firstValue, input);
//       setDisplay(result);
//     } catch (e) {
//       setDisplay(e.message);
//     }
//     setInput('');
//     setOperator(null);
//     setFirstValue('');
//   } else if (value === 'C') {
//     setInput('');
//     setOperator(null);
//     setFirstValue('');
//     setDisplay('0');
//   }
// };

// const keys = [
//   'A', 'B', 'C', 'D', 'E', 'F',
//   '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
//   '+', '-', '*', '/', '=', 'C'
// ];

return (
  <div className="min-h-screen flex flex-col items-center justify-center 
  bg-gradient-to-br from-green-100 to-green-200 p-4">
    {/* <div className="w-full max-w-sm rounded-xl shadow-xl bg-white p-6 
    transition-all duration-300 ease-in-out scale-100">
      <div
        className="text-3xl font-mono text-right mb-4 py-3 px-4 rounded-md 
        bg-gray-100 text-gray-800 animate-fade-in"
        data-testid="display"
      >
        {display}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {keys.map((key) => (
          <button
            key={key}
            onClick={() => handleButtonClick(key)}
            className="bg-green-300 hover:bg-green-400 active:bg-green-500 
            text-white text-lg font-bold rounded-md py-4 transition duration-200 
            ease-in-out transform hover:scale-105 shadow"
          >
            {key}
          </button>
        ))}
      </div>
    </div> */}
    <h1>HELLO WORLD</h1>
  </div>
);
}
