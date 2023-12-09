/**
 * Adds a border to a given picture.
 * The border consists of asterisks (*) on the edges and in between each row and column of the picture.
 *
 * @param {string[]} picture - An array of strings representing the picture.
 * @returns {string[]} - An array of strings representing the picture with a border.
 *
 * @example
 * addBorder(["abc", "def"]); // ["*****", "*abc*", "*def*", "*****"]
 * addBorder(["abc", "def", "ghi"]); // ["*****", "*abc*", "*def*", "*ghi*", "*****"]
 * addBorder(["a"]); // ["*****", "*a*a*", "*****"]
 * addBorder([]); // ["*****"]
 */
const addBorder = (picture) => {
    picture = picture.map(f=>'*'.concat(f,'*'))
    let l = picture[0].length;
    picture.unshift(Array(l).fill('*').join(''));
    picture.push(Array(l).fill('*').join(''))
    return picture;
}