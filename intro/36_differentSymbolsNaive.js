/**
 * Counts the number of different symbols in a given string using a naive approach.
 *
 * @param {string} s - The input string to count different symbols.
 * @returns {number} - Returns the count of different symbols in the string.
 *
 * @example
 * // Returns 3 as there are three different symbols ('a', 'b', 'c') in the string "abcabc".
 * const result1 = differentSymbolsNaive("abcabc");
 *
 * @example
 * // Returns 5 as there are five different symbols ('1', '2', 'a', 'b', 'c') in the string "12abcabc".
 * const result2 = differentSymbolsNaive("12abcabc");
 *
 * @example
 * // Returns 0 as there are no different symbols in an empty string.
 * const result3 = differentSymbolsNaive("");
 *
 * @example
 * // Returns 3 as there are three different symbols ('a', 'b', 'c') in the string "aaabbbccc".
 * const result4 = differentSymbolsNaive("aaabbbccc");
 */
const differentSymbolsNaive = (s) => {
    return s.split('').filter((el, i, self) => i === self.indexOf(el)).length;
};
