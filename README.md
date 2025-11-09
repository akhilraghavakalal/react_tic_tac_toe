To install the app, instead of using create react app, i used the below command

`npm create vite@latest react-tic-tac-toe -- --template react`

# React + Vite Application Flow - Notes
## How Vite Works
Vite is a modern development server for frontend applications, similar to how uvicorn serves Python backend applications. When you run `npm run dev`, Vite starts a local development server (typically at http://localhost:5173) that serves your React application. The key feature of Vite is Hot Module Replacement (HMR), which watches your files for changes and instantly updates the browser without requiring a full page refresh. This makes development much faster compared to older tools like Create React App. When you're ready to deploy, `npm run build` bundles your code into optimized static files in a `dist` folder.

### Vite Dev Server

| Aspect | Details |
|--------|---------|
| **Command** | `npm run dev` |
| **URL** | http://localhost:5173 |
| **Key Feature** | Hot Module Replacement (HMR) |
| **Function** | Watches files and auto-updates browser without refresh |
| **Build Command** | `npm run build` → creates `/dist` folder |
| **Stop Server** | `Ctrl + C` in terminal |

---

## Application Entry Point
The entry point of a React application is the `index.html` file located in the project root. This HTML file contains a simple `<div id="root"></div>` element, which serves as the mounting point for your entire React application. The HTML file also includes a script tag that imports `main.jsx`, which is where React takes over and connects to the DOM. Everything in your React app will be rendered inside this root div.

### index.html

| Aspect | Details |
|--------|---------|
| **Location** | Project root directory |
| **Key Element** | `<div id="root"></div>` |
| **Purpose** | Mounting point for entire React app |
| **Script Import** | `<script type="module" src="/src/main.jsx">` |
| **Role** | Entry point that loads React |

---

## `main.jsx` - The Bridge

The `main.jsx` file (or `main.tsx` for TypeScript) is the bridge between the HTML DOM and your React application. It imports `createRoot` from `react-dom/client`, which is React 18's modern way of rendering applications (replacing the older `ReactDOM.render` method). The code `createRoot(document.getElementById('root'))` finds the root div in your HTML and creates a React root there. It then renders your `<App />` component wrapped in `<StrictMode>`, which is a development tool that helps catch bugs by detecting unsafe code patterns, deprecated APIs, and unexpected side effects. StrictMode only runs in development mode and has no impact on your production build.

### main.jsx

| Aspect | Details |
|--------|---------|
| **Purpose** | Bridge between DOM and React |
| **Key Import 1** | `createRoot` from `react-dom/client` |
| **Key Import 2** | `StrictMode` from `react` |
| **Key Import 3** | `App` from `./App.jsx` |
| **Main Function** | `createRoot(document.getElementById('root')).render()` |
| **Wraps App In** | `<StrictMode>` for development safety checks |


### StrictMode Details

| Aspect | Details |
|--------|---------|
| **Type** | Development tool wrapper |
| **Environment** | Development only (removed in production) |
| **Detects** | Unsafe lifecycles, deprecated APIs, side effects |
| **Usage** | Wraps `<App />` in main.jsx |
| **Impact** | Zero performance impact in production |
---

## App.jsx - The Main Component
`App.jsx` is your main React component and serves as the entry point for your application's component tree. While it's the first component that gets rendered, it's typically used as a simple wrapper or container that imports and organizes other components. In a well-structured application, you wouldn't put all your code in App.jsx. Instead, you'd create separate component files like `Board.jsx`, `Square.jsx`, or `Game.jsx` in a components folder, and import them into `App.jsx`. This keeps your code organized and maintainable as your application grows.


### App.jsx

| Aspect | Details |
|--------|---------|
| **Type** | Main React Component |
| **Purpose** | Entry component / wrapper |
| **Returns** | JSX (your UI structure) |
| **Imports** | Other components (Board, Square, Game, etc.) |
| **Best Practice** | Keep as organizer, not dumping ground for all code |
| **File Structure** | Often imports from `/components` folder |

---

## Component Flow


**Flow Summary:**

| File | Role | Action |
|------|------|--------|
| index.html | HTML entry | Contains `<div id="root">` |
| main.jsx | React bridge | `createRoot` + `render` |
| App.jsx | Main component | Component wrapper |
| Components | UI pieces | Your app logic |

---

### Notes

In any file say `App.jsx`, there can be 100s of functions like `export function function_name`, but there can be only one `default` function.

Now in `main.jsx`, when running the code in `Strict` mode, we use the component `<App>`, Here this comes from using the import statement `import App from '../App.jsx'`.

What happens here is that it is accessing the `App.jsx` file and then using the default function that is exported. Now this can be using as anything. We can import it as App, Whatever,... but the main condition is that they have to start with `Uppercase` letters else it will not work.

If there are multiple functions in `App.jsx`, and since only one can be named as `default`, we can actually import multiple functions as `components` from that file. For ex.., `import {Square, Board, Game} from '../App.jsx'`

***A good practice generally is keep the default function with the same name as the filename***

The `{}` makes a huge difference in import statements. If we dont use it like `import Whatever from '../App.jsx'` it would import the default export function. But if we use `{Whatever}` then it would specifically look for a function named `Whatever`


If we have both a default function and named functions then we can use it like this `import Square, { Board, Game } from './App.jsx'`

**Rules Summary:**

| Syntax | what it imports|
|------|------|
|`import X from './file.jsx'`  | Default export (can name it anything) | 
| `import { X } from './file.jsx'` | Named export called exactly "X" | 
| `import X, { Y, Z } from './file.jsx` | Default as X, named Y and Z | 

---

#### React Components

In React, a component is a piece of reusable code that represents a part of a user interface. Components are used to render, manage, and update the UI elements in your application. 

---

#### `export` and `default` keywords

The `export` JavaScript keyword makes this function accessible outside of this file. 

The `default` keyword tells other files using your code that it’s the main function in your file.
 
---
#### JSX Elements

A JSX element is a combination of JavaScript code and HTML tags that describes what you would like to display

---

#### Fragments

React components need to return a single JSX element and not multiple adjacent JSX elements like two buttons. 

To fix this you can use `Fragments (<> and </>)` to wrap multiple adjacent JSX elements.

We can aboviously use `<div> and </div>` and place the buttons inside this, but it is just adding an unnecessary `div` to the `DOM`

---

#### React Props

Props are the `arguments (parameters)` that are passed into the `React components` via `HTML attributes`

`HTML Attributes -> Props -> React Components`

* props stands for `properties`

In our case, each `Sqaure` component can have a `value` attribute from 1 to 9 and when this value can be passed from `Board` component jsx to the actual `Sqaure` component where it can be used 

```
<Square  value={1} model = "test" />

export default function Square(props) {}
```

This can now be used inside the Square component by accessing props like `{props.value}, {props.model}`

* ***{} is used for destructuring purpose*** 

```
<button className="square">
      {props.value} {props.model}
</button>
```
This can be used to populate the button content

#### Handling onclick function

In the `Square` component, we have the code for button, we can write a function that does something like console logs what the value of button is and then call this function in the button using the `onclick` attribute in the jsx.

But jsx is rendered at the page load time or when ever a change is made to the content. So When the page loads, the `onClick` function gets executed and since we would not have pressed a button then, the function would print undefined has been clicked or throw an error

```
function handleSquareClick(props) {
  console.log("Square " + props.value + " is clicked");
}


<button className="square" onClick={handleSquareClick(props)}>
      {props.value} {props.model}
</button>
```

* The `onclick` is getting executed on page load itself

So to handle this, we use an arrow function without any parameters in it.

```
<button className="square" onClick={() => handleSquareClick(props)}>
      {props.value} {props.model}
</button>
```

Here on page load, `()` gets executed and it returns the `handleSqaureClick(props)` function itself. So when we click the button, the actual function gets executed

---