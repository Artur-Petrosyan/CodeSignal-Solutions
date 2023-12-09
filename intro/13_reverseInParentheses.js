/**
 * Reverses the order of words in a given string if they are enclosed in parentheses.
 * If there are no parentheses in the string, the original string is returned.
 *
 * @param {string} inputString - The string to reverse the words in.
 * @returns {string} - The reversed string with words in parentheses.
 *
 * @example
 * reverseInParentheses("The quick (brown) fox jumps over the lazy dog"); // "ehT kciuq nworb xof spmuj revo eht yzal.god"
 * reverseInParentheses("The (quick) brown fox jumps over the lazy dog"); // "ehT kciuq nworb xof spmuj revo eht yzal.god"
 * reverseInParentheses("The quick brown fox jumps over the lazy dog"); // "The quick brown fox jumps over the lazy dog"
 * reverseInParentheses("(The quick brown fox) jumps over the lazy dog"); // "ehT kciuq nworb xof spmuj revo eht yzal.god"
 * reverseInParentheses("The quick (brown fox) jumps over the lazy dog"); // "ehT kciuq (nowrb xof) spmuj revo eht yzal.god"
 * reverseInParentheses("The quick (brown fox jumps) over the lazy dog"); // "ehT kciuq (nowrb xof spmuj) revo eht yzal.god"
 * reverseInParentheses("The quick (brown fox jumps over) the lazy dog"); // "ehT kciuq (nowrb xof spmuj revo) eht yzal.god"
 * reverseInParentheses("The quick (brown fox jumps over the) lazy dog"); // "ehT kciuq (nowrb xof spmuj revo eht) yzal.god"
 * reverseInParentheses("The quick (brown fox jumps over the lazy) dog"); // "ehT kciuq (nowrb xof spmuj revo eht yzal).god"
 * reverseInParentheses("The quick (brown fox jumps over the lazy dog)"); // "The quick (brown fox jumps over the lazy dog)"
 */
const reverseInParentheses = (inputString) => {
    if ( inputString.includes('(') ) {
        return solution(reverseRecursion(inputString));
    }
    return inputString;
}

function reverseRecursion( str ) {

    let regex = /\(([^()]*)\)/i;
    let subStr = regex.exec(str)[1];

    subStr = subStr.split("").reverse().join("");

    return str.replace(regex, subStr);
}