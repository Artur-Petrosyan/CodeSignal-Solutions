/**
 * Checks if a given sequence of numbers is almost increasing.
 *
 * @param {number[]} sequence - The sequence of numbers to check.
 * @returns {boolean} True if the sequence is almost increasing, false otherwise.
 *
 * @example
 * const isAlmostIncreasing = almostIncreasingSequence([1, 3, 2, 1]);
 * console.log(isAlmostIncreasing); // Output: true
 *
 * @example
 * const isAlmostIncreasing = almostIncreasingSequence([1, 3, 2]);
 * console.log(isAlmostIncreasing); // Output: false
 *
 * @example
 * const isAlmostIncreasing = almostIncreasingSequence([1, 2, 3, 4, 5]);
 * console.log(isAlmostIncreasing); // Output: false
 */
const almostIncreasingSequence = (sequence) => {
    let count = 0;

    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i - 1]) {
            count++;
            if (i > 1 && i < sequence.length - 1 && sequence[i - 2] >= sequence[i] && sequence[i + 1] <= sequence[i - 1]) {
                return false;
            }
        }
    }

    return count <= 1;
}