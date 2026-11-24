# Settings Page — Learning Guide

This guide covers the concepts used in `./frontend/src/app/settings/page.tsx` and the related Settings components. It is a checklist to help me learn what the page is doing, how React and Next.js work here, and which JavaScript/TypeScript concepts I need to understand.

## Scope

The page contains a parent `SettingsPage` that owns state and renders a selected settings section. It imports smaller components, validates settings, saves them to `localStorage`, and displays save feedback.

Related components/files shown in the review:
- `SettingsNav`
- `BusinessProfileForm`
- `LanguageRegionForm`
- `NotificationSettings`
- `AccountSettings`
- `TeamSettings`
- `CaisseSettings`
- `SecuritySettings`
- `BillingSettings`
- `SettingsCard`
- `SettingRow`
- `FormField`
- `SelectField`
- `settings.ts` (types, defaults, validation)
- `PageHead`, `Switch`, `EmployeeAvatar`, `StatusBadge` (their implementation files still need review)

---

## Already studied — skip these topics

### JavaScript
- [x] Variables (`const`, `let`)
- [x] Arrow functions
- [x] Functions and parameters
- [x] Objects
- [x] Arrays
- [x] Array methods
- [x] Destructuring
- [x] Template literals
- [x] Spread operator
- [x] Optional chaining
- [x] Ternary operator
- [x] Logical AND (`&&`)
- [x] Callbacks
- [x] Event bubbling
- [x] Event handling

### TypeScript
- [x] Array types
- [x] Object types
- [x] Type aliases
- [x] Optional properties
- [x] Union types
- [x] Nullable types
- [x] Function types
- [x] Optional parameters
- [x] Type imports
- [x] Type assertions
- [x] Generic types
- [x] Utility types
- [x] React types

### React
- [x] Functional components
- [x] JSX
- [x] Component composition
- [x] Props
- [x] State
- [x] State updates
- [x] Functional state updates
- [x] Controlled components
- [x] Event handlers
- [x] Conditional rendering
- [x] List rendering
- [x] Keys
- [x] State lifting
- [x] Parent-child relationship
- [x] Component reuse
- [x] Fragments
- [x] Custom hooks
- [x] Component lifecycle / effects

### Next.js
- [x] App Router
- [x] Route structure
- [x] Page components
- [x] Client Components
- [x] Component imports
- [x] Path aliases
- [x] Server vs. Client Components
- [x] Client-side interactions

---

# New topics to learn for this page

## 1. JavaScript

### 1.1 Truthy and falsy values
**What it is:** JavaScript values that are treated as true or false when used in a condition.

**How it works:** Values such as `""`, `0`, `null`, `undefined`, `false`, and `NaN` are falsy. Most other values are truthy. The page uses conditions to decide whether to display errors or a toast.

**Example:**
```tsx
{toast && <span>{toast}</span>}
{errors.businessName && <p>{errors.businessName}</p>}
```

**Remember:** `&&` returns a value, not necessarily a Boolean. Here it is used to render the right side only when the left side is truthy.

### 1.2 Equality and strict equality
**What it is:** Operators for comparing values.

**How it works:** `===` compares without type coercion. `==` may convert types before comparing.

**Example:**
```ts
active === "business"
v === "ar"
```

**Remember:** Prefer strict equality (`===`) in ordinary application logic.

### 1.3 Nullish coalescing (`??`)
**What it is:** A fallback operator for values that are `null` or `undefined`.

**How it works:** It uses the right side only when the left side is nullish—not when the left side is `""`, `0`, or `false`.

**Example:**
```tsx
value={data.address ?? ""}
```

**Remember:** `??` and `||` are not interchangeable. `||` falls back for all falsy values; `??` falls back only for nullish values.

### 1.4 String properties and methods
**What it is:** Ways to inspect or transform text.

**How it works:** The page uses string length, trimming, and slicing when validating phone numbers and names.

**Examples:**
```ts
data.businessName.trim().length
phoneNumber.slice(0, 4)
```

**Remember:** `trim()` removes surrounding whitespace; `length` counts characters in the string; `slice(start, end)` extracts a section.

### 1.5 Regular expressions
**What it is:** A pattern used to test whether text matches a format.

**How it works:** The phone validator uses a pattern to check that the remaining phone digits contain exactly nine digits.

**Example:**
```ts
/^\d{9}$/.test(numbers)
```

**Remember:** `^` means start, `$` means end, `\d` means digit, `{9}` means nine repetitions, and `.test()` returns a Boolean.

