import assert from "assert";
import ethersPkg from "ethers";
const { ethers } = ethersPkg;

/**
 * @param {string} date Must be of form yyyy-mm-dd
 * @returns {number} Date as seconds since 1900
 */
export function getDateAsInt(date) {
  // Format input
  const [year, month, day] = date.split("-");
  assert.ok(year && month && day); // Make sure Y M D all given
  assert.ok(year >= 1900 && year <= 2099); // Make sure date is in a reasonable range, otherwise it's likely the input was malformatted and it's best to be safe by stopping -- we can always allow more edge cases if needed later
  const time = new Date(date).getTime() / 1000 + 2208988800; // 2208988800000 is 70 year offset; Unix timestamps below 1970 are negative and we want to allow from approximately 1900.
  assert.ok(!isNaN(time));
  return time;
}

export function logWithTimestamp(message) {
  console.log(`${new Date().toISOString()} ${message}`);
}
