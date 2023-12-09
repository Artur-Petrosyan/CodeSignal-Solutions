/**
 * Checks if a given string is a palindrome.
 *
 * @param {string} inputString - The string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example
 * const isPalindrome = checkPalindrome('racecar');
 * console.log(isPalindrome); // Output: true
 *
 * @example
 * const isPalindrome = checkPalindrome('hello');
 * console.log(isPalindrome); // Output: false
 *
 * @example
 * const isPalindrome = checkPalindrome('A man, a plan, a canal: Panama');
 * console.log(isPalindrome); // Output: true
 */
const checkPalindrome = inputString => {
    const str = inputString.split('').reverse().join('')
    return str === inputString;
};