### 1.6 Browser APIs and the `window` object
**What it is:** APIs provided by the browser, rather than by JavaScript itself.

**How it works:** `window` represents the browser window. The page checks whether `window` exists before accessing browser-only storage during initialization.

**Example:**
```ts
if (typeof window === "undefined") {
  return defaultSettings;
}
```

**Remember:** Browser APIs are not available during server rendering. `typeof window` is a safe way to check for the browser environment.

### 1.7 `localStorage`
**What it is:** Browser storage that persists key/value strings across reloads and browser sessions (until cleared or removed).

**How it works:** The Settings page stores the serialized settings under the key `sellerflow_settings`.

**Examples:**
```ts
localStorage.getItem("sellerflow_settings");
localStorage.setItem("sellerflow_settings", JSON.stringify(settings));
localStorage.removeItem("sellerflow_settings");
```

**Remember:** `localStorage` stores strings. It is not a database, does not automatically synchronize to a backend, and is specific to the browser origin.

### 1.8 JSON serialization and parsing
**What it is:** Converting JavaScript data to JSON text and JSON text back into JavaScript data.

**How it works:** `JSON.stringify()` converts the settings object into a string for storage. `JSON.parse()` turns the stored string back into a value.

**Example:**
```ts
const saved = localStorage.getItem("sellerflow_settings");
if (saved) {
  const parsed = JSON.parse(saved);
}
```

**Remember:** Parsing can fail if the stored text is invalid, so it belongs inside a `try/catch` when data may be corrupted.

### 1.9 `try`, `catch`, and error handling
**What it is:** A way to handle errors that may occur while executing code.

**How it works:** If an operation inside `try` throws, control moves to `catch` instead of letting that error interrupt the surrounding flow.

**Example from this page:**
```ts
try {
  localStorage.setItem("sellerflow_settings", JSON.stringify(next));
} catch {
  // storage may be unavailable
}
```

**Remember:** Empty catches prevent crashes but hide the reason for failure. Consider logging or showing a message when failure matters to the user.

### 1.10 `Object.keys()`
**What it is:** Returns an array of an object's own enumerable string-keyed property names.

**How it works:** The validation result is an object of errors. If it has keys, at least one error exists.

**Example:**
```ts
if (Object.keys(found).length > 0) {
  // there are validation errors
}
```

**Remember:** It is a common way to check whether an object has any enumerable keys.

### 1.11 `setTimeout` and `clearTimeout`
**What it is:** Timer functions that schedule and cancel a callback.

**How it works:** The page schedules clearing the toast after three seconds and cancels the timer during effect cleanup.

**Example:**
```ts
const timer = setTimeout(() => setToast(null), 3000);
return () => clearTimeout(timer);
```

**Remember:** A timeout is not an exact clock; it schedules work to run after at least the requested delay when the event loop can process it.

### 1.12 Default parameter values
**What it is:** A parameter can have a fallback value when the caller passes `undefined` or omits it.

**How it works:** Reusable components use defaults such as `type = "text"` or `padded = true`.

**Example:**
```tsx
type = "text"
padded = true
inline = false
```

**Remember:** A default parameter is used for `undefined`, not for `null`.

### 1.13 Object immutability patterns and shallow copies
**What it is:** Instead of changing an existing state object, create a new object with the desired updates.

**How it works:** The Settings page uses object spread to copy previous settings and overwrite only the changed fields.

**Example:**
```ts
const next = { ...prev, ...changes };
```

**Remember:** This is a shallow copy. Nested objects would still share references unless copied separately. React state should generally be updated immutably.

### 1.14 Data flow through callbacks
**What it is:** A child can notify a parent that a value changed by calling a callback passed in its props.

**How it works:** A form field calls its `onChange`; the parent `update` function merges the change into the shared settings object.

**Example:**
```tsx
onChange={(v) => onChange({ businessName: v })}
```

**Remember:** This page uses callbacks as a communication path from child controls to the parent state owner.

---

## 2. TypeScript

### 2.1 `Partial<T>`
**What it is:** A utility type that makes every property of a type optional.

**How it works:** `update` accepts only a partial settings object, so callers can update one property without providing the entire settings object.

**Example:**
```ts
onChange: (changes: Partial<SettingsData>) => void
```

**Remember:** `Partial<SettingsData>` is useful for patch-like updates.

### 2.2 `Record<K, V>`
**What it is:** A type for an object whose keys and values follow specified types.

**How it works:** The validation error type maps settings property names to optional error strings.

