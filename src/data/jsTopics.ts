import type { Topic } from "./types";

export const jsTopic: Topic = {
	id: 1,
    title: "JavaScript Topics",
    content: [
        {
            title: "'let' vs 'var' vs 'const'",
            content: `
The main idea is scope: where a variable is accessible after you declare it.

There are two main types of scope:

- Global scope: A variable declared outside functions and blocks can be accessed from different parts of the code (depending on the environment).

- Local scope: A variable declared inside a function or block is only accessible within that scope.

For example, an if statement, while loop, or {} creates a block scope. Functions also create their own scope.

Now let's see the difference between var, let, and const:

- var: Function-scoped (or global-scoped if declared outside a function). It can be redeclared and reassigned. It is NOT limited to if or loop blocks.

- let: Block-scoped. It cannot be redeclared in the same scope, but it can be reassigned.

- const: Block-scoped. It cannot be redeclared or reassigned.

Example:

var name = "Oussama";
var name = "Ahmed"; // Valid

let age = 20;
age = 22; // Valid

const country = "Morocco";
country = "France"; // Error

// Block scope example:

if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a); // 10
console.log(b); // Error
console.log(c); // Error

Remember:

- var -> Function scope.
- let -> Block scope + reassignment allowed.
- const -> Block scope + reassignment not allowed.

In modern JavaScript, prefer const by default, and use let when you need to reassign a variable. Avoid var in most cases.
            `,
        },
        {
            title: "Arrow functions",
            content: `
Arrow functions are a shorter and simpler way to write functions in JavaScript. They do the same basic job as regular functions, but with a different syntax.

Example 1: Regular function

function add(a, b) {
    return a + b;
}

Example 2: Arrow function

const add = (a, b) => {
    return a + b;
};

We can also write a shorter version when the function has only one expression:

const add = (a, b) => a + b;

Example 3: Arrow function with one parameter

const square = number => number * number;

console.log(square(5)); // 25

However, there are important differences between regular functions and arrow functions, especially how they handle this.

- Regular function: this depends on how the function is called.

- Arrow function: this comes from the surrounding scope where the arrow function was created.

Example 4: Nested arrow function

const handleAddTicket = (newTicket) => {
    setTickets((prev) => [newTicket, ...prev]);
};

Here, the second arrow function is passed as a callback to setTickets.

Important differences:

- Arrow functions cannot be used as constructors with new.
- They don't have their own this.
- They don't have their own arguments object.

Remember: Arrow functions provide a shorter way to write functions, but they are not exactly the same as regular functions.
            `,
        },
        {
            title: "Functions, Parameters, Objects and Arrays",
            content: `
These are fundamental JavaScript concepts. Like other programming languages, they allow us to organize code, pass information, and store data, but with JavaScript syntax.

1. Functions

A function is a reusable block of code that performs a specific task.

Example:

function sayHello() {
    console.log("Hello Oussama!");
}

sayHello();

2. Parameters

Parameters allow us to pass information to a function.

Example:

function greet(name) {
    console.log("Hello " + name);
}

greet("Oussama"); // Hello Oussama

Here, name is a parameter and "Oussama" is an argument.

3. Objects

An object is a collection of properties (key-value pairs). It can also contain functions, which are called methods.

Example:

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2024,
    isRunning: false,

    // A function inside an object is called a method
    start: function() {
        this.isRunning = true;
        console.log("Engine started!");
    }
};

car.start();

console.log(car.brand); // Toyota
console.log(car.isRunning); // true

4. Arrays

An array allows us to store multiple values inside one variable.

Example:

const arrNumber = [1, 2, 3];

const arrString = ["Hi", "Hello"];

const arrBoolean = [false, true, false];

const arrObjects = [
    { name: "Oussama", age: 22 },
    { name: "Ahmed", age: 29 },
    { name: "Soufiane", age: 24 }
];

We can access array elements using their index:

console.log(arrNumber[0]); // 1
console.log(arrString[1]); // Hello

Remember:

- Function -> Reusable block of code.
- Parameter -> Variable defined in a function.
- Argument -> Actual value passed to a function.
- Object -> Collection of key-value pairs.
- Array -> Collection of values stored in order.
            `,
        },
        {
            title: "Array methods",
            content: `
JavaScript provides built-in array methods that allow us to manipulate and work with arrays without writing everything from scratch.

Two very common methods are map() and filter().

1. map()

map() accepts a callback function and applies it to every element of an array.

It returns a NEW array containing the results.

Example 1:

const arr = [1, 2, 3, 4, 5];

const powOfTwo = arr.map(e => Math.pow(e, 2));

console.log(powOfTwo);
// [1, 4, 9, 16, 25]

Here, map() takes each element, calculates its power of two, and stores the result in a new array.

Example 2: Using map() in React

setPurchases((prev) =>
    prev.map((p) => {
        if (p.id !== id) return p;

        if (p.status === "Paid")
            return { ...p, status: "Pending" };

        return { ...p, status: "Paid" };
    })
);

Here, map() goes through every purchase:
- If the purchase ID doesn't match, it returns the original purchase.
- If the ID matches, it returns a new object with the updated status.

2. filter()

filter() accepts a callback function and creates a NEW array containing only the elements that pass the condition.

Example 1:

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = arr.filter(e => e % 2 === 0);

console.log(evenNumbers);
// [2, 4, 6, 8]

Here, filter() keeps only numbers that are divisible by 2.

Example 2:

const supplierList = suppliers.filter(
    s => s !== "All suppliers"
);

Here, we create a new array without the "All suppliers" element.

Important:
- map() transforms every element and returns a new array.
- filter() selects elements based on a condition and returns a new array.
- Neither method changes the original array.

Remember:
- map() -> Transform elements.
- filter() -> Keep elements that match a condition.
            `,
        },
        {
            title: "Destructuring, Template literals & Spread operator",
            content: `
These are JavaScript features that make working with arrays, objects, and strings easier and cleaner.

1. Destructuring

Destructuring is a feature that allows us to extract values from arrays or properties from objects and store them in variables in a shorter and cleaner way.

Example 1: Array destructuring

// OLD way

const arr = ["First", "Second", "Third"];

const firstElement = arr[0];
const secondElement = arr[1];
const thirdElement = arr[2];

// NEW way

const [first, second, third] = arr;

console.log(first);  // First
console.log(second); // Second
console.log(third);  // Third

Example 2: Object destructuring

const user = {
    name: "Oussama",
    age: 22
};

// OLD way

const name = user.name;
const age = user.age;

// NEW way

const { name, age } = user;

console.log(name); // Oussama
console.log(age);  // 22

2. Template literals

Template literals allow us to insert variables and expressions inside strings using backticks (\`).

We use \${} to insert JavaScript expressions inside the string.

Example:

const name = "Oussama";
const age = 22;

const content = \`Hello \${name}, you are \${age} years old.\`;

console.log(content);
// Hello Oussama, you are 22 years old.

We can also use expressions:

const a = 10;
const b = 20;

console.log(\`Result: \${a + b}\`);
// Result: 30

3. Spread operator

The spread operator (...) allows us to expand elements of an array or properties of an object.

It's commonly used to copy arrays and objects, merge them, or add new elements.

Example 1: Copying arrays and objects

const originalArr = [1, 2, 3];
const copyArr = [...originalArr];

const originalObj = { a: 1, b: 2 };
const copyObj = { ...originalObj };

Example 2: Adding items

const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);
// [1, 2, 3, 4, 5]

Example 3: Updating an object

const user = {
    name: "Oussama",
    age: 22
};

const updatedUser = {
    ...user,
    age: 23
};

console.log(updatedUser);
// { name: "Oussama", age: 23 }

Important: Spread creates a shallow copy, not a deep copy. Nested objects and arrays can still share references.

Remember:
- Destructuring -> Extract values from arrays or objects.
- Template literals -> Insert expressions inside strings.
- Spread (...) -> Expand and copy array elements or object properties.
            `,
        },
        {
            title: "Optional chaining & Nullish coalescing",
            content: `
These operators help us safely access object properties and provide default values when something is missing.

1. Optional chaining (?.)

Optional chaining allows us to safely access object properties, nested properties, or call functions without causing an error when a value is null or undefined.

Example 1: Without optional chaining

const user = null;

console.log(user.name); // Error

Example 2: With optional chaining

const user = null;

console.log(user?.name); // undefined

Here, JavaScript checks whether user is null or undefined before trying to access name.

Example 3: Nested properties

const user = {
    name: "Oussama",
    address: {
        city: "Fez"
    }
};

console.log(user.address?.city); // Fez

Optional chaining is especially useful when working with API data, where some properties might not exist.

2. Nullish coalescing (??)

Nullish coalescing allows us to provide a default value when the left-hand side is null or undefined.

Example:

const user = {
    name: "Oussama"
};

const age = user.age ?? 18;

console.log(age); // 18

Here, age doesn't exist, so its value is undefined. The ?? operator provides 18 as the default value.

Important difference between ?? and ||

The || operator uses the right-hand value when the left-hand value is falsy.

The ?? operator uses the right-hand value only when the left-hand value is null or undefined.

Example:

const age = 0;

console.log(age || 18); // 18
console.log(age ?? 18); // 0

3. Real project example:

export type GuideCardProps = {
    title: string;
    text: string;
    tone: Tone;
    icon: ReactNode;
    onOpen?: () => void;
    className?: string;
};

const displayText = label ?? (config.label || status);

Here, ?? provides a default value when label is null or undefined.

Remember:
- ?. -> Safely access properties or call functions.
- ?? -> Provide a default value only for null or undefined.
- || -> Provide a default value for any falsy value.
            `,
        },
        {
            title: "Ternary operator & Logical AND (&&)",
            content: `
These operators allow us to execute or display code depending on a condition.

1. Ternary operator

The ternary operator is a shorter way to write an if...else statement.

Syntax:

condition ? expressionIfTrue : expressionIfFalse;

Example:

const age = 22;

const status = age >= 18 ? "Adult" : "Minor";

console.log(status); // Adult

Here:
- If the condition is true, the first expression is executed.
- If the condition is false, the second expression is executed.

Example: React conditional rendering

{inStock ? (
    <h1>In Stock</h1>
) : (
    <h3>Out of Stock</h3>
)}

Here, React displays one element depending on the value of inStock.

2. Logical AND (&&)

The && operator executes or returns the right-hand expression only when the left-hand condition is truthy.

Example:

const isAdmin = true;

isAdmin && console.log("Welcome Admin");
// Welcome Admin

If isAdmin is false, the right-hand expression is not evaluated.

Example: React conditional rendering

{inStock && (
    <h1>In Stock</h1>
)}

Here:
- If inStock is true, React displays the h1.
- If inStock is false, React doesn't display it.

Important: In JavaScript, && returns an operand rather than always returning true or false.

Remember:
- condition ? A : B -> Choose between two expressions.
- condition && A -> Execute or return A only when the condition is truthy.
            `,
        },
        {
            title: "Callback function",
            content: `
A callback function is a function passed as an argument into another function.

The receiving function can execute the callback when it needs to.

Example 1:

function getUsername() {
    return "OUSSAMA";
}

function Hi(anyName) {
    console.log(anyName());
}

Hi(getUsername);

// OUSSAMA

Here:
- getUsername is a function that returns a username.
- We pass getUsername to Hi without calling it.
- Hi receives the function and executes it using anyName().

Example 2: Using an arrow function as a callback

function calculate(a, b, callback) {
    return callback(a, b);
}

const result = calculate(10, 5, (x, y) => x + y);

console.log(result); // 15

Here, the arrow function is passed as a callback to calculate().

Example 3: Array methods

const numbers = [1, 2, 3];

const doubled = numbers.map((number) => {
    return number * 2;
});

console.log(doubled); // [2, 4, 6]

Here, the function passed to map() is a callback. map() executes it for every element.

Remember: A callback is a function passed to another function so that the receiving function can execute it.
            `,
        },
        {
            title: "Event bubbling & Event handling",
            content: `
1. Event handling

Event handling is the process of detecting and responding to events that happen in the browser.

Examples:
- Clicking a button.
- Typing in an input.
- Submitting a form.
- Moving the mouse.
- Loading a page.
- Pressing a keyboard key.

We can listen for events using addEventListener().

Example:

const button = document.querySelector("button");

button.addEventListener("click", () => {
    console.log("Button clicked!");
});

Here, whenever the user clicks the button, the callback function is executed.

2. Event bubbling

Event bubbling is a behavior in JavaScript where an event starts from the element that triggered it (the target element) and then propagates upward through its parent elements until it reaches the document.

Example:

<div id="parent">
    <button id="button">
        <span>Click me</span>
    </button>
</div>

Here is how bubbling works:

- If we click the div, the div event is triggered.
- If we click the button, the button event is triggered first, then the div event.
- If we click the span, the span event is triggered first, then the button event, then the div event.

The event travels from the child to its parents.

Example:

const parent = document.querySelector("#parent");
const button = document.querySelector("#button");

parent.addEventListener("click", () => {
    console.log("Parent clicked");
});

button.addEventListener("click", () => {
    console.log("Button clicked");
});

If we click the button, the output is:

Button clicked
Parent clicked

3. Stopping event bubbling

We can stop an event from propagating to its parent elements using stopPropagation().

Example:

const button = document.querySelector("#button");

button.addEventListener("click", (event) => {
    event.stopPropagation();

    console.log("Button clicked");
});

Now, clicking the button won't trigger the parent's click listener through bubbling.

Remember:
- Event handling -> Detecting and responding to browser events.
- Event bubbling -> An event propagates from the target element up through its parents.
- stopPropagation() -> Stops the event from continuing to propagate.
            `,
        },
    ]
};
