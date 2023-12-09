/**
 * Finds the first non-repeating character in a string.
 * @param {string} s - The string to search for the first non-repeating character.
 * @returns {string} The first non-repeating character in the string, or '_' if all characters are repeating.
 * @example
 * let s = 'hello';
 * let result = firstNotRepeatingCharacter(s);
 * console.log(result); // Output: 'h'
 * @example
 * let s = 'world';
 * let result = firstNotRepeatingCharacter(s);
 * console.log(result); // Output: '_'
 */
const firstNotRepeatingCharacter = (s) => {
    let arrFromStr = [...s];
    let res = {};
    for (let i = 0; i < arrFromStr.length; i++) {
        let cur = arrFromStr[i];
        if (res[cur] === undefined) {
            res[cur] = 0;
        } else {
            res[cur] += 1;
        }
    }
    let resArr = Object.entries(res)
        .filter((str) => str[1] === 0)
        .map((str) => {
            return arrFromStr.indexOf(str[0]);
        });
    if (resArr.length === 0) return "_";
    return arrFromStr[resArr[0]];
};