/**
 * Counts the number of different 2x2 squares in a given matrix.
 *
 * @param {number[][]} matrix - The input matrix.
 * @returns {number} - Returns the number of different 2x2 squares in the matrix.
 *
 * @example
 * // Returns 6 because there are 6 different 2x2 squares in the matrix.
 * const result1 = differentSquares([
 *   [1, 2, 1],
 *   [2, 2, 2],
 *   [2, 2, 2],
 *   [1, 2, 3],
 *   [2, 2, 1]
 * ]);
 *
 * @example
 * // Returns 4 because there are 4 different 2x2 squares in the matrix.
 * const result2 = differentSquares([
 *   [1, 2, 3],
 *   [4, 5, 6],
 *   [7, 8, 9]
 * ]);
 *
 * @example
 * // Returns 0 because the matrix does not contain any 2x2 squares.
 * const result3 = differentSquares([
 *   [1, 2],
 *   [3, 4]
 * ]);
 */
const differentSquares = (matrix) => {
    let arr = [];
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (not(i, j)) {
                arr.push([
                    [
                        matrix[i - 1][j - 1],
                        matrix[i - 1][j],
                    ],
                    [
                        matrix[i][j - 1],
                        matrix[i][j],
                    ],
                ]);
            }
        }
    }

    function not(i, j) {
        return arr.every((c) => {
            return (
                c[0][0] !== matrix[i - 1][j - 1] ||
                c[0][1] !== matrix[i - 1][j] ||
                c[1][0] !== matrix[i][j - 1] ||
                c[1][1] !== matrix[i][j]
            );
        });
    }

    return arr.length;
};
