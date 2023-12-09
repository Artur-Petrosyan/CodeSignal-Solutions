/**
 * Calculates the sum of the elements in two teams that are paired together.
 * The first team consists of elements at odd indices, while the second team consists of elements at even indices.
 *
 * @param {number[]} a - An array of numbers.
 * @returns {number[]} - An array containing the sum of the elements in the first team and the second team.
 *
 * @example
 * alternatingSums([50, 60, 60, 45, 70]); // [180, 105]
 * alternatingSums([10, 10, 10]); // [30, 10]
 * alternatingSums([11, 34, 88, 2, 3]); // [44, 42]
 */
const alternatingSums =(a) => {
    let team1 = a.filter((item, index) => {
        if (index % 2!== 0) {
            return item
        }
    })
    let team2 = a.filter((item, index) => {
        if (index % 2 === 0) {
            return item
        }
    })
    let sum1 = team1.reduce((acc,cur) => {
        return acc + cur
    },0)
    let sum2 = team2.reduce((acc,cur) => {
        return acc + cur
    },0)
    return [sum2,sum1]
}