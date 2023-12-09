/**
 * Checks if a given string is a valid MAC-48 address.
 *
 * @param {string} inputString - The input string to check for MAC-48 address validity.
 * @returns {boolean} - Returns true if the string is a valid MAC-48 address, otherwise false.
 *
 * @example
 * // Returns true because "00-1B-63-84-45-E6" is a valid MAC-48 address.
 * const result1 = isMAC48Address("00-1B-63-84-45-E6");
 *
 * @example
 * // Returns false because "g0-1B-63-84-45-E6" contains an invalid character ('g').
 * const result2 = isMAC48Address("g0-1B-63-84-45-E6");
 *
 * @example
 * // Returns true because "A2-7F-23-45-67-89" is a valid MAC-48 address.
 * const result3 = isMAC48Address("A2-7F-23-45-67-89");
 *
 * @example
 * // Returns false because "01:23:45:67:89:ab" uses a colon (:) instead of a hyphen (-).
 * const result4 = isMAC48Address("01:23:45:67:89:ab");
 */
const isMAC48Address = (inputString) => {
    const macRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
    return macRegex.test(inputString);
};
