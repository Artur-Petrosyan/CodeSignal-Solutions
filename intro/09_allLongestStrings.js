/**
 * Returns all the strings in an array that have the longest length.
 *
 * @param {string[]} inputArray - The array of strings to search.
 * @returns {string[]} An array of strings that have the longest length.
 *
 * @example
 * const strings = ['apple', 'banana', 'cherry'];
 * const longestStrings = allLongestStrings(strings);
 * console.log(longestStrings); // Output: ['banana', 'cherry']
 *
 * @example
 * const strings = ['hello', 'world', 'foo', 'bar'];
 * const longestStrings = allLongestStrings(strings);
 * console.log(longestStrings); // Output: ['hello', 'world']
 *
 * @example
 * const strings = ['a', 'b', 'c', 'd', 'e'];
 * const longestStrings = allLongestStrings(strings);
 * console.log(longestStrings); // Output: ['a', 'b', 'c', 'd', 'e']
 */
const allLongestStrings = (inputArray) => {
    let newArr = []
    for (let i = 0; i < inputArray.length; i++) {
        newArr.push(Math.max(inputArray[i].length))
        newArr.sort(( a, b ) => b - a)
    }
    return inputArray.filter(item => {
        if ( item.length === newArr[0] ) {
            return item
        }
    })
}