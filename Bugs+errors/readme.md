# Bugs and Errors

## Eloquent Javascript Book

### Chapter 8 : Bugs and Errors => Notes

Bugs --> Flaws in computer programs
Debugging --> process of finding mistakes in program

Strict Mode --> Make js little strict
"use strict" at top of the file, or function body

Example :
function canYouSpotTheProblem() {
"use strict";
for (counter = 0; counter < 10; counter++) {
console.log("Happy happy");
}
}
canYouSpotTheProblem();
// → ReferenceError: counter is not defined

We forget to put let in front of counter, js quitely creates a global binding and uses that. In strict mode, an arror is reported iinstead. This is very helpful. It should be noted, though, that this doesn't work when the binding in question already exists as a global binding. In that case, the loop will still quitely overwrite the value of the binding.

`this` binding holds the value `undefined` in functions that are not called as methods.

When making such
a call outside of strict mode, this refers to the global scope object, which is
an object whose properties are the global bindings. So if you accidentally call
a method or constructor incorrectly in strict mode, JavaScript will produce
an error as soon as it tries to read something from this, rather than happily
writing to the global scope.

-

### Types

### Testing

### Debugging

### Error Propagation

### Exceptions

### Selective Catching

### Assertions

### Summary

Throwing exceptions cause call staack to be unwound until the next enclsing try/catch block or until the bottom of stack.

The exception value will be given to catch block that catches it, which should verify what should varify that it is actually the expected kind of exception and then do something with it.

To help address the unpredictable control flow caused be exceptions, `finally` blocks can be used to ensure that a piece of code always runs when a block finishes.

Exercise
