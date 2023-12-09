/**
 * Finds the product of the adjacent elements in an array.
 *
 * @param {number[]} inputArray - The array to find the product of adjacent elements for.
 * @returns {number|null} The product of the adjacent elements, or null if the input array has less than 2 elements.
 *
 * @example
 * const product = adjacentElementsProduct([3, 6, -2, -5, 7, 3]);
 * console.log(product); // Output: 210
 *
 * @example
 * const product = adjacentElementsProduct([1, 2, 3]);
 * console.log(product); // Output: 6
 *
 * @example
 * const product = adjacentElementsProduct([1, 2]);
 * console.log(product); // Output: null
 */
const adjacentElementsProduct = (inputArray) => {
    if (inputArray.length < 2) {
        return null;
    }

    let maxProduct = inputArray[0] * inputArray[1];

    for (let i = 1; i < inputArray.length - 1; i++) {
        const product = inputArray[i] * inputArray[i + 1];
        if (product > maxProduct) {
            maxProduct = product;
        }
    }

    return maxProduct;
}