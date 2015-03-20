'use strict';

/**
 * Strict mode for scripts
 */

// Whole-script strict mode syntax
"use strict";
var v = "Hi!  I'm a strict mode script!";

/**
 * Strict mode for functions
 */
function strict(){
  // Function-level strict mode syntax
  'use strict';
  function nested() { return "And so am I!"; }
  return "Hi!  I'm a strict mode function!  " + nested();
}
function notStrict() { return "I'm not strict."; }