**Example:**
```ts
Partial<Record<keyof SettingsData, string>>
```

**Remember:** `Record` describes an object dictionary; it does not create the object at runtime.

### 2.3 `keyof`
**What it is:** An operator that produces a union of the keys of a type.

**How it works:** `keyof SettingsData` becomes the possible property names of `SettingsData`.

**Example:**
```ts
keyof SettingsData
```

**Remember:** It helps keep keys tied to the source type instead of writing a separate string union manually.

### 2.4 `void`
**What it is:** A type commonly used to describe a function that does not return a meaningful value.

**How it works:** Callback declarations use `void` to indicate that callers should not expect a returned result.

**Example:**
```ts
onChange: (value: string) => void
```

**Remember:** `void` describes the function's return contract; it doesn't mean the function cannot perform side effects.

### 2.5 Type narrowing
**What it is:** Making a broad type more specific after checking a condition.

**How it works:** Conditions such as checking for a value, a specific string, or a valid type let TypeScript reason about what the value can be in that branch.

**Example:**
```ts
if (saved) {
  const parsed = JSON.parse(saved);
}
```

**Remember:** A runtime condition can help TypeScript narrow a type, but parsing JSON does not automatically guarantee that the parsed data matches your `SettingsData` type.

### 2.6 Type safety versus runtime validation
**What it is:** TypeScript checks types during development/build; runtime validation checks actual values while the program is executing.

**How it works:** `SettingsData` helps the code editor and compiler, while `validateSettings()` checks user-entered settings such as business name and phone.

**Remember:** Types do not validate localStorage data. Stored JSON can be malformed or contain unexpected properties/values even if your code expects `SettingsData`.

### 2.7 `satisfies`
**What it is:** A TypeScript operator that checks that an expression meets a type without simply replacing the expression's inferred type with that target type.

**How it works:** `sections` is checked against the required section structure, while useful specific types of the array items can remain inferred.

**Example:**
```ts
sections satisfies {
  id: SectionId;
  label: string;
  icon: React.ElementType;
}[]
```

**Remember:** `satisfies` checks compatibility at compile time; it does not change the value or validate data at runtime.

### 2.8 `ReactNode` and `children`
**What it is:** `ReactNode` represents content React can render, including elements, strings, numbers, and other supported renderable values.

**How it works:** `SettingsCard` and `SettingRow` receive `children`, letting callers place their own controls and content inside reusable wrappers.

**Example:**
```ts
children: ReactNode
```

**Remember:** `children` enables composition—wrapper components don't need to know exactly what their inner content is.

### 2.9 `ElementType` for dynamic components
**What it is:** A React type for values that can represent component types or intrinsic element types.

**How it works:** The navigation configuration stores icon components, then `SettingsNav` renders the selected icon as a component.

**Example:**
```tsx
const Icon = icon;
return <Icon />;
```

**Remember:** A component can be stored in a variable and rendered with JSX when the variable represents a valid component type.

---

## 3. React

### 3.1 Lazy state initialization
**What it is:** Passing an initializer function to `useState` so React calculates the initial state during initialization, rather than treating the function as the state value.

**How it works:** The Settings page reads saved browser settings in its initializer.

**Example:**
```tsx
useState<SettingsData>(() => {
  // read initial settings
  return defaultSettings;
});
```

**Remember:** The initializer is intended for initialization, not for re-reading storage on every render.

### 3.2 Multiple independent state variables
**What it is:** A component can own several state values for different parts of its behavior.

**How it works:** This page separately tracks selected section, settings data, errors, toast feedback, and whether changes have been made.

**Example:**
```tsx
const [active, setActive] = useState<SectionId>("business");
const [errors, setErrors] = useState<SettingsErrors>({});
const [toast, setToast] = useState<string | null>(null);
const [isDirty, setIsDirty] = useState(false);
```

**Remember:** Keep separate state values when they represent distinct things; avoid duplicating state that can be derived.

### 3.3 Derived state
**What it is:** A value calculated from existing state or props instead of stored separately.

**How it works:** Some values can be calculated from current settings—for example, whether any validation errors exist—rather than stored in another state variable.

**Example idea:**
```tsx
const hasErrors = Object.keys(errors).length > 0;
```

**Remember:** Derived values reduce the risk of two state variables becoming inconsistent.

### 3.4 State batching and render updates
**What it is:** React groups state updates and renders the component after processing updates.

**How it works:** A handler can update errors, selected section, dirty state, and toast state; React coordinates the resulting UI updates.

