import type { Topic } from "./types";

export const reactTopic: Topic = {
    id: 3,
    title: "React Topics",
    content: [
        {
            title: "Functional components",
            content: `
A React component is a JavaScript function that describes a part of the user interface (UI).

Instead of writing the entire page in one place, we split it into smaller components. Each component can have its own purpose.

Example:

function HelpPage() {
  return <div>Help page</div>;
}

function Guides() {
  return <div>Guides section</div>;
}

HelpPage and Guides are components. HelpPage can use Guides to build its page.

Why do we use components?
- To split a big UI into smaller pieces.
- To make code easier to read and maintain.
- To reuse the same UI in different places.

Remember:
A component is a function that returns UI. Component names start with a capital letter.
            `,
        },
        {
            title: "JSX",
            content: `
JSX is a syntax that lets us write HTML-like elements inside JavaScript.

React uses JSX to describe what the UI should look like. It is not exactly HTML; it gets transformed into JavaScript that React understands.

Example:

const message = "Hello";

return <h1>{message}</h1>;

We write JavaScript expressions inside JSX using curly braces {}. This lets us display variables, call functions, and use conditions.

Example:

<h1>{guide.title}</h1>

Remember:
JSX lets us describe UI using HTML-like syntax while still using JavaScript.
            `,
        },
        {
            title: "Component composition",
            content: `
Component composition means creating a larger component by combining smaller components.

For example, HelpPage can contain a title, Guides, and a SupportDialog. Each part is handled by its own component.

Example:

function HelpPage() {
  return (
    <>
      <h1>Help</h1>
      <Guides />
      <SupportDialog />
    </>
  );
}

HelpPage does not need to know every detail of how Guides or SupportDialog works. It simply uses them.

Why is this useful?
- Each component has a clear responsibility.
- Components can be changed separately.
- The page becomes easier to understand.

Remember:
Build a page by combining smaller components instead of putting everything in one giant component.
            `,
        },
        {
            title: "Props",
            content: `
Props (properties) are the data a parent component sends to a child component.

They allow a component to be reused with different data or settings.

Example:

function SupportDialog({ title }) {
  return <h2>{title}</h2>;
}

<SupportDialog title="Contact Support" />

Here, title is a prop. SupportDialog receives it and displays its value.

Props are similar to function parameters: the parent gives the component information to use.

Remember:
Props pass data from parent to child. A child should not directly change the parent's props.
            `,
        },
        {
            title: "State",
            content: `
State is data a component remembers while it is running. When state changes, React can render the UI again to show the new value.

We create state using useState.

Example:

const [tickets, setTickets] = useState([]);

tickets is the current state value.
setTickets is the function used to update it.
[] is the initial value, meaning we start with an empty array.

Why use state?
If a user adds a ticket, we want the UI to update and display it. State tells React that this data changed.

Remember:
Use state for data that changes and affects what the user sees.
            `,
        },
        {
            title: "State updates",
            content: `
To update state, we use the setter function returned by useState.

Example:

setTickets(newTickets);

When React receives a state update, it renders the component again using the new state value, so the UI can show the updated tickets.

Do not change the state array directly:

tickets.push(newTicket); // avoid

Instead, create a new array and update the state:

setTickets([...tickets, newTicket]);

Remember:
Do not mutate React state directly. Use its setter and create a new value.
            `,
        },
        {
            title: "Functional state updates",
            content: `
Sometimes the new state depends on the previous state. In that case, pass a function to the setter.

Example:

setTickets((prev) => [...prev, newTicket]);

prev represents the previous state value. React uses it to calculate the next state.

This is safer than using tickets directly when updates may happen close together, because the function receives the latest state React provides.

Remember:
If the next state depends on the previous state, use the functional update form.
            `,
        },
        {
            title: "Controlled components",
            content: `
A controlled input is an input whose value is stored in React state.

Example:

const [title, setTitle] = useState("");

<input
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>

value={title} makes React state control what the input displays.
onChange runs when the user types.
setTitle updates the state with the new text.

The input and state stay synchronized: typing changes state, and state determines the input value.

Remember:
A controlled input uses state for its value and an event handler to update that state.
            `,
        },
        {
            title: "Event handlers",
            content: `
An event is something that happens because of user interaction, such as clicking a button or typing in an input.

An event handler is the function that runs in response to that event.

Example:

function handleClick() {
  console.log("Button clicked");
}

<button onClick={handleClick}>Click me</button>

onClick tells React to call handleClick when the user clicks the button.

For inputs, onChange runs when the input value changes.

Remember:
Event handlers connect user actions to your application logic.
            `,
        },
        {
            title: "Conditional rendering",
            content: `
Conditional rendering means showing different UI depending on a condition.

Example:

{tickets.length === 0 && <p>No tickets yet.</p>}

The && operator means that if the condition on the left is true, React displays the element on the right.

If tickets is empty, the message appears. If tickets contains items, the message is not displayed.

Another example:

{isOpen ? <SupportDialog /> : null}

Remember:
Use conditions when the UI should change depending on data or state.
            `,
        },
        {
            title: "List rendering and keys",
            content: `
List rendering means displaying many UI elements from an array of data.

We often use map() to transform every array item into a component.

Example:

guides.map((guide) => (
  <GuideCard key={guide.id} guide={guide} />
))

map() visits each guide and returns a GuideCard for it. React then displays all the returned components.

When React renders a list, it needs a way to identify each item between renders. The key helps React know which item was added, removed, or changed.

guide.id is used as the key because it uniquely identifies that guide.

Why not use the array index?
Indexes can change when items are added, removed, or reordered. Stable IDs help React track the correct item.

Remember:
Use map() to render arrays, and give each item a unique, stable key.
            `,
        },
        {
            title: "State lifting",
            content: `
State lifting means moving state from a child component into a parent component when more than one component needs to use or update that state.

In Sellerflow, HelpPage can hold the tickets state and pass the tickets or functions to child components that need them.

This lets the parent coordinate the data shared between its children.

Remember:
When components need to share state, move it to their closest common parent.
            `,
        },
        {
            title: "Parent-child communication",
            content: `
A parent component can pass data and functions to a child using props.

A child can call a function it received from its parent to request that the parent performs an action.

Example:

<SupportDialog onAddTicket={handleAddTicket} />

SupportDialog receives onAddTicket as a prop and calls it when the user submits a ticket. The function itself is defined in the parent, so the parent can update its tickets state.

This is a common way for a child to communicate an action back to its parent.

Remember:
The parent passes a callback down; the child calls it when something happens.
            `,
        },
        {
            title: "Component reuse",
            content: `
Component reuse means using the same component in multiple places instead of writing the same UI code repeatedly.

Example:

<GuideCard guide={guide} />

GuideCard can display different guides depending on the guide prop it receives.

We write the card's UI once, then reuse it for each guide.

Why is this useful?
- Less repeated code.
- Consistent UI.
- Easier updates: changing the component can update every place it is used.

Remember:
Create reusable components for UI patterns that appear more than once.
            `,
        },
        {
            title: "Fragments",
            content: `
A React component must return one parent structure. A Fragment lets us group multiple elements without adding another HTML element to the page.

Example:

return (
  <>
    <h1>Help</h1>
    <p>Welcome</p>
  </>
);

The <> and </> syntax is shorthand for a React Fragment.

Unlike a div, a Fragment does not create an extra DOM element.

Remember:
Use Fragments to group elements when you do not need an extra HTML wrapper.
            `,
        },
        {
            title: "Custom hooks",
            content: `
A custom hook is a JavaScript function whose name starts with use and that can use React hooks. It lets us reuse React logic between components.

Example (possible future improvement):

function useTickets() {
  const [tickets, setTickets] = useState([]);
  return { tickets, setTickets };
}

A component could call useTickets() to access the ticket state and its setter.

Custom hooks are useful when a component has logic that can be separated and reused. They do not create UI by themselves.

Remember:
Custom hooks reuse logic, not UI. Their names conventionally start with use.
            `,
        },
        {
            title: "Component lifecycle and effects",
            content: `
Components render when React needs to display or update UI. Sometimes we also need to perform side effects, such as fetching data, subscribing to an event, or interacting with something outside React. useEffect is used for these tasks.

Example:

useEffect(() => {
  console.log("HelpPage appeared");
}, []);

The effect runs after the component renders. The empty dependency array means it runs after the initial mount (and may run an extra time in development Strict Mode).

If dependencies are included, React runs the effect again when those dependencies change.

Remember:
useEffect is for side effects and synchronization with external systems, not for every piece of logic.
            `,
        },
        {
            title: "YouTube videos",
            content: `
Arabic:
React شرح شامل في 12 دقيقة:
https://www.youtube.com/watch?v=ztEtLzzUYPY

English:
React Crash Course - Traversy Media:
https://www.youtube.com/watch?v=LDB4uaJ87e0

Suggested order:
Watch the Arabic explanation first, then use the English course to reinforce components, props, state, events, and rendering lists.
            `,
        },
    ],
};
