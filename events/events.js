// interview question - 1: Event propagation
// The process of deciding when and in which direction the event will be executed when multiple elements are nested inside each other.

// interview question - 2: what is event bubbling?
// In event bubbling the events are executed from bottom to up.
// Event bubbling is the default behavior in Javascript
// focus, blur events donot not bubble

// interview question - 3: Any way to stop bubbling?
// e.stopPropagation();



// interview question - 4: event.target vs this.target vs event.currentTarget

// event.target points to the origin of bubbling
// this.target works same as event.currentTarget


// interview question - 2: what is event capturing?
// In event capturing the events are executed from top to bottom.

// interview question - 2: what is event delegation?
// event delegation is where we add events listeners to the parent element instead of adding them to the descendent element


// event.currentTarget

// <div>
//   <form action="">
//     <button></button> // when i click on button then the event handler of the form and div calls due to event bubbling and the e.target is button consistently ut the e.currenttarget changes due to continuously bubbling
//     and this.tagName define the origin like div button or form similar to currentTarget
//   </form>
// </div>

// // events capturing move from the top to bottom
// click on button first div -> form->button
// .addEventListener("",()=>{

// },{
//   capture=true
// })
// use e.stopPropagation() to stop the behavior of bubbling and capturing

// enent delegation
// add event listener to parent use e.target.id
