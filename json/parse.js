/**
 * JSON.parse(text[, reviver])
 */

// Using `JSON.parse()`
JSON.parse('{}');              // {}
JSON.parse('true');            // true
JSON.parse('"foo"');           // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null');            // null

// Using the `reviver` parameter
JSON.parse('{"p": 5}', function(k, v) {
  if (k === '') { return v; } // if topmost value, return it,
  return v * 2;               // else return v * 2.
});                           // { p: 10 }

JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', function(k, v) {
  console.log(k); // log the current property name, the last is "".
  return v;       // return the unchanged property value.
});

// 1
// 2
// 4
// 6
// 5
// 3
// ""

// `JSON.parse()` does not allow trailing commas
// both will throw a SyntaxError
JSON.parse("[1, 2, 3, 4, ]");
JSON.parse("{ \"foo\" : 1, }");
