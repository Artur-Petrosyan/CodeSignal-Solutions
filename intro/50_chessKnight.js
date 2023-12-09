/**
 * Calculates the number of possible moves a knight can make on a chessboard from a given cell.
 *
 * @param {string} cell - The cell on the chessboard (e.g., "a1") where the knight is located.
 * @returns {number} - Returns the number of possible moves the knight can make.
 *
 * @example
 * // Returns 2 because a knight at "c2" can make two possible moves.
 * const result1 = chessKnight("c2");
 *
 * @example
 * // Returns 6 because a knight at "h8" can make six possible moves.
 * const result2 = chessKnight("h8");
 *
 * @example
 * // Returns 8 because a knight at "e5" can make eight possible moves.
 * const result3 = chessKnight("e5");
 *
 * @example
 * // Returns 4 because a knight at "b1" can make four possible moves.
 * const result4 = chessKnight("b1");
 */
const chessKnight = (cell) => {
    cell = cell.split('');
    cell[0] = cell[0].charCodeAt(0) - 'a'.charCodeAt(0) +1;
    cell[1] = Number(cell[1]);
    aux = [[1,1], [1,1],[1,1],[1,1]]
    let ret = 8;
    if(cell[0] < 3){
        ret -= aux[0][0];
        ret -= aux[0][1];
        aux[0][0] = 0;
        aux[0][1] = 0;
    }
    if(cell[0] < 2) {
        ret -= aux[1][0];
        ret -= aux[1][1];
        aux[1][0] = 0;
        aux[1][1] = 0;
    }
    if(cell[0] > 6){
        ret -= aux[3][0];
        ret -= aux[3][1];
        aux[3][0] = 0;
        aux[3][1] = 0;
    }
    if(cell[0] > 7){
        ret -= aux[2][0];
        ret -= aux[2][1];
        aux[2][0] = 0;
        aux[2][1] = 0;
    }
    if(cell[1] < 3){
        ret -= aux[1][1];
        ret -= aux[2][1];
        aux[1][1] = 0;
        aux[2][1] = 0;
    }
    if(cell[1] < 2){
        ret -= aux[0][1];
        ret -= aux[3][1];
        aux[0][1] = 0;
        aux[3][1] = 0;
    }
    if(cell[1] > 6){
        ret -= aux[1][0];
        ret -= aux[2][0];
        aux[1][0] = 0;
        aux[2][0] = 0;
    }
    if(cell[1] > 7){
        ret -= aux[0][0];
        ret -= aux[3][0];
        aux[0][0] = 0;
        aux[3][0] = 0;
    }

    return ret;
}