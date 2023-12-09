/**
 * Renames a list of files to avoid name conflicts by appending suffixes in parentheses.
 *
 * @param {string[]} names - An array of file names.
 * @returns {string[]} - Returns an array of unique file names after resolving conflicts.
 *
 * @example
 * // Returns ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"] to resolve conflicts.
 * const result1 = fileNaming(["doc", "doc", "image", "doc(1)", "doc"]);
 *
 * @example
 * // Returns ["a", "b", "a(1)", "a(2)"] to resolve conflicts.
 * const result2 = fileNaming(["a", "b", "a", "a"]);
 *
 * @example
 * // Returns ["doc", "doc(1)", "doc(1)(1)", "doc(2)", "image"] to resolve conflicts.
 * const result3 = fileNaming(["doc", "doc(1)", "doc", "doc(1)", "image"]);
 *
 * @example
 * // Returns ["file", "file(1)", "file(2)", "file(3)", "file(4)"] to resolve conflicts.
 * const result4 = fileNaming(["file", "file", "file", "file", "file"]);
 */
const fileNaming = (names) => {
    return [...names.reduce((set, name) => {
        if (!set.has(name)) {
            set.add(name);
        } else {
            let str = `${name}(1)`;
            for (let j = 1; set.has(str); str = `${name}(${++j})`);
            set.add(str);
        }
        return set;
    }, new Set())];
};
