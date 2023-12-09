/**
 * Calculates the area of a shape with a given number of sides.
 *
 * @param {number} n - The number of sides of the shape.
 * @returns {number} The area of the shape.
 *
 * @example
 * const area = shapeArea(5);
 * console.log(area); // Output: 10
 *
 * @example
 * const area = shapeArea(1);
 * console.log(area); // Output: 1
 *
 * @example
 * const area = shapeArea(2);
 * console.log(area); // Output: 5
 */
const shapeArea = (n) => {
    if (n === 1) {
        return 1
    }
    return 1 + 2 * (n - 1) * n;
}

shapeArea(5);