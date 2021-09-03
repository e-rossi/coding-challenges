/** Write a function that logs the numbers from 1 to n,
 * but for multiples of three log "fizz" and for multiples
 * of five log "buzz". For multiples of both three and five,
 * log "fizzbuzz".
 * --- Examples ---
 * fizzBuzz(10)
 * > 1
 * > 2
 * > fizz
 * > 4
 * > buzz
 * > fizz
 * > 7
 * > 8
 * > fizz
 * > buzz
 */

function fizzBuzz(n) {
  for (let count = 1; count <= n; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      console.log('fizzbuzz');
    } else if (count % 3 === 0) {
      console.log('fizz');
    } else if (count % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(count);
    }
  }
}

module.exports = fizzBuzz;
