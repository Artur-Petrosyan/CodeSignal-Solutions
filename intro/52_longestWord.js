/**
 * Finds and returns the longest word from a given text.
 *
 * @param {string} text - The input text containing words.
 * @returns {string} - Returns the longest word from the text.
 *
 * @example
 * // Returns "jumped" as it is the longest word in the text.
 * const result1 = longestWord("The quick brown fox jumped over the lazy dog");
 *
 * @example
 * // Returns "elephant" as it is the longest word in the text.
 * const result2 = longestWord("An elephant is a large mammal with big ears");
 *
 * @example
 * // Returns "programming" as it is the longest word in the text.
 * const result3 = longestWord("Learning programming is essential for software development");
 *
 * @example
 * // Returns "communication" as it is the longest word in the text.
 * const result4 = longestWord("Effective communication is crucial in teamwork");
 */
const longestWord = (text) => {
    let arr = text.match(/[a-z]+/gi);

    let sorted = arr.sort(function (a, b) {
        return b.length - a.length;
    });

    return sorted[0];
};



// // const longestWord = ( text ) => {
//     const arrText = text.replace(/[^a-zA-Z0-9 ]/g , '').split(' ')
//     let res = [];
//     for (let i = 0; i < arrText.length; i++) {
//         let tempStr = 0;
//         for (let j = 0; j < arrText[i].length; j++) {
//             tempStr += arrText[i][j].charCodeAt()
//         }
//         res.push(tempStr)
//     }
//     let max = Math.max(...res)
//     let longWord = res.indexOf(max)
//     return arrText[longWord]
// // }
// // console.log(longestWord('Ready, steady, go!'));
