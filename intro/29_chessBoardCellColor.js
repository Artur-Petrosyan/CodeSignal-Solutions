/**
 * Determines if two chessboard cells have the same color.
 *
 * @param {string} cell1 - The coordinate of the first cell (e.g., "A1").
 * @param {string} cell2 - The coordinate of the second cell (e.g., "B2").
 * @returns {boolean} - Returns true if both cells have the same color, otherwise false.
 *
 * @example
 * // Returns true because both cells "A1" and "C3" are black.
 * const result1 = chessBoardCellColor("A1", "C3");
 *
 * @example
 * // Returns false because cells "A1" and "B2" have different colors (black and white).
 * const result2 = chessBoardCellColor("A1", "B2");
 *
 * @example
 * // Returns true because both cells "H8" and "A1" are white.
 * const result3 = chessBoardCellColor("H8", "A1");
 *
 * @example
 * // Returns true for the same cell "D4" as it has a consistent color.
 * const result4 = chessBoardCellColor("D4", "D4");
 */
const chessBoardCellColor = (cell1, cell2) => {
    let oddLetters = ['A', 'C', 'E', 'G'];
    let evenLetters = ['B', 'D', 'F', 'H'];
    let cell1status = '';
    let cell2status = '';

    if (oddLetters.indexOf(cell1[0]) !== -1) {
        cell1status = cell1[1] % 2 !== 0 ? 'black' : 'white';
    } else {
        cell1status = cell1[1] % 2 !== 0 ? 'white' : 'black';
    }

    if (oddLetters.indexOf(cell2[0]) !== -1) {
        cell2status = cell2[1] % 2 !== 0 ? 'black' : 'white';
    } else {
        cell2status = cell2[1] % 2 !== 0 ? 'white' : 'black';
    }

    return cell1status === cell2status;
};
