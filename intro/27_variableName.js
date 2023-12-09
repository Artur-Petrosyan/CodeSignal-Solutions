/**
 * Checks if a given string is a valid letiable name.
 *
 * @param {string} name - The string to be checked as a letiable name.
 * @returns {boolean} - Returns true if the string is a valid letiable name, otherwise false.
 *
 * @example
 * // Returns true because "letiableName" is a valid letiable name.
 * const result1 = letiableName("letiableName");
 *
 * @example
 * // Returns false because the string starts with a digit.
 * const result2 = letiableName("123letiable");
 *
 * @example
 * // Returns true for a single-letter letiable name.
 * const result3 = letiableName("a");
 *
 * @example
 * // Returns false because the string contains a special character '@'.
 * const result4 = letiableName("invalid@name");
 */
const letiableName = (name) => {
    return /^[a-zA-Z_]+[a-zA-Z0-9_]*$/.test(name);
};
