// Debouncing and throttling (two ways to optimize event handling)

/* ✅ Debouncing – “Wait until the user stops”
Definition:
Debouncing delays the execution of a function until a certain amount of time has passed since the last time it was invoked. 

Real-life analogy:
Think of typing a search query. You don’t want to send a request after every keystroke. Instead, you wait until the user has stopped typing for a short moment (e.g., 300ms), then send the request.
*/

/* EXPLANATION:
when we type something on search bar, we are sending request to server for each key press, this is not good for performance
As soon as we stop typing, we should send the request to server there is a concept of debouncing

while typing, if there is a delay of 100 ms between word typing then no API call takes place, but when there is a delay of 500ms, then API call takes place
this is called debouncing
*/

/* DEFINITION:
    Debouncing is the concept of limiting the execution of a function call and wait for a certain amount of time before making function call(in this case 400ms). */

/* ✅ Throttling – “Run every X milliseconds at most”
Definition:
Throttling ensures that a function is executed at most once every specified interval (e.g., once every 500ms), no matter how many times it's triggered.

Real-life analogy:
Imagine you're resizing a browser window, and an event fires 100 times a second. You only want to handle it every 500ms to avoid performance issues.
*/
// In twitter, when I scroll down and stop for few millisecond it sends request to server to load most posts
// So we need to limit the number of times the function is called, this is called throttling
// If we consider the scroll event, it is fired multiple times when we scroll down, so if we send request to server on every scroll event, it will be a performance issue, therefore scroll event only occurs when the scroll bar is above 500px from the bottom of the page, then only we send request to server to load more posts

/* Example:
we assign the specific time lets say make the API call every 500ms
*/