**Remember:** Calling a state setter requests a future render. It does not immediately mutate the state variable in the current function.

### 3.5 Effect dependencies and cleanup
**What it is:** The dependency array tells React when an effect needs to run again; cleanup handles work that should be canceled or undone.

**How it works:** The toast effect runs when `toast` changes. If a toast exists, it starts a timer. Cleanup clears the previous timer.

**Example:**
```tsx
useEffect(() => {
  if (!toast) return;
  const timer = setTimeout(() => setToast(null), 3000);
  return () => clearTimeout(timer);
}, [toast]);
```

**Remember:** Effects synchronize with things outside React, such as timers. Always consider cleanup for timers, subscriptions, and listeners.

### 3.6 State ownership and single source of truth
**What it is:** One component owns the authoritative version of data; other components receive that data and callbacks.

**How it works:** `SettingsPage` owns the settings object. Forms receive `data` and `onChange` props instead of each keeping a separate copy.

**Remember:** Avoid multiple independent copies of the same settings state.

### 3.7 Prop drilling in this component tree
**What it is:** Passing data or callbacks through props to the components that need them.

**How it works:** The parent sends `data`, `errors`, and `onChange` to a section component, which sends values and callbacks down to fields.

**Remember:** Prop drilling is acceptable in a small, clear tree. Context or a state-management library is not automatically necessary.

### 3.8 Controlled input event typing
**What it is:** A form control's value is controlled by React props, and its event handler reports changes.

**How it works:** `FormField` receives a string value and converts the input event into a string callback value.

**Example:**
```tsx
onChange={(e) => onChange(e.target.value)}
```

**Remember:** The input's displayed value comes from props/state; the callback communicates a new value to the state owner.

### 3.9 React rendering and component identity
**What it is:** React re-renders components when relevant state or props change and reconciles the new tree with the previous one.

**How it works:** Changing the selected section or settings causes `SettingsPage` to render again. The conditional section determines which child UI appears.

**Remember:** A re-render does not mean the entire DOM is blindly recreated; React reconciles updates.

### 3.10 Component boundaries and reusable UI
**What it is:** Splitting UI into components with focused responsibilities.

**How it works:** `SettingsCard` handles the common card frame; `SettingRow` handles a row layout; `FormField` handles input/label/error presentation; section components assemble these building blocks.

**Remember:** Reuse the structure when it genuinely repeats, but avoid creating components that add abstraction without improving clarity.

### 3.11 Conditional component rendering and unmounting
**What it is:** JSX conditions decide whether a component exists in the rendered tree.

**How it works:** The page renders a settings section only when `active` matches its ID. Switching sections generally unmounts the previous section and mounts the new one.

**Remember:** State stored inside a section component may reset when that section is unmounted, unless state is lifted or otherwise persisted.

### 3.12 Accessibility: labels and ARIA
**What it is:** HTML semantics and accessibility attributes help assistive technologies interpret controls.

**How it works:** `useId()` creates an ID; `htmlFor` connects a label to the matching input. `aria-invalid` exposes the validation state.

**Example:**
```tsx
<label htmlFor={id}>...</label>
<input id={id} aria-invalid={!!error} />
```

**Remember:** A visible label is important; ARIA attributes should supplement correct HTML semantics, not replace them.

---

## 4. Next.js

### 4.1 `"use client"` directive
**What it is:** A directive marking a module as a Client Component entry point in the Next.js App Router.

**How it works:** The Settings page uses client-side React state, effects, event handlers, and browser APIs, so it needs a client boundary.

**Remember:** `"use client"` does not mean the component is never rendered on the server. Client Components can still be pre-rendered.

### 4.2 Client boundary and component imports
**What it is:** A boundary between server-oriented and client-oriented component code.

**How it works:** The Settings page is marked client-side; its imported components participate in that client-side component tree when rendered beneath it.

**Remember:** Client components should not import server-only modules. Keep client boundaries as focused as practical.

### 4.3 Server rendering (SSR) of Client Components
**What it is:** Next.js may render HTML for the initial page on the server even when a component uses `"use client"`.

**How it works:** The server produces an initial HTML representation, then the browser loads JavaScript and React hydrates it to make it interactive.

**Remember:** Client Component does not equal browser-only rendering.

### 4.4 Hydration
**What it is:** React attaches its client behavior to HTML generated during the initial rendering process.

**How it works:** The browser's initial React output should agree with the server-generated HTML. Reading different settings from localStorage on the client during initial render can make the outputs disagree.

