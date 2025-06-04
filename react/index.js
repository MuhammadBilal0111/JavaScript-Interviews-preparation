// Top 20 questions in ReactJS
// Key strengths of ReactJS

// 1. Components in ReactJS(ReactJS strength lies in its ability to create components based architecture which allows the developers to reuse the UI components)
// 2.  Virtual Dom (copy of the Actual Dom that minimize the direct DOM manipulation which significantly boast performance)

// Single Page Application (SPA) (SPA is a type of web application that loads a single HTML page and dynamically updates the content as the user interacts with the app. ReactJS is a popular choice for building SPAs because of its component-based architecture and efficient rendering using the virtual DOM.)
// This increases faster load time, better responsiveess and smoother user interactions

// SPA can become a challenge when it comes to SEO (Search Engine Optimization) because search engines may have difficulty crawling and indexing the content of a single-page application. However, there are several techniques that can be used to improve the SEO of SPAs, such as server-side rendering (SSR), pre-rendering, and using dynamic rendering. These techniques can help ensure that search engines can properly index the content of the SPA and improve its visibility in search results.

// JSX or JavaScript XML 
// A syntax Extension for js that allows developers to write HTML-like code directly into JavaScript Files.

// interview 
// What is the difference between function components and class components in React?
// class components used before hooks and function components used after hooks
// class components are more complex and require more boilerplate code than function components
// function components are simpler and easier to read and write than class components
// functional components are stateless but after introduction of hooks they can manage stateless

// difference between stateless and stateful components
// stateless components are functional components that do not manage or store their own state.
// They receive data and behavior through props and render the UI accordingly. Stateless components are typically used for presentational purposes.

// stateful components are class components that manage and store their own state or update their own state. They can update their state based on user interactions or other events. Stateful components are typically used for managing complex logic and behavior in the application.

// What are props in react and how they are used?

// Props or properties are a way to pass the data from parent to child component
// child component cannot modify the values they can read only
// props are immutable


// Difference between props and state in react
// state is mutable object that stores dynamic data means that it stores data that can change over time
// props are immutable and passed from parent to child component
// state is private and is fully controlled by the component it belongs to
// props is controlled by the parent component and cannot be changed by the children component

// what are controlled and uncontrolled components in react
controlled components are used when control is required over the data entere in <form action="
"></form>

// controlled components manage by the state attribute while uncontrolled components are managed by the ref itself


// react understood which element to rerenders based on the key associated with the element

🧠 How React Uses key to Decide What to Re-render
🔑 What is a key?
A key is a special prop you pass to elements (especially in lists) to give them a unique identity.

jsx
Copy
Edit
{items.map((item) => (
  <li key={item.id}>{item.name}</li>
))}
🚀 Why is key Important?
When React updates the UI:

It creates a virtual DOM copy of the current state.

Then it compares this virtual DOM with the previous one.

With key, React can track which items changed, added, or removed.

It avoids unnecessary re-renders by only updating the elements whose keys changed.

🔄 Example Without Key
jsx
Copy
Edit
const items = ['Apple', 'Banana', 'Orange'];
If we render this list without keys:

jsx
Copy
Edit
{items.map(item => <li>{item}</li>)}
React can't tell which item changed if the array updates. It may re-render all items — which is inefficient and may even cause bugs (e.g. with input fields).

✅ Example With Key
jsx
Copy
Edit
{items.map(item => <li key={item}>{item}</li>)}
Now React knows exactly which list item maps to which key, so it can:

Only re-render the changed item.

Avoid removing and re-adding DOM nodes unnecessarily.

Keep component state (like form input) intact if the element stays.

mounted constructor score 0 in game


🔍 What is a React Portal?
React Portal is a way to render a component outside the main DOM tree (usually outside the #root element) — but still keep its behavior connected to React.

🧠 Why is it useful?
Sometimes you want to render something:

Above everything, like a modal or tooltip

Outside parent styles or overflow

Without breaking React’s component hierarchy

Portals help you do that.

📦 Real-life example:
You have a Modal component, but your App is inside:

html
Copy
Edit
<body>
  <div id="root"></div>
  <div id="modal-root"></div> <!-- outside the root -->
</body>
Now in React:

jsx
Copy
Edit
import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById('modal-root') // 👈 rendered outside #root
  );
}
✅ Usage:
jsx
Copy
Edit
function App() {
  return (
    <div>
      <h1>Hello App</h1>
      <Modal>
        <h2>This is inside a portal!</h2>
      </Modal>
    </div>
  );
}
💡 Summary:
🔸 Feature	🔹 Explanation
Renders outside #root	Uses different DOM node
Still React-powered	Handles state, props, events
Use cases	Modals, tooltips, overlays
Let me know if you want a visual DOM tree example too!