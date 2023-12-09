/**
 * Applies a box blur to the input image.
 * @param {number[][]} image - A 2D array representing the input image.
 * @returns {number[][]} - A 2D array representing the blurred image.
 * @example
 * const inputImage = [
 *   [1, 1, 1],
 *   [1, 7, 1],
 *   [1, 1, 1]
 * ];
 * const blurredImage = boxBlur(inputImage);
 * console.log(blurredImage);
 * // Output: [
 * //   [1, 1, 1],
 * //   [1, 4, 1],
 * //   [1, 1, 1]
 * // ]
 */
const boxBlur = (image) => {
    let blurredImage = Array.from(
        Array(image.length - 2),
        () => new Array(image[0].length - 2)
    );

    for (let i = 1; i < image.length - 1; i++) {
        for (let j = 1; j < image[i].length - 1; j++) {
            blurredImage[i - 1][j - 1] = Math.floor(
                (
                    image[i - 1][j - 1] +
                    image[i - 1][j] +
                    image[i - 1][j + 1] +
                    image[i][j - 1] +
                    image[i][j] +
                    image[i][j + 1] +
                    image[i + 1][j - 1] +
                    image[i + 1][j] +
                    image[i + 1][j + 1]
                ) / 9
            );
        }
    }

    return blurredImage;
};