import type { Topic } from "./types";

export const tsTopic: Topic = {
    id: 2,
    title: "TypeScript Topics",
    content: [
        {
            title: "Object types",
            content: `
	Object types allow us to describe the structure of an object and define what properties it must contain and what their data types should be.

	For example:

	type User = {
		name: string;
		age: number;
		isActive: boolean;
	};

	const user: User = {
		name: "Oussama",
		age: 22,
		isActive: true
	};

	Here:
	- name must be a string.
	- age must be a number.
	- isActive must be a boolean.

	If we try to assign a different type to one of these properties, TypeScript will show an error.

	Remember: Object types describe the structure of an object and the types of its properties.
				`,
			},
			{
				title: "Type aliases",
				content: `
	A type alias allows us to give a name to a type so we can reuse it instead of writing the same structure repeatedly.

	We use the "type" keyword to create a type alias.

	Example:

	export type Ticket = {
		id: string;
		subject: string;
		priority: "normal" | "high";
		message: string;
		date: string;
	};

	const newTicket: Ticket = {
		id: "1",
		subject: "Payment problem",
		priority: "high",
		message: "I have a problem with payment.",
		date: "2026-11-18"
	};

	Here, Ticket is a reusable type. We can use it whenever we need an object with the same structure.

	Remember: Type aliases allow us to create reusable names for types.
				`,
			},
			{
				title: "Array types",
				content: `
	Array types allow us to specify what kind of values an array can contain.

	We use [] after the type to indicate that we have an array of that type.

	Examples:

	const numbers: number[] = [1, 2, 3, 4];

	const names: string[] = ["Oussama", "Ahmed"];

	const isActive: boolean[] = [true, false, true];

	We can also create arrays containing objects of a specific type.

	Example:

	type Ticket = {
		id: string;
		subject: string;
	};

	const tickets: Ticket[] = [
		{ id: "1", subject: "Payment problem" },
		{ id: "2", subject: "Account problem" }
	];

	In React:

	const [tickets, setTickets] = useState<Ticket[]>([]);

	Here, Ticket[] means that tickets is an array containing Ticket objects.

	Remember:
	- number[] -> Array of numbers.
	- string[] -> Array of strings.
	- Ticket[] -> Array of Ticket objects.
				`,
			},
			{
				title: "Optional properties",
				content: `
	Optional properties allow us to define object properties that are not required.

	We use ? after the property name to make it optional.

	Example:
	type GuideCardProps = {
		title: string;
		text: string;
		subtitle?: string;
	};
	Here:
	- title is required.
	- text is required.
	- subtitle is optional.
	Both objects are valid:

	const guide1: GuideCardProps = {
		title: "Getting Started",
		text: "Learn the basics."
	};

	const guide2: GuideCardProps = {
		title: "Getting Started",
		text: "Learn the basics.",
		subtitle: "Beginner guide"
	};

	We can also use optional properties with functions:
	type Props = {
		onOpen?: () => void;
	};
	Here, onOpen is an optional property that can contain a function.


	Remember: ? means that a property is not required when creating an object.
				`,
			},
			{
				title: "Union types",
				content: `
	Union types allow a variable or property to accept more than one possible type.

	We use the | symbol, which means OR.

	Example 1:

	let id: string | number;

	id = "123"; // Valid
	id = 123;   // Valid

	Example 2:

	type Priority = "normal" | "high";

	let ticketPriority: Priority = "normal";

	ticketPriority = "high"; // Valid
	ticketPriority = "low";  // Error

	Here, ticketPriority can only contain "normal" or "high".

	We can also use union types inside object types.

	Example:

	type Ticket = {
		id: string;
		priority: "normal" | "high";
	};

	Remember: The | symbol means OR. A value can have one of the types specified in the union.
				`,
			},
			{
				title: "Nullable types",
				content: `
	Sometimes a variable doesn't contain a value yet.

	We can use null to represent the absence of a value.

	In TypeScript, we can use union types to allow a variable to contain either a specific type or null.

	Example:

	type GuideItem = {
		id: string;
		title: string;
	};

	const selectedGuide: GuideItem | null = null;

	Here:
	- GuideItem means the variable can contain a GuideItem object.
	- null means no guide is selected.

	We can assign a GuideItem later:

	selectedGuide = {
		id: "1",
		title: "Getting Started"
	};

	Or assign null again.

	In React:

	const [selectedGuide, setSelectedGuide] =
		useState<GuideItem | null>(null);

	Remember: GuideItem | null means the variable can contain a GuideItem object OR null.

	Note: With strictNullChecks enabled, TypeScript requires us to handle null before accessing properties that belong to GuideItem.
				`,
			},
			{
				title: "Function types",
				content: `
	Function types allow us to define what parameters a function receives and what type of value it returns.

	Example 1:

	const add = (a: number, b: number): number => {
		return a + b;
	};

	Here:
	- a and b must be numbers.
	- The function returns a number.

	Example 2:

	type Props = {
		onClose: () => void;
		onAddTicket: (ticket: Ticket) => void;
	};

	Here:
	- onClose is a function that receives no parameters and returns nothing.
	- onAddTicket is a function that receives a Ticket object and returns nothing.

	Example 3:

	const handleAddTicket = (newTicket: Ticket): void => {
		setTickets((prev) => [newTicket, ...prev]);
	};

	Remember:
	- (a: number) -> Function parameter.
	- : number -> Function return type.
	- () => void -> Function with no parameters that returns nothing.
				`,
			},
			{
				title: "Optional parameters",
				content: `
	Optional parameters allow us to call a function without providing every parameter.

	We use ? after the parameter name to make it optional.

	Example:

	function greet(name: string, age?: number) {
		console.log(name, age);
	}

	greet("Oussama");     // Valid
	greet("Oussama", 22); // Valid

	Here:
	- name is required.
	- age is optional.

	Important difference:

	Optional parameters and optional properties are not exactly the same.

	Optional parameter:

	function greet(name: string, age?: number) {
		console.log(name, age);
	}

	Optional property:

	type Props = {
		onOpen?: () => void;
	};

	Here, onOpen is an optional property containing a function, not an optional function parameter.

	Remember: ? makes a function parameter optional when used in a parameter list.
				`,
			},
			{
				title: "Type imports",
				content: `
	Type imports allow us to import only TypeScript types from another file.

	We use the import type syntax when we need a type definition but don't need the actual JavaScript value at runtime.

	Example:

	import type { ReactNode } from "react";

	import type { Ticket } from "./types";

	type GuideCardProps = {
		title: string;
		icon: ReactNode;
		ticket: Ticket;
	};

	Here:
	- ReactNode is a React type.
	- Ticket is a type defined in another file.
	- import type tells TypeScript that these imports are only used for type information.

	There is also another way to import a type together with normal imports:

	import SupportDialog, { type Ticket } from "@/components/help/SupportDialog";

	Here, SupportDialog is a normal import, while Ticket is imported only as a type.

	Remember: Use import type when importing something only for its type information.
				`,
			},
			{
				title: "Type assertions",
				content: `
	Sometimes TypeScript cannot automatically understand the exact type of a value.

	Type assertions allow us to tell TypeScript how we want it to interpret that value.

	We use the as keyword.

	Example 1:

	let value: unknown = "Hello";

	let message = value as string;

	Here, we tell TypeScript to treat value as a string.

	Example 2:

	type Priority = "normal" | "high";

	onChange={(e) =>
		setPriority(e.target.value as Priority)
	};

	Here, TypeScript normally understands e.target.value as a string.

	But we know that our priority should only be "normal" or "high".

	The as Priority assertion tells TypeScript to treat the value as that specific type.

	Important:
	- Type assertions do not convert a value.
	- They do not validate a value at runtime.
	- They only tell TypeScript how to interpret a value.

	Remember: as allows us to tell TypeScript what type we believe a value has. Use it carefully.
				`,
			},
			{
				title: "Generic types",
				content: `
	Generics allow us to create reusable functions, types, and components that work with different data types without losing type safety.

	Think of a generic as a placeholder for a type.

	We commonly use T to represent this placeholder.

	Example 1:

	function getFirstItem<T>(items: T[]): T {
		return items[0];
	}

	const firstNumber = getFirstItem<number>([1, 2, 3]);

	const firstName = getFirstItem<string>(["Ali", "Oussama"]);

	Here:
	- T is a placeholder for a type.
	- When we pass number, T becomes number.
	- When we pass string, T becomes string.

	Example 2: Generic types

	type Response<T> = {
		data: T;
		success: boolean;
	};

	const ticketResponse: Response<Ticket> = {
		data: {
			id: "1",
			subject: "Payment problem",
			priority: "high",
			message: "Payment failed.",
			date: "2026-11-18"
		},
		success: true
	};

	Here, Response can work with different types of data.

	Example 3: React useState

	const [tickets, setTickets] = useState<Ticket[]>([]);

	Here, we tell useState that the state should contain an array of Ticket objects.

	Remember: Generics allow us to reuse code with different types while keeping type checking.
				`,
			},
			{
				title: "Utility types",
				content: `
	Utility types are built-in TypeScript tools that allow us to modify existing types or create new types from them.

	Instead of writing a new type from scratch, we can reuse and transform an existing one.

	Some important utility types:

	1. Partial<T>

	Makes all properties optional.

	Example:

	type Ticket = {
		subject: string;
		message: string;
	};

	type TicketUpdate = Partial<Ticket>;

	Now both subject and message are optional.

	const update: TicketUpdate = {
		subject: "New subject"
	};

	2. Record<K, T>

	Creates an object type with specific keys and value types.

	Example:

	type TicketErrors = Record<
		"subject" | "message",
		string
	>;

	This is equivalent to:

	type TicketErrors = {
		subject: string;
		message: string;
	};

	3. Pick<T, K>

	Creates a new type by selecting specific properties from an existing type.

	Example:

	type TicketPreview = Pick<Ticket, "subject">;

	Now TicketPreview only contains the subject property.

	4. Omit<T, K>

	Creates a new type by removing specific properties from an existing type.

	Example:

	type TicketWithoutMessage = Omit<Ticket, "message">;

	Now TicketWithoutMessage contains all Ticket properties except message.

	5. Partial + Record

	We can combine utility types:

	const next: Partial<
		Record<"subject" | "message", string>
	> = {};

	Here:
	- Record creates an object with subject and message keys.
	- Partial makes those properties optional.
	- Both properties must contain strings when provided.

	Remember: Utility types help us reuse and transform existing types instead of repeating definitions.
				`,
			},
			{
				title: "React types",
				content: `
	React types are TypeScript types provided by React that help us describe React-specific values and events.

	They help us correctly type component props, children, forms, mouse events, and other React features.

	Some common examples:

	1. ReactNode

	Used for anything React can render as a child.

	Example:

	import type { ReactNode } from "react";

	type Props = {
		children: ReactNode;
	};

	function Card({ children }: Props) {
		return <div>{children}</div>;
	}

	2. React.FormEvent

	Used to type form submission events.

	Example:

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
	};

	3. React.MouseEvent

	Used to type mouse events.

	Example:

	const handleClick = (
		e: React.MouseEvent<HTMLButtonElement>
	) => {
		console.log("Button clicked");
	};

	4. React.ChangeEvent

	Used to type input change events.

	Example:

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		console.log(e.target.value);
	};

	Remember:
	- ReactNode -> Anything React can render as a child.
	- React.FormEvent -> Form events.
	- React.MouseEvent -> Mouse events.
	- React.ChangeEvent -> Input change events.

	These types help TypeScript understand what kind of React values and events we are working with.
				`,
			},
		],
	};
