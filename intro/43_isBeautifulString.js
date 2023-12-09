/**
 * Checks if a string is a beautiful string.
 * A beautiful string is a string where the frequency of each letter is less than or equal to
 * the frequency of the previous letter in the alphabet.
 *
 * @param {string} inputString - The input string to check for beauty.
 * @returns {boolean} - Returns true if the string is beautiful, otherwise false.
 *
 * @example
 * // Returns true because the string "bbbaa" is beautiful as the frequency of 'b' is less than or equal to 'a'.
 * const result1 = isBeautifulString("bbbaa");
 *
 * @example
 * // Returns false because the string "abc" is not beautiful as the frequency of 'b' is greater than 'a'.
 * const result2 = isBeautifulString("abc");
 *
 * @example
 * // Returns true because the string "aaabb" is beautiful as the frequency of 'b' is less than or equal to 'a'.
 * const result3 = isBeautifulString("aaabb");
 *
 * @example
 * // Returns false because the string "xyz" is not beautiful as the frequency of 'y' is greater than 'x'.
 * const result4 = isBeautifulString("xyz");
 */
const isBeautifulString = (inputString) => {
    let str = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 1; i < str.length; i++) {
        if (inputString.split(str[i]).length - 1 > inputString.split(str[i - 1]).length - 1) {
            return false;
        }
    }

    return true;
};
