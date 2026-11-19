import type { Topic } from "./types";

export const nextTopic: Topic = {
    id: 4,
    title: "Next.js Topics",
    content: [
        {
            title: "App Router",
            content: `
The App Router is the routing system used by modern Next.js applications. It helps us organize pages, layouts, and routes using folders and files.

How it works:
Next.js looks at the structure inside the app directory. Special files such as page.tsx and layout.tsx have specific meanings, so we do not need to manually create a router for every page.

Example structure:

src/app/
  page.tsx
  help/
    page.tsx

The root page.tsx represents the home page. The help/page.tsx file represents the Help page.

Remember:
The App Router uses folders and special files to organize the pages of your application.
            `,
        },
        {
            title: "Route structure",
            content: `
A route is the URL path that lets a user open a specific page in your application.

In Next.js App Router, folders create route segments. A page.tsx file inside a folder makes that route accessible.

Example:

src/app/help/page.tsx

This file creates the /help route. When a user visits your website and opens /help, Next.js renders the page from this file.

Other examples:
- src/app/page.tsx -> /
- src/app/help/page.tsx -> /help
- src/app/settings/page.tsx -> /settings

Remember:
Folders define URL segments, and page.tsx makes a route display a page.
            `,
        },
        {
            title: "Page components",
            content: `
A page component is the React component that Next.js displays for a specific route. In the App Router, it is defined in a page.tsx file.

How it works:
Next.js recognizes page.tsx as a special file. When the user visits the matching route, Next.js uses the component exported from that file to render the page.

Example:

export default function HelpPage() {
  return <h1>Help</h1>;
}

The default export is the component Next.js renders for this route.

Remember:
page.tsx defines the UI for a route, and its default export is the page component.
            `,
        },
        {
            title: "Client Components",
            content:`
Client Components are React components that can use browser-side features such as state, event handlers, and browser APIs.

How it works:
In the App Router, components are Server Components by default. When a component needs client-side interactivity, we mark the file with "use client" at the top. This tells Next.js that this component and its client-side dependencies belong to the client component boundary.

Example:

"use client";

import { useState } from "react";

export default function HelpPage() {
  const [open, setOpen] = useState(false);

  return (
    <button onClick={() => setOpen(!open)}>
      {open ? "Close" : "Open"}
    </button>
  );
}

This component uses useState and onClick, so it needs client-side behavior.

Remember:
Use "use client" when a component needs React state, event handlers, or browser-side features.
            `,
        },
        {
            title: "Component imports",
            content: `
Imports allow one file to use components, functions, or values that another file exports.

How it works:
A component can be written in its own file and exported. Another file imports it, then uses it as part of its JSX.

Example:

import Guides from "@/components/Guides";

export default function HelpPage() {
  return <Guides />;
}

Here, HelpPage imports Guides and renders it.

Why do we use imports?
- To split our application into files.
- To reuse components.
- To keep each file focused on its responsibility.

Remember:
Export a component from one file, import it where you need it, and then use it in JSX.
            `,
        },
        {
            title: "Path aliases",
            content: `
A path alias is a shortcut that lets us write shorter import paths instead of long relative paths.

How it works:
The project configures an alias, often @/, to point to a directory such as src/. The TypeScript and Next.js tooling resolves that shortcut to the real file location.

Example:

import Guides from "@/components/Guides";

Instead of a longer relative path like:

import Guides from "../../../../components/Guides";

The @/ shortcut is configured in the project and is not automatically the same in every project.

Remember:
Path aliases make imports easier to read. Their meaning comes from the project configuration.
            `,
        },
        {
            title: "Server vs Client Components",
            content: `
In the Next.js App Router, components are Server Components by default. Server Components render on the server and are useful for displaying content and working with server-side resources.

Client Components are used when the UI needs browser-side features such as state, click handlers, input events, or browser APIs.

Examples:
- Server Component: displaying a page's content without needing browser-side interaction.
- Client Component: a dialog that opens and closes using state, or a form that reacts to user input.

How it works:
Next.js renders Server Components on the server. Client Components are prepared for browser-side interaction. A page can combine both types of components.

Remember:
Prefer Server Components when client-side interactivity is not needed. Use Client Components for interactive parts.
            `,
        },
        {
            title: "Client-side interactions",
            content: `
Client-side interactions are actions users perform in the browser that update or respond to the UI without requiring a full page reload for every interaction.

Examples from Sellerflow:
- Opening or closing dialogs.
- Filling out forms.
- Clicking buttons.
- Updating ticket state.

How it works:
React event handlers respond to user actions. When state changes, React updates the affected UI. These interactions usually need a Client Component because they use browser-side behavior.

Example:

"use client";

const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen(true)}>Open dialog</button>

Remember:
Client-side interactions are commonly built using React state and event handlers inside Client Components.
            `,
        },
    ],
};
