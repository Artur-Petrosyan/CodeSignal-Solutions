/**
 * Checks if a given string is a valid IPv4 address.
 * An IPv4 address is a sequence of four numbers separated by dots, each representing a byte of the address.
 * Each number must be between 0 and 255, inclusive, and cannot be 00 or 01.
 *
 * @param {string} inputString - The string to check.
 * @returns {boolean} - True if the string is a valid IPv4 address, false otherwise.
 *
 * @example
 * isIPv4Address("172.16.254.1"); // true
 * isIPv4Address("172.316.254.1"); // false
 * isIPv4Address("172.16.254.01"); // false
 * isIPv4Address("172.16.254.00"); // false
 * isIPv4Address("172.16.254"); // false
 */
const isIPv4Address = (inputString) => {
    const arrFromIp = inputString.split('.')
    if(arrFromIp.length === 4) {
        return  arrFromIp.every(number => {
            return!!(number && number >= 0 && number <= 255 && number!== '00' && number!== '01');
        })
    }
    return false
}