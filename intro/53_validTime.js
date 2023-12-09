/**
 * Checks if a given time string is a valid 24-hour time representation.
 *
 * @param {string} time - The input time string in the format 'HH:mm'.
 * @returns {boolean} - Returns true if the time is valid, otherwise false.
 *
 * @example
 * // Returns true because "12:30" is a valid 24-hour time.
 * const result1 = validTime("12:30");
 *
 * @example
 * // Returns false because "25:00" is not a valid hour in 24-hour time.
 * const result2 = validTime("25:00");
 *
 * @example
 * // Returns false because "09:75" is not a valid minute in 24-hour time.
 * const result3 = validTime("09:75");
 *
 * @example
 * // Returns true because "18:45" is a valid 24-hour time.
 * const result4 = validTime("18:45");
 */
const validTime = (time) => {
    let arrFromTime = time.split(':');

    if (Number(arrFromTime[0]) >= 0 && Number(arrFromTime[1]) >= 0) {
        return Number(arrFromTime[0]) < 24 && Number(arrFromTime[1]) < 60;
    }

    return false;
};
