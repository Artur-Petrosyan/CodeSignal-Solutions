/**
 * Generates a Minesweeper game board based on the input matrix.
 * @param {number[][]} matrix - A 2D array representing the game board.
 * @returns {number[][]} - A 2D array representing the Minesweeper game board.
 * @example
 * const matrix = [
 *   [0, 0, 0, 0],
 *   [0, 1, 1, 0],
 *   [0, 0, 0, 0]
 * ];
 * const gameBoard = minesweeper(matrix);
 * console.log(gameBoard);
 * // Output: [
 * //   [0, 1, 2, 1],
 * //   [2, 2, 1, 0],
 * //   [1, 1, 0, 0]
 * // ]
 */
const minesweeper = (matrix) => {
    return matrix.map((l, i) =>
        l.map((e, j) => {
            let sum = 0;
            for (let k = Math.max(0, i - 1); k <= Math.min(matrix.length - 1, i + 1); k++) {
                for (let l = Math.max(0, j - 1); l <= Math.min(matrix[k].length - 1, j + 1); l++) {
                    if (k!== i || l!== j) {
                        sum += matrix[k][l];
                    }
                }
            }
            return sum - e;
        })
    );
};