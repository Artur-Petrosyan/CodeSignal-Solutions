/**
 * Solves the knapsack problem with two items, each having a value and weight, and a maximum weight capacity.
 * Returns the maximum total value that can be carried without exceeding the maximum weight capacity.
 *
 * @param {number} value1 - The value of the first item.
 * @param {number} weight1 - The weight of the first item.
 * @param {number} value2 - The value of the second item.
 * @param {number} weight2 - The weight of the second item.
 * @param {number} maxW - The maximum weight capacity of the knapsack.
 * @returns {number} - Returns the maximum total value that can be carried without exceeding the maximum weight capacity.
 *
 * @example
 * // Returns 15 as the total value that can be carried is the sum of the values of both items
 * // (value1 + value2) since their combined weight does not exceed the maximum weight capacity (maxW).
 * const result1 = knapsackLight(10, 5, 5, 4, 8);
 *
 * @example
 * // Returns 8 as the total value that can be carried is the value of the first item (value1)
 * // since its weight is less than or equal to the maximum weight capacity (maxW).
 * const result2 = knapsackLight(8, 3, 5, 4, 7);
 *
 * @example
 * // Returns 5 as the total value that can be carried is the value of the second item (value2)
 * // since its weight is less than or equal to the maximum weight capacity (maxW), and it has a higher value than the first item.
 * const result3 = knapsackLight(2, 3, 5, 2, 4);
 */
const knapsackLight = (value1, weight1, value2, weight2, maxW) => {
    if (weight1 + weight2 <= maxW) {
        return value1 + value2;
    }
    if (weight1 <= maxW && value1 > value2) {
        return value1;
    }
    if (weight2 <= maxW && value2 > value1) {
        return value2;
    }
    if (weight1 <= maxW) {
        return value1;
    } else if (weight2 <= maxW) {
        return value2;
    } else {
        return 0;
    }
};
