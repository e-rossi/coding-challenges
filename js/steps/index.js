/** Write a function that accepts a positive number N and
 *  logs a step shape with N levels using the # character.
 *  Make sure the steps have spaces on the right hand side!
 *  --- Examples ---
 * 
 *  steps(2)
 *   '# '
 *   '##'
 * 
 *  steps(3)
 *   '#  '
 *   '## '
 *   '###'
 * 
 *  steps(4)
 *   '#   '
 *   '##  '
 *   '### '
 *   '####'
 */

function steps(n) {
  /**
   * Iterative solution, the 
   */

  if (n % 1 !== 0) return 'Number must be an integer';

  for (let i = 1; i <= n; i++) {
    console.log('#'.repeat(i) + ' '.repeat(n - i));
  }
}

module.exports = steps;
