import type { Topic } from "./types";

export const nextTopic: Topic = {
    id: 4,
    title: "Next.js Topics",
    content: [
        {
            title: "App Router",
            content: `
The App Router is Next.js's modern routing system.

Example structure:

src/app/
  page.tsx
  help/
    page.tsx

Remember:
Folders define routes, and page.tsx defines the page UI.
            `,
        },
        {
            title: "Route structure",
            content: `
Next.js uses folders to organize routes.

Example:

src/app/help/page.tsx

This file creates the /help route.

Remember:
The folder structure determines your application's URLs.
            `,

        },
        {
            title: "Page components",
            content: `
A page.tsx file defines the UI displayed for a specific route.

Example:

export default function HelpPage() {
  return <h1>Help</h1>;
}

Remember:
page.tsx is the entry point for a route's page UI.
            `,

        },
        {
            title: "Client Components",
            content: `
Client Components are used when we need browser interactions, state, or event handlers.

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

Remember:
"use client" enables client-side React features in that component.
            `,

        },
        {
            title: "Component imports",
            content: `
Imports allow us to use components from other files.

Example:

import Guides from "@/components/Guides";

Remember:
Imports help organize and reuse components.
            `,

        },
        {
            title: "Path aliases",
            content: `
Path aliases allow us to import files using shorter paths.

Example:

import Guides from "@/components/Guides";

Instead of long relative paths like:
../../../../components/Guides

Remember:
@/ is a shortcut to a configured directory, commonly src/.
            `,

        },
        {
            title: "Server vs Client Components",
            content: `
Server Components run on the server by default.

Client Components are used for interactivity, state, events, and browser APIs.

Remember:
Use Server Components by default, and Client Components when interactivity is needed.
            `,

        },
        {
            title: "Client-side interactions",
            content: `
Client-side interactions allow users to interact with the UI.

Examples from Sellerflow:
- Opening dialogs
- Filling forms
- Updating state
- Clicking buttons

Remember:
React handles interactive UI changes through state and events.
            `,

        },
    ],
};
