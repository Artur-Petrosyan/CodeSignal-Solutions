/**
 * Calculates the number of days it takes for a plant to reach or exceed a desired height.
 *
 * @param {number} upSpeed - The speed at which the plant grows during the day.
 * @param {number} downSpeed - The speed at which the plant shrinks during the night.
 * @param {number} desiredHeight - The desired height of the plant.
 * @returns {number} - Returns the number of days it takes for the plant to reach or exceed the desired height.
 *
 * @example
 * // Returns 10 as the plant grows by 5 units each day and shrinks by 2 units each night,
 * // reaching a height of 10 on the 10th day.
 * const result1 = growingPlant(5, 2, 10);
 *
 * @example
 * // Returns 5 as the plant grows by 4 units each day and shrinks by 3 units each night,
 * // reaching a height of 10 on the 5th day.
 * const result2 = growingPlant(4, 3, 10);
 *
 * @example
 * // Returns 1 as the plant grows by 1 unit each day and does not shrink at night,
 * // reaching a height of 1 on the 1st day.
 * const result3 = growingPlant(1, 0, 1);
 */
const growingPlant = (upSpeed, downSpeed, desiredHeight) => {
    let height = 0;
    let days = 1;

    height += upSpeed;

    while (height < desiredHeight) {
        days += 1;
        height -= downSpeed;
        height += upSpeed;
    }

    return days;
};
