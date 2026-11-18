- A. JavaScript topics :

Variables (const, let)	        All components [DONE]
Arrow functions                 handleAddTicket, submit, callbacks [DONE]
Functions and parameters        Components and handlers [DONE]
Objects	                        Tickets, guides, FAQ items [DONE]
Arrays	                        tickets, guides, faqs [DONE]
Array methods                   .map(), .filter() [DONE]
Destructuring                   Component props [DONE]
Template literals               Ticket IDs [DONE]
Spread operator	                { ...p, subject: undefined } [DONE]
Optional chaining               onOpen?.() [DONE]
Ternary operator                Conditional rendering [DONE]
Logical AND (&&)                Showing errors and badges [DONE]
Callbacks	                    onOpen, onClose, onAddTicket [DONE]
Event bubbling                  GuideCard [DONE]
Event handling                  onClick, onChange, onSubmit [DONE]

- B. TypeScript topics:

Array types	                    Ticket[]
Object types                    GuideItem
Type aliases                    type Ticket = {...}
Optional properties             subtitle?
Union types                     "normal" \| "high"
Nullable types                  GuideItem \| null	
Function types                  onAddTicket: (ticket: Ticket) => void
Optional parameters             onOpen?
Type imports                    import type { ReactNode }
Type assertions                 as "normal" \| "high"
Generic types                   useState<Ticket[]>([])
Utility types                   Partial<Record<...>>
React types                     React.FormEvent


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