/**
 * Checks if a bishop can capture a pawn on a chessboard.
 *
 * @param {string} bishop - The coordinates of the bishop in algebraic notation (e.g., "a1").
 * @param {string} pawn - The coordinates of the pawn in algebraic notation (e.g., "b2").
 * @returns {boolean} - Returns true if the bishop can capture the pawn, otherwise false.
 *
 * @example
 * // Returns true because the bishop at "a1" can capture the pawn at "b2".
 * const result1 = bishopAndPawn("a1", "b2");
 *
 * @example
 * // Returns false because the bishop at "c4" cannot capture the pawn at "e6".
 * const result2 = bishopAndPawn("c4", "e6");
 *
 * @example
 * // Returns true because the bishop at "h1" can capture the pawn at "a8".
 * const result3 = bishopAndPawn("h1", "a8");
 *
 * @example
 * // Returns false because the bishop at "g7" cannot capture the pawn at "h6".
 * const result4 = bishopAndPawn("g7", "h6");
 */
const bishopAndPawn = (bishop, pawn) => {
    let bishopCoords = bishop.split("");
    let pawnCoords = pawn.split("");
    bishopCoords[0] = 1 + bishopCoords[0].charCodeAt(0) - "a".charCodeAt(0);
    bishopCoords[1] = Number(bishopCoords[1]);
    pawnCoords[0] = 1 + pawnCoords[0].charCodeAt(0) - "a".charCodeAt(0);
    pawnCoords[1] = Number(pawnCoords[1]);
    return (
        bishopCoords[0] - bishopCoords[1] === pawnCoords[0] - pawnCoords[1] ||
        bishopCoords[0] + bishopCoords[1] === pawnCoords[0] + pawnCoords[1]
    );
};
