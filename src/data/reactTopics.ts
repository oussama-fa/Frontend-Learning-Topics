import type { Topic } from "./types";

export const reactTopic: Topic = {
    id: 3,
    title: "React Topics",
    content: [
        {
            title: "Functional components",
            content: `
A functional component is a JavaScript function that returns UI (JSX).

Example from Sellerflow:

function HelpPage() {
  return <div>Help page</div>;
}

function Guides() {
  return <div>Guides section</div>;
}

React components allow us to split our UI into small, reusable parts.

Remember:
- A component is a function.
- It returns JSX.
- Component names start with a capital letter.
            `,
        },
        {
            title: "JSX",
            content: `
JSX allows us to write HTML-like syntax inside JavaScript.

Example:

const message = "Hello";

return <h1>{message}</h1>;

Curly braces {} allow us to use JavaScript expressions inside JSX.

Remember:
JSX is how we describe what React should display.
            `,

        },
        {
            title: "Component composition",
            content: `
Component composition means building a bigger component using smaller components.

Example:

function HelpPage() {
  return (
    <>
      <h1>Help</h1>
      <Guides />
    </>
  );
}

HelpPage uses Guides inside it.

Remember:
Build complex interfaces by combining simple components.
            `,

        },
        {
            title: "Props",
            content: `
Props allow a parent component to send data to a child component.

Example:

function SupportDialog({ title }) {
  return <h2>{title}</h2>;
}

<SupportDialog title="Support" />

Remember:
Props are inputs that a component receives from its parent.
            `,

        },
        {
            title: "State",
            content: `
State is data that a component remembers. When state changes, React updates the UI.

Example:

const [tickets, setTickets] = useState([]);

Remember:
State stores data that can change while the application is running.
            `,

        },
        {
            title: "State updates",
            content: `
We use the setter function to update state.

Example:

setTickets(newTickets);

React updates the component when the state changes.

Remember:
Never change state directly. Use the setter function.
            `,

        },
        {
            title: "Functional state updates",
            content: `
When the new state depends on the previous state, use a function.

Example:

setTickets((prev) => [...prev, newTicket]);

prev represents the previous state.

Remember:
Functional updates are safer when the new state depends on the old state.
            `,

        },
        {
            title: "Controlled components",
            content: `
A controlled input is an input whose value is controlled by React state.

Example:

<input
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>

Remember:
React state controls the input value.
            `,

        },
        {
            title: "Event handlers",
            content: `
Event handlers are functions that run when the user interacts with the UI.

Example:

<button onClick={handleClick}>Click</button>

Remember:
onClick handles clicks, and onChange handles input changes.
            `,

        },
        {
            title: "Conditional rendering",
            content: `
Conditional rendering means displaying UI depending on a condition.

Example:

{tickets.length === 0 && <p>No tickets yet.</p>}

Remember:
Use conditions to decide what React should display.
            `,

        },
        {
            title: "List rendering and keys",
            content: `
We use map() to render multiple elements from an array.

Example:

guides.map((guide) => (
  <GuideCard key={guide.id} guide={guide} />
))

The key helps React identify each item.

Remember:
Use a unique key when rendering lists.
            `,

        },
        {
            title: "State lifting",
            content: `
State lifting means moving state to a parent component so multiple components can use it.

In Sellerflow, tickets are stored in HelpPage and passed to other components.

Remember:
Keep shared state in the closest common parent.
            `,

        },
        {
            title: "Parent-child communication",
            content: `
A parent can pass a function to a child through props.

Example:

<SupportDialog onAddTicket={handleAddTicket} />

The child calls onAddTicket to send information to the parent.

Remember:
Props allow communication from parent to child, and callbacks allow children to request changes from parents.
            `,

        },
        {
            title: "Component reuse",
            content: `
Reusable components can be used in different parts of the application.

Example:

<GuideCard guide={guide} />

Instead of repeating the same UI, we create a component once and reuse it.

Remember:
Reusable components reduce repetition and make code easier to maintain.
            `,

        },
        {
            title: "Fragments",
            content: `
Fragments allow us to return multiple elements without adding an extra HTML element.

Example:

<>
  <h1>Help</h1>
  <p>Welcome</p>
</>

Remember:
Fragments group elements without adding unnecessary DOM elements.
            `,

        },
        {
            title: "Custom hooks",
            content: `
Custom hooks allow us to reuse stateful logic between components.

Example (future improvement):

function useTickets() {
  const [tickets, setTickets] = useState([]);
  return { tickets, setTickets };
}

Remember:
Custom hooks help organize and reuse React logic.
            `,

        },
        {
            title: "Component lifecycle and effects",
            content: `
useEffect allows us to run side effects, such as fetching data or updating something outside React.

Example:

useEffect(() => {
  console.log("Component rendered");
}, []);

The empty array means the effect runs after the initial render.

Remember:
useEffect is used for side effects, not for every state change.
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

Recommended:
Start with the Arabic video, then watch the English course and practice the concepts.
            `,

        },
    ],
};
