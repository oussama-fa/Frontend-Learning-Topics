
export type TopicContent = {
		title: string;
		content: string;
	};
	
	export type Topic = {
		id: number;
		title: string;
		content: TopicContent[];
	};
	
	export const sidebarData: Topic[] = [
		{
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
								
								Now that we understand scope, let's see the difference between var, let, and const:
								
								- var: Function-scoped (or global-scoped if declared outside a function). It can be redeclared and reassigned. It is NOT limited to if or loop blocks.
								- let: Block-scoped. It cannot be redeclared in the same scope, but it can be reassigned.
								- const: Block-scoped. It cannot be redeclared or reassigned.
								
								Remember:
								- var → Function scope.
								- let → Block scope + reassignment allowed.
								- const → Block scope + reassignment not allowed.
								
								In modern JavaScript, prefer const by default, and use let when you need to reassign a variable. Avoid var in most cases.
					`,
				},
				{
					title: "Arrow functions",
					content: `
								Arrow functions are a shorter and simpler way to write functions in JavaScript. They do the same basic job as regular functions, but with a different syntax.
								However, there is one important difference: how they handle this.
								- Regular function: this depends on how the function is called.
								- Arrow function: this comes from the surrounding scope where the arrow function was created.
								Example:
								// Regular function
								function add(a, b) {
										return a + b;
								}
								// Arrow function
								const add = (a, b) => {
										return a + b;
								};
								// Nested arrow function
								const handleAddTicket = (newTicket: Ticket) => {
										setTickets((prev) => [newTicket, ...prev]);
								};
								Remember: Arrow functions are not exactly the same as regular functions. They also behave differently with this, and they cannot be used as constructors.
					`,
				},
				{
					title: "Functions, Parameters, Objects and Arrays",
					content: `As any other lang of coding same topics with diffrent syntax
										// Function example:
										function nameOfYourFunction() {
											// code here
										}
										// Parameters example:
										function nameOfYourFunction(youCanPassParameters) {
											// code here
										}
										// Objects example:
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
										// Arrays example:
										const arrNumber = [1, 2, 3]
										const arrString = ["Hi", "Hello"]
										const arrBoolean = [false, true, false, false, true]
										const arrObjects = [{name:"Oussama",age:22}, {name:"Ahmed",age:29}, {name:"Soufiane",age:24}]
										// and there is alot nested arrays, matrix ...
					`
				},
				{
					title:"Array methods",
					content: `.map(): accept callbacks and apply this function of every elemets one by one and return new array
										example 1:
										const arr = [1, 2, 3, 4, 5]
										const powOfTwo = arr.map(e => Math.pow(e, 2))
										console.log(powOfTwo)// [ 1, 4, 9, 16, 25 ]
										example 2:
										setPurchases((prev) =>
											prev.map((p) => {
												if (p.id !== id) return p;
												if (p.status === "Paid") return { ...p, status: "Pending" };
												return { ...p, status: "Paid" };
											})
										);
										.filter(): accept callbacks and create a new array by filtering out elemets
										example 1: // using Arrow function
											const arr = [1, 2, 3, 4, 5, 6, 7, 8]
											const evenNumbers = arr.filter(e => e % 2 === 0)
											console.log(evenNumbers) // [ 2, 4, 6, 8 ]
										example 2:
											const supplierList = suppliers.filter(s => s !== "All suppliers");
					`
				},
				{
					title:"Destructuring, Template literals & Spread operator",
					content: `- Destructuring is a short new way to declare and assign in modern way
										example :
										// OLD way
											let arr = ["First", "Secend", "Third"]
											let firstElement = arr[0] // "First"
											let secendElement = arr[1] // "Secend"
											let thirdElement = arr[2] // "Third"
										// NEW way
											let [firstElement, secendElement, thirdElement] = ["First", "Secend", "Third"]
										- Template literals execute a variable js inside a string
										example :
											const name = "Oussama"
											let content = \`Hello \${name}\` // REMARK : need to use "\`" – Backtick or grave accent
											console.log(content) // Hello Oussama
										- Spread operator, spread syntax (...), it provides a concise way to copy, combine, and pass data without mutating the original structure
										example :
										// Copying Arrays and Objects
											const originalArr = [1, 2, 3];
											const copyArr = [...originalArr]; // [1, 2, 3]
											const originalObj = { a: 1, b: 2 };
											const copyObj = { ...originalObj }; // { a: 1, b: 2 }
										// Merging and Adding Items
										

					`
				},
				// {
				//   title:"",
				//   content: ``
				// },
				// {
				//   title:"",
				//   content: ``
				// },
				// {
				//   title:"",
				//   content: ``
				// },
			],
		},
		{
			id: 2,
			title: "TypeScript Topics",
			content: [
				{
					title: "",
					content: "",
				},
			],
		},
		{
			id: 3,
			title: "React Topics",
			content: [
				{
					title: "",
					content: "",
				},
			],
		},
		{
			id: 4,
			title: "Next.js Topics",
			content: [
				{
					title: "",
					content: "",
				},
			],
		},
	];
	