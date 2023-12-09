/**
 * Replaces all occurrences of a specified element in an array with another element.
 *
 * @param {Array} inputArray - The input array to be processed.
 * @param {*} elemToReplace - The element to be replaced in the array.
 * @param {*} substitutionElem - The element to substitute the occurrences of `elemToReplace`.
 * @returns {Array} - A new array with all occurrences of `elemToReplace` replaced by `substitutionElem`.
 *
 * @example
 * // Example 1:
 * const originalArray = [1, 2, 3, 2, 4, 2, 5];
 * const replacedArray = arrayReplace(originalArray, 2, 9);
 * // replacedArray is [1, 9, 3, 9, 4, 9, 5]
 *
 * @example
 * // Example 2:
 * const words = ['apple', 'banana', 'orange', 'banana', 'grape'];
 * const updatedWords = arrayReplace(words, 'banana', 'kiwi');
 * // updatedWords is ['apple', 'kiwi', 'orange', 'kiwi', 'grape']
 */
const arrayReplace = (inputArray, elemToReplace, substitutionElem) => {
    return inputArray.map(el => {
        if (el === elemToReplace) {
            return substitutionElem;
        }
        return el;
    });
};
