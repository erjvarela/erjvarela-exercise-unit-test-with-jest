// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 149.33 yens", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yens = fromDollarToYen(3.5);

    // If 1 dollar is 149.33 yens, then 3.5 dollar should be (3.5 * 149.33)
    const expected = 3.5 * 149.33;
    
    // This is the comparison for the unit test
     expect(yens).toBe(expected); // 1 dollar is 149.33 dollars, then 3.5 dollar should be = (3.5 * 149.33)
})

test("One yen should be 0.0052 Pounds", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const pounds = fromYenToPound(3.5);

    // If 1 yen is 0.0052 Pounds, then 3.5 yen should be (3.5 * 0.0052)
    const expected = 3.5 * 0.0052; 
    
    // This is the comparison for the unit test
     expect(pounds).toBe(expected); // 1 yen is 0.0052 pounds, then 3.5 yens should be = (3.5 * 0.87)
})