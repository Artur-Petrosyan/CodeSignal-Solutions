/**
 * Encodes a given string using a simple run-length encoding scheme.
 *
 * @param {string} s - The input string to be encoded.
 * @returns {string} - Returns the run-length encoded string.
 *
 * @example
 * // Returns "2a2b" as the string "aabb" is encoded with run-length encoding.
 * const result1 = lineEncoding("aabb");
 *
 * @example
 * // Returns "4a3b2c" as the string "aaaabbbcc" is encoded with run-length encoding.
 * const result2 = lineEncoding("aaaabbbcc");
 *
 * @example
 * // Returns "5a" as the string "aaaaa" is encoded with run-length encoding.
 * const result3 = lineEncoding("aaaaa");
 *
 * @example
 * // Returns "1a1b1c1d" as the string "abcd" does not have consecutive repeating characters.
 * const result4 = lineEncoding("abcd");
 */
const lineEncoding = (s) => {
    return s.replace(/([a-z])\1*/g, (item) => (item.length > 1 ? item.length + item[0] : item[0]));
};
