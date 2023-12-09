/**
 * Calculates the number of candidates who can win the election given the votes and an additional number of votes.
 *
 * @param {number[]} votes - An array representing the number of votes each candidate received.
 * @param {number} k - The additional number of votes that can be added to any candidate's total.
 * @returns {number} - Returns the number of candidates who can win the election.
 *
 * @example
 * // Returns 2 because candidates 1 and 3 can win the election by adding 2 additional votes each (5 + 2 = 7, 4 + 2 = 6).
 * const result1 = electionsWinners([5, 4, 5, 1], 2);
 *
 * @example
 * // Returns 1 because candidate 0 can win the election by adding 3 additional votes (4 + 3 = 7).
 * const result2 = electionsWinners([4, 3, 2, 1], 3);
 *
 * @example
 * // Returns 4 because all candidates can win the election by adding 1 additional vote each (3 + 1 = 4, 2 + 1 = 3, 1 + 1 = 2, 5 + 1 = 6).
 * const result3 = electionsWinners([3, 2, 1, 5], 1);
 *
 * @example
 * // Returns 0 because no candidate can win the election with additional votes as the maximum number of votes is 5.
 * const result4 = electionsWinners([5, 5, 5, 5], 1);
 */
const electionsWinners = (votes, k) => {
    let max = Math.max(...votes);
    let numOfMax = votes.filter(v => v === max).length;
    return votes.reduce((acc, v) => acc + (v === max && numOfMax === 1 || v + k > max ? 1 : 0), 0);
};
