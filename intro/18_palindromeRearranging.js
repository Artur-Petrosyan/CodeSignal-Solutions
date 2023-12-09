/**
 * Checks if a given string can be rearranged into a palindrome.
 * A string can be rearranged into a palindrome if it contains only letters and no more than one of each letter.
 *
 * @param {string} inputString - The string to check.
 * @returns {boolean} - True if the string can be rearranged into a palindrome, false otherwise.
 *
 * @example
 * palindromeRearranging("aabb"); // true
 * palindromeRearranging("code"); // false
 * palindromeRearranging("aabbc"); // true
 * palindromeRearranging("aabbcde"); // false
 * palindromeRearranging("abca"); // true
 */
const palindromeRearranging = (inputString) => {
    let odd = 0;
    let arr = inputString.split('');
    let el;
    let pos;
    while (arr.length) {
        el = arr.pop();
        pos = arr.indexOf(el);
        if ( pos < 0 ) {
            odd++;
        } else {
            arr.splice(pos, 1);
        }
    }

    return odd < 2;
}