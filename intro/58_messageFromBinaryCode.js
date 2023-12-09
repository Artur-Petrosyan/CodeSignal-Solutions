/**
 * Converts a binary-encoded string into its corresponding ASCII message.
 *
 * @param {string} inputString - The binary-encoded string to be converted.
 * @returns {string} - Returns the ASCII message decoded from the binary string.
 *
 * @example
 * // Returns "Hello" because the binary codes "01001000", "01100101", "01101100", "01101100", and "01101111"
 * // represent the ASCII characters 'H', 'e', 'l', 'l', and 'o' respectively.
 * const result1 = messageFromBinaryCode("0100100001100101011011000110110001101111");
 *
 * @example
 * // Returns "World" because the binary codes "01010111", "01101111", "01110010", "01101100", and "01100100"
 * // represent the ASCII characters 'W', 'o', 'r', 'l', and 'd' respectively.
 * const result2 = messageFromBinaryCode("0101011101101111011100100110110001100100");
 *
 * @example
 * // Returns "Binary" because the binary codes "01000010", "01101001", "01101110", "01100001", "01110010", and "01111001"
 * // represent the ASCII characters 'B', 'i', 'n', 'a', 'r', and 'y' respectively.
 * const result3 = messageFromBinaryCode("01000010011010010110111001100001011000100111001001");
 *
 * @example
 * // Returns "Code" because the binary codes "01000011", "01101111", "01100100", and "01100101"
 * // represent the ASCII characters 'C', 'o', 'd', and 'e' respectively.
 * const result4 = messageFromBinaryCode("01000011011011110110010001100101");
 */
const messageFromBinaryCode = (inputString) => {
    let binaryArr = inputString.match(/.{1,8}/g);
    return binaryArr.map((chunk) => String.fromCharCode(parseInt(chunk, 2))).join('');
};
