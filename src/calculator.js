// validate function
function validate(a, b) {
    const hexRegex = /^[0-9A-Fa-f]{1,2}$/;
    if (!hexRegex.test(a) || !hexRegex.test(b)) {
        throw new Error('Invalid hex input');
    }
  }
  
  //formatOutput
  function formatOutput(result) {
    if(result < 0) {
        throw new Error('Negative result not allowed.');
    }
    if(!Number.isInteger(result)){
        throw new Error('Decimal result not allowed.');
    }
  
    const hex = result.toString(16).toUpperCase();
    if(hex.length > 4) {
        throw new Error('Output exceeds 4 hex digits');
    }
    return hex;
  }
  
  // addition
  function addHex(a, b) {
    validate(a, b);
    const result = parseInt(a, 16) + parseInt(b, 16);
    return formatOutput(result);
  }
  
  // subtraction
  function subtractHex(a, b) {
  validate(a, b);
  const result = parseInt(a, 16) - parseInt(b, 16);
  return formatOutput(result);
  }
  
  // multiplication
  function multiplyHex(a, b) {
  validate(a, b);
  const result = parseInt(a, 16) * parseInt(b, 16);
  return formatOutput(result);
  }
  
  // division
  function divideHex(a, b) {
  validate(a, b);
  const divisor = parseInt(b, 16);
  if (divisor === 0) throw new Error('Cannot divide by zero');
  const result = parseInt(a, 16) / divisor;
  return formatOutput(result);
  }
  
  module.exports = {
  addHex,
  subtractHex,
  multiplyHex,
  divideHex
  };
  