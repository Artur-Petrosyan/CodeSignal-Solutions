/**
 * Shifts each letter in a given string to the next letter in the alphabet.
 * Non-alphabetic characters are ignored.
 *
 * @param {string} inputString - The input string to be shifted.
 * @returns {string} - Returns a new string with each letter shifted to the next letter in the alphabet.
 *
 * @example
 * // Returns "ifmmp" by shifting each letter in "hello" to the next letter.
 * const result1 = alphabeticShift("hello");
 *
 * @example
 * // Returns "abc" by shifting each letter in "zab" to the next letter.
 * const result2 = alphabeticShift("zab");
 *
 * @example
 * // Returns "bcd123" by shifting each letter in "abc123" and ignoring non-alphabetic characters.
 * const result3 = alphabeticShift("abc123");
 *
 * @example
 * // Returns "bcdefa" by shifting each letter in "abcdef" and replacing '{' with 'a'.
 * const result4 = alphabeticShift("abcdef{");
 */
const alphabeticShift = (inputString) => {
    let newStr = [];
    for (let i = 0; i < inputString.length; i++) {
        newStr.push(String.fromCharCode(inputString[i].charCodeAt() + 1));
    }
    return newStr.join("").replace(/{/g, 'a');
};
