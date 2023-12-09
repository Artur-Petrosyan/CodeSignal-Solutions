/**
 * Checks if two people have the same strongest hand.
 * Two people have the same strongest hand if they both have the same value (either left or right) in their strongest hand.
 *
 * @param {number} yourLeft - The value of the left hand of the first person.
 * @param {number} yourRight - The value of the right hand of the first person.
 * @param {number} friendsLeft - The value of the left hand of the second person.
 * @param {number} friendsRight - The value of the right hand of the second person.
 * @returns {boolean} - True if the two people have the same strongest hand, false otherwise.
 *
 * @example
 * areEquallyStrong(10, 15, 15, 10); // true
 * areEquallyStrong(15, 10, 15, 10); // true
 * areEquallyStrong(10, 15, 15, 9); // false
 * areEquallyStrong(10, 10, 10, 10); // true
 * areEquallyStrong(20, 25, 25, 20); // true
 */
const areEquallyStrong = (yourLeft, yourRight, friendsLeft, friendsRight) => {
    let myHands = [yourLeft, yourRight]
    let friendHands = [friendsLeft, friendsRight]
    let myStrongHand = Math.max(...myHands)
    let friendStrongHand = Math.max(...friendHands)
    let myLowHand = Math.min(...myHands);
    let friendHand = Math.min(...friendHands)
    return myStrongHand === friendStrongHand && myLowHand === friendHand
}