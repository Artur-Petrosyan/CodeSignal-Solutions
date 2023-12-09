/**
 * Sums up all the numeric values found in a given input string.
 *
 * @param {string} inputString - The input string containing numeric values.
 * @returns {number} - Returns the sum of all numeric values in the input string.
 *
 * @example
 * // Returns 25 because "10" + "5" + "8" + "2" equals 25.
 * const result1 = sumUpNumbers("There are 10 apples, 5 oranges, and 8 bananas. Also, 2 kiwis.");
 *
 * @example
 * // Returns 0 because the input string does not contain any numeric values.
 * const result2 = sumUpNumbers("No numbers here!");
 *
 * @example
 * // Returns 42 because "20" + "15" + "5" + "2" equals 42.
 * const result3 = sumUpNumbers("The answer is 20 + 15 + 5 + 2.");
 *
 * @example
 * // Returns 18 because "12" + "3" + "1" + "2" equals 18.
 * const result4 = sumUpNumbers("12 apples, 3 oranges, 1 banana, and 2 kiwis make a total of 18 fruits.");
 */
const sumUpNumbers = (inputString) => {
    const regex = /\d+/g;
    let arr = inputString.match(regex);

    if (arr) {
        return arr.map(Number).reduce((a, b) => a + b, 0);
    }

    return 0;
};
