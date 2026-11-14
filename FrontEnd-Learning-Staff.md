- A. JavaScript topics :

Variables (const, let)	                       All components [DONE]
Arrow functions                                handleAddTicket, submit, callbacks [DONE]
Functions and parameters                       Components and handlers [DONE]
Objects	                                       Tickets, guides, FAQ items [DONE]
Arrays	                                       tickets, guides, faqs [DONE]
Array methods                                  .map(), .filter() [DONE]
Destructuring                                  Component props [DONE]
Template literals                              Ticket IDs [DONE]

Spread operator	                               { ...p, subject: undefined }
Optional chaining                              onOpen?.()
Ternary operator                               Conditional rendering
Logical AND (&&)                               Showing errors and badges
Null values	                                   GuideItem \| null
Callbacks	                                   onOpen, onClose, onAddTicket
Event bubbling                                 GuideCard
Event handling                                 onClick, onChange, onSubmit
Object.keys()                                  Validation
new Date()	                                   Future ticket timestamps

Pay particular attention to these three concepts:
1. Array methods, especially .map().
2. Destructuring and the spread operator.
3. Callbacks and event propagation.

- B. TypeScript topics:

Type aliases	                              type Ticket = {...}
Object types	                              GuideItem
Union types	                                  "normal" \| "high"
Optional properties                           subtitle?
Optional parameters                           onOpen?
Function types                                onAddTicket: (ticket: Ticket) => void
Array types                                   Ticket[]
Generic types                                 useState<Ticket[]>([])
Utility types                                 Partial<Record<...>>
Type imports                                  import type { ReactNode }
Type assertions                               as "normal" \| "high"
Nullable types                                GuideItem \| null
React types                                   React.FormEvent

- C. React topics:

Functional components                         HelpPage(), Guides()
JSX                                    	      All returned UI
Component composition                         HelpPage uses Guides
Props                                    	  SupportDialog receives props
State                                    	  useState()
State updates                                 setTickets()
Functional state updates                      setTickets((prev) => ...)
Controlled components                         Inputs with value and onChange
Event handlers                                onClick, onChange
Conditional rendering                         tickets.length === 0
List rendering                                guides.map()
Keys                                    	  key={guide.id}
State lifting                                 Ticket state in HelpPage
Parent-child                                  communication	onAddTicket
Component reuse                               GuideCard
Fragments                                     <>...</>
Custom hooks                                  useTickets (future improvement)
Component lifecycle / effects                 useEffect (not currently used)


- D. Next.js topics:
App Router                                    src/app/
Route structure                               src/app/help/page.tsx
Page components                               page.tsx
Client Components                             "use client"
Component imports                             @/components/...
Path aliases                                  @/
Server vs Client Components                   Your page uses client rendering
Client-side interactions                      Dialogs, forms, state