/**
 * Finds the first repeated element in an array.
 * @param {Array} a - The array to search for repeated elements.
 * @returns {number} The first repeated element in the array, or -1 if no repeated element is found.
 * @example
 * let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
 * let result = findFirstRepeatedElement(a);
 * console.log(result); // Output: 1
 */
function findFirstRepeatedElement(a) {
    let elementSet = new Set();

    for (let i = 0; i < a.length; i++) {
        if (elementSet.has(a[i])) return a[i];
        elementSet.add(a[i]);
    }
    return -1;
}