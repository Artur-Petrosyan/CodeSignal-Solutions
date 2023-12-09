/**
 * Sorts an array of people according to their heights.
 * People with a height of -1 are considered to be last.
 *
 * @param {number[]} a - An array of people's heights.
 * @returns {number[]} - The sorted array of people's heights.
 *
 * @example
 * sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]); // [-1, 150, 160, 170, 180, 190, -1, -1]
 * sortByHeight([170, 180, -1, 160, 190]); // [-1, 160, 170, 180, 190]
 * sortByHeight([150, 170, 180, 190]); // [150, 170, 180, 190]
 */
const sortByHeight = (a) => {
    let aFiltered = a.filter(x => {
        if(x!== -1 ){
            return x;
        }
    }).sort((a,b) => a-b);

    for(let i = 0; i < a.length; i++) {
        if(a[i]!== -1) {
            a[i] = aFiltered.shift();
        }
    }

    return a;
}