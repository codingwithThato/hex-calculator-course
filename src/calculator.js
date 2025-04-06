// addition
function addHex(a, b) {
    validate(a, b);
    const result = parseInt(a, 16) + parseInt(b, 16);
    return formatOutput(result);
}

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

module.exports = { addHex };