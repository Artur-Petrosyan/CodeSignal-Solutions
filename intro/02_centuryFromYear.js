/**
 * Calculates the century a given year belongs to.
 *
 * @param {number} year - The year to calculate the century for.
 * @returns {number} The century the year belongs to.
 *
 * @example
 * const century = centuryFromYear(1900);
 * console.log(century); // Output: 19
 *
 * @example
 * const century = centuryFromYear(2000);
 * console.log(century); // Output: 20
 *
 * @example
 * const century = centuryFromYear(2100);
 * console.log(century); // Output: 21
 */
const centuryFromYear = (year) => {
    return Math.ceil(year / 100)
}