**Remember:** Understand hydration before changing the localStorage initialization strategy in this page.

### 4.5 App Router conventions and `page.tsx`
**What it is:** The App Router uses folders and special files to define routes.

**How it works:** A `page.tsx` file in the settings route directory is the page entry for that route.

**Remember:** The file name and folder location have routing meaning in Next.js; this is not just a normal component file.

### 4.6 Navigation state versus URL routing
**What it is:** UI state can switch content without changing the browser URL, while navigation changes the route.

**How it works:** `SettingsNav` changes `active` state, and the page conditionally renders the matching section. It is an in-page section selector, not separate routes.

**Remember:** This design is fine when sections are part of one settings page. Separate routes may be useful if sections need direct links, independent page metadata, or route-level loading.

### 4.7 Path aliases
**What it is:** Configured shortcuts for import paths.

**How it works:** Imports like `@/components/settings/SettingsNav` avoid long relative paths. The alias is configured in project TypeScript/Next configuration.

**Remember:** `@/` is project configuration—not a built-in JavaScript or React feature.

### 4.8 Browser storage in a Next.js app
**What it is:** Client-side persistence using the browser's storage APIs.

**How it works:** The Settings page uses localStorage to save user preferences, but those values are not sent to a server or shared across devices.

**Remember:** If settings must belong to a user account and sync between devices, they generally need backend persistence and authentication rather than localStorage alone.

---

## 5. HTML and UI concepts

### 5.1 Semantic HTML
Learn the purpose of the elements used by the page:
- `section` — thematic section of the page
- `nav` — navigation links or controls
- `button` — interactive action
- `label` — name for a form control
- `input` — editable form value
- `select` and `option` — selection controls
- `span`, `div`, `p`, `h3`, `h4` — structural and text elements

**Remember:** Prefer the element that matches the meaning and behavior of the content.

### 5.2 Responsive design
**What it is:** Layout adapting to different viewport widths.

**How it works:** Tailwind breakpoint classes such as `sm:grid-cols-2` and `lg:flex-row` change layout at configured screen sizes.

**Remember:** Mobile-first utility classes generally apply the base style first, then breakpoint-prefixed styles at larger widths.

### 5.3 Flexbox and Grid
Understand the layout utilities used repeatedly:
- `flex`, `flex-col`, `items-center`, `items-start`
- `justify-between`
- `gap-*`
- `shrink-0`, `min-w-0`
- `grid`, `grid-cols-2`
- `sm:grid-cols-2`, `lg:flex-row`

**Remember:** Flexbox is usually for arranging items along one axis; Grid is useful for row-and-column layouts.

### 5.4 Tailwind utility classes
Learn how to read composed classes such as:
- spacing: `p-4`, `px-3`, `mb-4`, `gap-3`
- borders: `border`, `border-b`, `rounded-lg`
- colors: `bg-white`, `text-slate-500`
- typography: `text-xs`, `font-semibold`
- interaction: `hover:bg-slate-50`, `focus:ring-*`
- responsive: `sm:*`, `lg:*`
- conditional classes: class strings chosen from conditions

**Remember:** Tailwind classes are styling instructions; they do not implement the component's business logic.

### 5.5 Dynamic class names and template strings
The page chooses classes based on state, for example active navigation styling and validation styling.

Learn to read a class expression where a fixed string is combined with conditional strings.

**Remember:** Make sure conditional class names are written in forms Tailwind can detect during its build scanning; avoid constructing class fragments dynamically in ways the scanner cannot discover.

### 5.6 Icons as components
**What it is:** Icon libraries can expose icons as React components.

**How it works:** The code imports icons from `lucide-react`, then renders them as JSX elements and passes sizing/color classes.

**Remember:** Icons are components, not ordinary text or image filenames.

---

## 6. Settings-page logic to understand

### 6.1 The settings data model
Understand the `SettingsData` type and each field:
- businessName
- businessType
- phone
- currency
- address
- language
- rtl
- dateFormat
- notifyLowStock
- notifyDailyCaisse
- notifyRefunds
- notifyWeeklyDigest

Know which properties are optional and which are Boolean, strings, or constrained by validation.

### 6.2 Default settings
`defaultSettings` is the fallback configuration. Learn why initial state and reset behavior use it, and why saved data is merged with defaults.

### 6.3 Validation
Understand `validateSettings()`:
- returns an error object
- checks minimum business-name length
- requires business type and currency
- validates Moroccan phone format
- uses `trim()`, `length`, and a regular expression

