/**
 * Checks if two arrays are similar.
 * Two arrays are considered similar if they have the same elements in the same order.
 *
 * @param {number[]} a - An array of numbers.
 * @param {number[]} b - Another array of numbers.
 * @returns {boolean} - True if the arrays are similar, false otherwise.
 *
 * @example
 * areSimilar([1, 2, 3], [1, 2, 3]); // true
 * areSimilar([1, 2, 3], [2, 1, 3]); // true
 * areSimilar([1, 2, 3], [1, 2, 4]); // false
 * areSimilar([1, 2, 2], [2, 1, 1]); // true
 * areSimilar([1, 2, 2], [2, 2, 1]); // false
 */
const areSimilar = (a,b) => {
    if (a.length!== b.length) {
        return false;
    }

    const arr = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i]!== b[i]) {
            arr.push(i);
        }
    }

    if (arr.length === 0) {
        return true;
    }

    if (arr.length === 2) {
        const [i, j] = arr;
        return a[i] === b[j] && a[j] === b[i];
    }

    return false;
}