/**
 * {get prop() { ... } }
 * {get [expression]() { ... } }
 */

// Defining a getter on new objects in object initializers
var log = ['test'];
var obj = {
  get latest() {
    if (log.length == 0) return undefined;
    return log[log.length - 1]
  }
}
console.log(obj.latest); // Will return "test".

// Deleting a getter using the `delete` operator
delete obj.latest;

// Defining a getter on existing objects using `defineProperty`
var o = {
  a: 0
}

Object.defineProperty(o, "b", {
  get: function() {
    return this.a + 1;
  }
});

console.log(o.b) // Runs the getter, which yields a + 1 (which is 1)

// Using a computed property name
var expr = "foo";

var obj = {
  get[expr]() {
    return "bar";
  }
};

console.log(obj.foo); // "bar"
