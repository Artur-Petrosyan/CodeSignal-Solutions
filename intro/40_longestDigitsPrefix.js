/**
 * Finds the longest prefix consisting of consecutive digits in the given input string.
 *
 * @param {string} inputString - The input string to search for the longest digits prefix.
 * @returns {string} - Returns the longest prefix consisting of consecutive digits.
 *
 * @example
 * // Returns "123" as it is the longest prefix consisting of consecutive digits in the string "123abc456".
 * const result1 = longestDigitsPrefix("123abc456");
 *
 * @example
 * // Returns "98765" as it is the longest prefix consisting of consecutive digits in the string "98765xyz321".
 * const result2 = longestDigitsPrefix("98765xyz321");
 *
 * @example
 * // Returns "" because there are no consecutive digits at the beginning of the string "abc123xyz".
 * const result3 = longestDigitsPrefix("abc123xyz");
 *
 * @example
 * // Returns "567" as it is the longest prefix consisting of consecutive digits in the string "5678xyz".
 * const result4 = longestDigitsPrefix("5678xyz");
 */
const longestDigitsPrefix = (inputString) => {
    let endIndex = 0;

    for (let i = 0; i < inputString.length; i++) {
        if (!/\d/.test(inputString[i])) {
            break;
        }
        endIndex = i + 1;
    }

    return inputString.substring(0, endIndex);
};
