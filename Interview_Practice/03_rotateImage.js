/**
 * Rotates an image by 90 degrees.
 * @param {Array} a - The image to rotate.
 * @returns {Array} The rotated image.
 * @example
 * let a = [
 *   [1, 2, 3],
 *   [4, 5, 6],
 *   [7, 8, 9]
 * ];
 * let result = rotateImage(a);
 * console.log(result); // Output: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
 */
const rotateImage = (a) => {
    const n = a.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const temp = a[i][j];
            a[i][j] = a[j][i];
            a[j][i] = temp;
        }
    }

    for (let i = 0; i < n; i++) {
        a[i].reverse();
    }
    return a;
};