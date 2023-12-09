/**
 * Checks if a given symbol is a digit.
 *
 * @param {string} symbol - The symbol to check for being a digit.
 * @returns {boolean} - Returns true if the symbol is a digit, otherwise false.
 *
 * @example
 * // Returns true because "5" is a digit.
 * const result1 = isDigit("5");
 *
 * @example
 * // Returns false because "abc" is not a digit.
 * const result2 = isDigit("abc");
 *
 * @example
 * // Returns false because " " (empty space) is not a digit.
 * const result3 = isDigit(" ");
 *
 * @example
 * // Returns true because "9" is a digit.
 * const result4 = isDigit("9");
 */
const isDigit = (symbol) => {
    return !isNaN(symbol) && symbol.trim() !== '';
};
