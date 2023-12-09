/**
 * Finds the smallest positive integer whose digits' product equals the given product.
 *
 * @param {number} product - The target product to be matched by the digits of the integer.
 * @returns {number} - Returns the smallest positive integer or -1 if no such integer exists.
 *
 * @example
 * // Returns 26 because the product of its digits (2 * 6) equals 12.
 * const result1 = digitsProduct(12);
 *
 * @example
 * // Returns 7 because the product of its digits (7) equals 7.
 * const result2 = digitsProduct(7);
 *
 * @example
 * // Returns 45 because the product of its digits (4 * 5) equals 20.
 * const result3 = digitsProduct(20);
 *
 * @example
 * // Returns -1 because no positive integer has digits that multiply to equal 0.
 * const result4 = digitsProduct(0);
 */
const digitsProduct = (product) => {
    for (let i = 1; i < 4000; i++) {
        if (p(i) === product) return i;
    }

    function p(k) {
        return String(k).split('').map(Number).reduce((a, b) => a * b, 1);
    }

    return -1;
};

