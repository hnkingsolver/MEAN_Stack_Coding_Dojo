// console.log(magicalUnicorns);
//ReferenceError: magicalUnicorns is not defined....This is an example of a parsing error: Our code never ran, it stopped right there as soon as the parser noticed we were trying to use an uninitialized variable. Let's see how the var keyword affects this:
// console.log(magicalUnicorns);
// var magicalUnicorns = "awesome";
//here was no ReferenceError. Instead our console.log output undefined. Something else must be going on here. What's really happening is our var variable is being hoisted.

// In JavaScript, variable declarations are hoisted to the top of their scope. Here's how the interpreter actually reads the previous example:
// var magicalUnicorns; // the declaration gets hoisted to the top of the scope by itself
// console.log(magicalUnicorns); // we log it as undefined
// magicalUnicorns = "awesome"; // the assignment stays exactly where it was

//On the flip side, let and const do not allow us to do this.
// console.log(magicalUnicorns); 
// let magicalUnicorns = "awesome!";
//ReferenceError: Cannot access 'magicalUnicorns' before initialization
//In the above example, let will produce ReferenceErrors if we try to call the variable this way.
//-----------------------

// Hoisting in Functions

// We discuss earlier that function calls create their own scope. How do you think the next snippet will run?

var foo;                  // 'foo' is a declaration, it's global and gets hoisted
function magic(){         // 'magic()' also gets hoisted to the top
    var foo;              // here 'foo' is declared within 'magic()' and gets hoisted to the top of its scope
    foo = "hello world";  // we assign a value to our function scoped 'foo'
    console.log(foo);     // we log it as 'hello world'
}                       
foo = "bar";              // here, we assign a value to the global 'foo'
magic();                  // magic is called, the first console.log runs
console.log(foo);         // finally we log the global foo

// There are two takeaways here: Functions act like a cage, preventing declarations from being hoisted out of them. Another thing to remember is that standalone functions also get hoisted. Let's see if you can predict the output of this next example without running it:
magicalUnicorns();
var magicalUnicorns = function(){
    console.log("Will it blend?");
}
console.log("Don't breathe this!");

// Which console log fires first? Neither! We get the error 'magicalUnicorns is not a function'. Why? The variable magicalUnicorns got hoisted to the top, and we tried to invoke it before we assigned the function to it.

// Key Rules of Hoisting
// • Variable declarations (var) rise to the top of their scope like hot air balloons.

// • Functions create their own scope and act like cages, preventing declarations from rising out.

// • Assignments, or = signs, act like anchors. They stay put, no matter how the code is rearranged.

// • let and const do not get hoisted,  and will throw an error if called before they are declared. const will even throw a syntax error if it is called before it is assigned.