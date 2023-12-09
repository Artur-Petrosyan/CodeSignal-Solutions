/**
 * Counts the number of common characters between two strings.
 *
 * @param {string} s1 - The first string to compare.
 * @param {string} s2 - The second string to compare.
 * @returns {number} The number of common characters between the two strings.
 *
 * @example
 * const count = commonCharacterCount('aabcc', 'adcaa');
 * console.log(count); // Output: 3
 *
 * @example
 * const count = commonCharacterCount('zzzz', 'zzzzzzz');
 * console.log(count); // Output: 4
 *
 * @example
 * const count = commonCharacterCount('abca', 'xyz');
 * console.log(count); // Output: 0
 */
const commonCharacterCount = (s1, s2) => {
    let count = 0;
    for (let i = 0; i < s1.length; i++) {
        let j = s2.indexOf(s1[i]);
        if (j >= 0) {
            count++;
            s2 = s2.replace(s1[i], '');
        }
    }
    return count;
}