/**
 * Rearranges an array of strings to form a sequence where each adjacent pair differs by only one character.
 *
 * @param {string[]} inputArray - The array of strings to rearrange.
 * @returns {boolean} - Returns true if such a rearrangement is possible, otherwise false.
 *
 * @example
 * // Returns true because the strings can be rearranged as ["abc", "abd", "bbc", "bcc"],
 * // forming a sequence where each adjacent pair differs by only one character.
 * const result1 = stringsRearrangement(["abc", "abd", "bbc", "bcc"]);
 *
 * @example
 * // Returns false because no rearrangement can form a sequence where each adjacent pair
 * // differs by only one character for the given strings.
 * const result2 = stringsRearrangement(["abc", "def", "ghi"]);
 */
const stringsRearrangement = inputArray => {
    let next = 0;
    inputArray.sort();

    for (let i = 0; i < inputArray.length && next >= 0 && !arranged(inputArray); i++) {
        next = findNext(inputArray[i], inputArray);

        if (next >= 0 && (next > i + 1 || next < i - 1)) {
            inputArray.splice(i + 1, 0, inputArray[next]);

            if (next < i + 1)
                inputArray.splice(next, 1);
            else
                inputArray.splice(next + 1, 1);
        }
    }

    return arranged(inputArray);
};

/**
 * Checks if two strings have exactly one differing character.
 *
 * @param {string} string1 - The first string.
 * @param {string} string2 - The second string.
 * @returns {boolean} - Returns true if the strings have exactly one differing character, otherwise false.
 */
function isNext(string1, string2) {
    let diff = 0;
    for (let i = 0; i < string1.length; i++) {
        if (string1[i] !== string2[i])
            diff++;
    }
    return diff === 1;
}

/**
 * Checks if an array of strings is arranged such that each adjacent pair differs by only one character.
 *
 * @param {string[]} array - The array of strings to check.
 * @returns {boolean} - Returns true if the array is arranged as required, otherwise false.
 */
function arranged(array) {
    let chars = true;
    for (let i = 0; i + 1 < array.length && chars; i++) {
        if (!isNext(array[i], array[i + 1]))
            chars = false;
    }
    return chars;
}

/**
 * Finds the index of the next string in the array that has exactly one differing character with the given string.
 *
 * @param {string} string - The string to find the next string for.
 * @param {string[]} array - The array of strings to search.
 * @returns {number} - Returns the index of the next string or -1 if not found.
 */
function findNext(string, array) {
    let index = -1;
    for (let i = 0; i < array.length && index === -1; i++) {
        if (isNext(string, array[i]))
            index = i;
    }
    return index;
}


