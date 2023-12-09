/**
 * Calculates the number of years required for a deposit to reach a specified threshold
 * based on a fixed interest rate.
 *
 * @param {number} deposit - The initial deposit amount.
 * @param {number} rate - The annual interest rate as a percentage.
 * @param {number} threshold - The target amount to be reached.
 * @returns {number} - Returns the number of years required to reach the threshold.
 *
 * @example
 * // Returns 6 because it takes 6 years for a deposit of $100 to reach $200 with a 10% annual interest rate.
 * const result1 = depositProfit(100, 10, 200);
 *
 * @example
 * // Returns 3 because it takes 3 years for a deposit of $500 to reach $1000 with a 20% annual interest rate.
 * const result2 = depositProfit(500, 20, 1000);
 *
 * @example
 * // Returns 0 because the initial deposit is already equal to or greater than the threshold.
 * const result3 = depositProfit(1000, 5, 1000);
 *
 * @example
 * // Returns 10 because it takes 10 years for a deposit of $2000 to reach $3000 with a 5% annual interest rate.
 * const result4 = depositProfit(2000, 5, 3000);
 */
const depositProfit = (deposit, rate, threshold) => {
    let years = 0;

    while (deposit < threshold) {
        years++;
        deposit += deposit * rate / 100;
    }

    return years;
};
