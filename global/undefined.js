/**
 * Strict equality and undefined
 */

(function() {
  var x;
  if (x === undefined) {
    // these statements execute
  } else {
    // these statements do not execute
  }
})();

/**
 * Typeof operator and undefined
 */

(function() {
  var x;
  if (typeof x === 'undefined') {
    // these statements execute
  }
})();

(function() {
  // x has not been declared before
  if (typeof x === 'undefined') { // evaluates to true without errors
    // these statements execute
  }

  if (x === undefined) { // throws a ReferenceError

  }
})();

/**
 * Void operator and undefined
 */

(function() {
  var x;
  if (x === void 0) {
    // these statements execute
  }

  // y has not been declared before
  if (y === void 0) {
    // throws a ReferenceError (in contrast to `typeof`)
  }
})();
