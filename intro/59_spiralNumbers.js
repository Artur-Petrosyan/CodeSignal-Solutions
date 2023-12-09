/**
 * Generates a matrix of size n x n filled with numbers in a spiral order.
 *
 * @param {number} n - The size of the matrix (number of rows and columns).
 * @returns {number[][]} - Returns a matrix filled with numbers in a spiral order.
 *
 * @example
 * // Returns a 3x3 matrix filled in a spiral order:
 * // [
 * //   [1, 2, 3],
 * //   [8, 9, 4],
 * //   [7, 6, 5]
 * // ]
 * const result1 = spiralNumbers(3);
 *
 * @example
 * // Returns a 4x4 matrix filled in a spiral order:
 * // [
 * //   [1, 2, 3, 4],
 * //   [12, 13, 14, 5],
 * //   [11, 16, 15, 6],
 * //   [10, 9, 8, 7]
 * // ]
 * const result2 = spiralNumbers(4);
 *
 * @example
 * // Returns a 5x5 matrix filled in a spiral order:
 * // [
 * //   [1, 2, 3, 4, 5],
 * //   [16, 17, 18, 19, 6],
 * //   [15, 24, 25, 20, 7],
 * //   [14, 23, 22, 21, 8],
 * //   [13, 12, 11, 10, 9]
 * // ]
 * const result3 = spiralNumbers(5);
 *
 * @example
 * // Returns a 1x1 matrix with the number 1.
 * const result4 = spiralNumbers(1);
 */
const spiralNumbers = (n) => {

    let res = Array(n * n).fill(null).map((el, i) => i + 1);
    let newArr = [];
    let i = 0;
    while (res.length) {
        newArr.reverse();
        newArr = newArr.length ? newArr[0].map((col, i) => newArr.map(row => row[i])) : newArr;
        newArr.unshift(res.splice(-(Math.floor(i / 2) + 1)));
        i++;
    }
    return newArr;
};
