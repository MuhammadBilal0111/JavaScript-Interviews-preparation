// interview question - 1: Event propagation and phases
// The process of deciding when and in which direction the event will be executed when multiple elements are nested inside each other.

// Event Propagation Phases
// When an event happens, it flows through three phases:
// 1. Capturing Phase
// 2. Target Phase
// 3. Bubbling Phase

// 1. 🔽 Event Capturing Phase
// The event starts from the root of the DOM (like document)
// It travels down to the target element

// 2. 🎯 Target Phase
// The event reaches the actual element that was clicked

// 3. 🔼 Event Bubbling Phase
// After reaching the target, the event bubbles up back to the root
// This is the default phase when you attach event listeners

// interview question - 2: what is event bubbling?
// In event bubbling the events are executed from bottom to up.
// Event bubbling is the default behavior in Javascript
// focus, blur events donot not bubble

// interview question - 3: Any way to stop bubbling?
// e.stopPropagation();

// interview question - 4: what is event capturing?
// In event capturing the events are executed from top to bottom.

// interview question - 5: what is event delegation?
// Event delegation is a technique where you attach a single event listener to a parent element to handle events on its child elements.

// interview question - 6: Difference between event.target vs this.target vs event.currentTarget
// this.target works same as event.currentTarget
// event.target	The actual element that triggered the event (clicked)
// event.currentTarget	The element where the event listener is set
