/**
 * var timeInMs = Date.now();
 */

if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}
