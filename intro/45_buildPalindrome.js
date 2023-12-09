/**
 * Builds a palindrome by adding characters to the input string.
 *
 * @param {string} st - The input string to build a palindrome from.
 * @returns {string} - Returns the palindrome built from the input string.
 *
 * @example
 * // Returns "abba" because it is already a palindrome.
 * const result1 = buildPalindrome("abba");
 *
 * @example
 * // Returns "abcdcba" by adding "dcba" to the input string "abcd".
 * const result2 = buildPalindrome("abcd");
 *
 * @example
 * // Returns "racecar" because it is already a palindrome.
 * const result3 = buildPalindrome("racecar");
 *
 * @example
 * // Returns "abcba" by adding "cba" to the input string "abc".
 * const result4 = buildPalindrome("abc");
 */
const buildPalindrome = ( st ) => {
    let i = 0;
    let res;

    while (st !== st.split('').reverse().join('')) {
        res = st.split('');
        res.splice(st.length - i , 0 , st[i]);
        st = res.join('');
        i++;
    }

    return st;
};
