/**
 * Calculates the sum of all elements in a matrix, except for the zero elements.
 *
 * @param {number[][]} matrix - The matrix to calculate the sum for.
 * @returns {number} The sum of all non-zero elements in the matrix.
 *
 * @example
 * const matrix = [
 *   [1, 2, 3],
 *   [4, 0, 6],
 *   [7, 8, 9]
 * ];
 * const sum = matrixElementsSum(matrix);
 * console.log(sum); // Output: 25
 *
 * @example
 * const matrix = [
 *   [1, 2, 3],
 *   [4, 5, 6],
 *   [7, 8, 9]
 * ];
 * const sum = matrixElementsSum(matrix);
 * console.log(sum); // Output: 45
 *
 * @example
 * const matrix = [
 *   [0, 2, 3],
 *   [4, 5, 6],
 *   [7, 8, 0]
 * ];
 * const sum = matrixElementsSum(matrix);
 * console.log(sum); // Output: 21
 */
const matrixElementsSum = (matrix) => {
    let counter = 0;
    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][i] === 0) {
                break;
            }
            counter += matrix[j][i];
        }
    }
    return counter;
}