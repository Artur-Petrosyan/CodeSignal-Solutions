
/**
 * Checks if a given Sudoku grid is valid.
 * @param {Array<Array<number>>} grid - The Sudoku grid to be checked.
 * @returns {boolean} - True if the grid is valid, false otherwise.
 * @example
 * const grid = [
 *   [1, 2, 3, 4, 5, 6, 7, 8, 9],
 *   [4, 5, 6, 7, 8, 9, 1, 2, 3],
 *   [7, 8, 9, 1, 2, 3, 4, 5, 6],
 *   [2, 1, 4, 3, 6, 5, 8, 9, 7],
 *   [3, 6, 5, 8, 9, 7, 2, 1, 4],
 *   [5, 9, 7, 2, 1, 4, 3, 6, 8],
 *   [6, 3, 2, 5, 4, 8, 9, 7, 1],
 *   [8, 7, 1, 9, 3, 2, 5, 4, 6],
 *   [9, 4, 8, 6, 7, 1, 2, 3, 5]
 * ];
 * const isValid = sudoku(grid);
 * console.log(isValid); // true
 */
const sudoku = ( grid ) => {
    for (let i = 0; i < grid[0].length; i++) {
        let numSet = new Set();
        for (let j = 0; j < grid[0].length; j++) {
            numSet.add(grid[i][j]);
        }
        if ( numSet.size!== 9 ) return false;
    }

    for (let i = 0; i < grid[0].length; i++) {
        let numSet = new Set();
        for (let j = 0; j < grid[0].length; j++) {
            numSet.add(grid[j][i]);
        }
        if ( numSet.size!== 9 ) return false;
    }

    for (let i = 0; i < 9; i = i + 3) {
        for (let j = 0; j < 9; j = j + 3) {
            let numSet = new Set();
            for (let k = i; k < i + 3; k++) {
                for (let l = j; l < j + 3; l++) {
                    numSet.add(grid[k][l]);
                }
            }
            if ( numSet.size!== 9 ) return false;
        }
    }
    return true;
}