### 6.4 Save flow
Study `handleSave()` in order:
1. Run validation.
2. Store validation errors.
3. If errors exist, select the Business section and stop.
4. If valid, save settings.
5. Mark the page clean.
6. Show success feedback.

### 6.5 Reset flow
Study `handleReset()`:
1. Restore defaults.
2. Clear errors.
3. Mark the page clean.
4. Remove saved settings from storage.

### 6.6 Toast flow
Understand how `toast` state controls the feedback message and how the effect removes it after three seconds.

### 6.7 Settings navigation flow
Understand how:
1. `active` stores the selected section ID.
2. `SettingsNav` receives `active` and `onSelect`.
3. Clicking a nav button calls `onSelect`.
4. The parent changes state.
5. Conditional rendering displays the chosen section.

---

## 7. Recommended learning order

Use this order to avoid learning advanced topics before the code needs them.

1. [ ] Truthy/falsy values and strict equality
2. [ ] `??` compared with `||`
3. [ ] String methods: `trim`, `slice`, `length`
4. [ ] Regular expressions and `.test()`
5. [ ] `window` and browser APIs
6. [ ] `localStorage`
7. [ ] `JSON.stringify` / `JSON.parse`
8. [ ] `try/catch`
9. [ ] `Object.keys`
10. [ ] `setTimeout` / `clearTimeout`
11. [ ] Shallow copying and immutable object updates
12. [ ] `Partial`, `Record`, `keyof`, `void`
13. [ ] Type narrowing and runtime validation
14. [ ] `satisfies`
15. [ ] `ReactNode` and children
16. [ ] Dynamic component types (`ElementType`)
17. [ ] Lazy state initialization
18. [ ] Multiple state variables and derived state
19. [ ] React state batching and render updates
20. [ ] Effect dependencies and cleanup
21. [ ] State ownership and single source of truth
22. [ ] Prop drilling
23. [ ] Controlled input events and event typing
24. [ ] React rendering and reconciliation
25. [ ] Component boundaries and reusable UI
26. [ ] Conditional rendering and unmounting
27. [ ] Accessibility: label association and ARIA
28. [ ] `"use client"` and client boundaries
29. [ ] SSR of Client Components
30. [ ] Hydration
31. [ ] Next.js App Router `page.tsx` conventions
32. [ ] UI state versus URL navigation
33. [ ] Path aliases
34. [ ] Browser storage in Next.js
35. [ ] Semantic HTML
36. [ ] Responsive design
37. [ ] Flexbox and Grid
38. [ ] Tailwind utilities and conditional classes
39. [ ] Icon components
40. [ ] Settings data model, defaults, validation, save/reset/toast flows

---

## 8. Final checklist: can I explain this page?

- [ ] I can explain why `SettingsPage` is marked `"use client"`.
- [ ] I understand why `useState` is used for `active`, `settings`, `errors`, `toast`, and `isDirty`.
- [ ] I can trace one input change from `FormField` through its callback to the parent's `update` function.
- [ ] I understand how `Partial<SettingsData>` allows updating one property.
- [ ] I can explain how object spreading creates the next settings object.
- [ ] I understand how settings are saved to and loaded from localStorage.
- [ ] I can explain why `JSON.stringify` and `JSON.parse` are needed.
- [ ] I can explain what `try/catch` protects against.
- [ ] I can explain how validation works and how its error object is used.
- [ ] I understand why `handleSave` sends the user to the Business section when validation fails.
- [ ] I can explain how `handleReset` works.
- [ ] I understand how the toast effect and timer cleanup work.
- [ ] I can explain how `SettingsNav` communicates with the parent.
- [ ] I understand why only one section is rendered at a time.
- [ ] I understand `ReactNode` and component children.
- [ ] I understand how `useId` connects labels and inputs.
- [ ] I understand the purpose of `aria-invalid`.
- [ ] I can explain the difference between a Client Component and server rendering.
- [ ] I understand hydration and why localStorage can cause an initial-render mismatch.
- [ ] I can explain the Tailwind layout and responsive classes used here.
- [ ] I can explain why some controls are currently placeholders with empty callbacks.
- [ ] I know that localStorage persistence is local to this browser and is not backend/database persistence.

## Review notes

This guide is based on the Settings code supplied for review. The internals of `PageHead`, `Switch`, `EmployeeAvatar`, and `StatusBadge` are not covered yet because their implementations were not included. Add topics from those components after reviewing their source files.
