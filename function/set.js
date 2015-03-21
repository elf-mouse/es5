/**
 * {set prop(val) { . . . }}
 * {set [expression](val) { . . . }}
 */

// Defining a setter on new objects in object initializers
var o = {
  set current(str) {
    this.log[this.log.length] = str;
  },
  log: []
}

// Removing a setter with the `delete` operator
delete o.current;

// Defining a setter on existing objects using `defineProperty`
var o = {
  a: 0
};

Object.defineProperty(o, "b", {
  set: function(x) {
    this.a = x / 2;
  }
});

o.b = 10; // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
console.log(o.a) // 5

// Using a computed property name
var expr = "foo";

var obj = {
  baz: "bar",
  set [expr](v) {
    this.baz = v;
  }
};

console.log(obj.baz); // "bar"
obj.foo = "baz"; // run the setter
console.log(obj.baz); // "baz"
