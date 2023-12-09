/**
 * Finds and returns the domain part of an email address.
 *
 * @param {string} address - The email address to extract the domain from.
 * @returns {string} - Returns the domain part of the email address.
 *
 * @example
 * // Returns "example.com" as the domain part of the email address "user@example.com".
 * const result1 = findEmailDomain("user@example.com");
 *
 * @example
 * // Returns "company.org" as the domain part of the email address "john.doe@company.org".
 * const result2 = findEmailDomain("john.doe@company.org");
 *
 * @example
 * // Returns "mailserver.net" as the domain part of the email address "support@mailserver.net".
 * const result3 = findEmailDomain("support@mailserver.net");
 *
 * @example
 * // Returns "test-domain.org" as the domain part of the email address "info@test-domain.org".
 * const result4 = findEmailDomain("info@test-domain.org");
 */
const findEmailDomain = (address) => {
    let res = address.split('@');
    return res[res.length - 1];
};
