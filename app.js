// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromEuroToYen = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInYen = valueInEuro * 156.5;
    // return the yen value
    return valueInYen;
}

const fromEuroToPound = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInPound = valueInEuro * 0.87;
    // return the Pound value
    return valueInPound;
}

// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromEuroToPound, fromEuroToYen }

