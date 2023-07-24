const sessionData = [
  {
    number: 1,
    title: "Javascript - Day -1: Introduction to Browser & web",
    date: "13/03/2023 - Monday - 8:00 AM : 11:00 AM",
    contents: [
      "Introduction to web Browser Wars DOM tree CSSOM tree",
      "Browser internals - HTML parser",
      "CSS parser, JavaScript V8 engine",
      "Internals IP – MAC address – Ports & Evolution of HTTP",
      "HTTP Methods",
      "How the Server looks at the URL",
      "Request & Response cycle",
    ],
    preRead: "No pre-read available.",
  },

  {
    number: 2,
    title: "Javascript - Day -2 : Request & Response cycle",
    date: "14/03/2023 - Tuesday - 8:00 AM : 10:30 AM",
    contents: [
      "HTML Browser view - Debugger, Inspect,",
      "Browser js vs Node js",
      "Data types",
      "Copy by value and Copy by reference",
      "Window & document object",
    ],
    preRead: "No pre-read available.",
  },

  {
    number: 3,
    title: "Javascript - Day -3 : JS array & objects",
    date: "15/03/2023 - Wednesday - 8:00 AM : 10:30 AM",
    contents: [
      "Introduction to Array",
      "Array and JSON iteration",
      "XMLHTTPRequest",
      "Hoisting & scope",
    ],
    preRead: "No pre-read available.",
  },

  {
    number: 4,
    title: "JavaScript - Day -4: Functions",
    date: "17/03/2023 - Friday - 8:00 AM : 10:30 AM",
    contents: [
      "Introduction to functions",
      "function & return keyword",
      "XMLHTTPRequest",
      "types of function",
    ],
    preRead:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
  },

  {
    number: 5,
    title: "JavaScript - Day -5: ES5 vs ES6",
    date: "21/03/2023 - Tuesday - 8:00 AM : 10:30 AM",
    contents: [
      "var vs let vs const",
      "block scoping",
      "spread & rest operators",
      "array & object destructure",
      "Object property shorthand",
      "Template literals",
      "Arrow functions",
    ],
    preRead:
      "https://aravishack.medium.com/es6-features-a-walk-through-1ffd8eb82f6",
  },

  {
    number: 6,
    title: "JavaScript - Day -6: OOP in JS",
    date: "22/03/2023 - Wednesday - 8:00 AM : 10:30 AM",
    contents: [
      "Understanding the basics of prototype",
      "What is classes in js?",
      "constructor",
      "need of setters/getters",
      "use of this key word in classes",
    ],
    preRead: [
      "http://es6-features.org/",
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment",
    ],
  },

  {
    number: 7,
    title: "JavaScript - Day -7: Array methods",
    date: "23/03/2023 - Thursday - 8:00 AM : 10:30 AM",
    contents: [
      "Map, Reduce, Filter",
      "Other array methods practice in session",
    ],
    preRead:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
  },

  {
    number: 8,
    title: "HTML - Day -1: HTML",
    date: "27/03/2023 - Monday - 8:00 AM : 10:30 AM",
    contents: [
      "What is HTML & Why to use?",
      "Basic Tags",
      "HTML vs HTML5",
      "div vs section vs article",
      "div vs span",
      "inline vs block elements",
      "HTML Forms",
      "Input elements and attributes",
      "Form submit",
    ],
    sessionPracticeTaskURL:
      "https://github.com/rvsp/HTML-CSS/blob/master/Mini-tasks/001-HTML.md",
    preRead: [
      "https://developer.mozilla.org/en-US/docs/Web/HTML",
      "https://www.w3schools.com/html/",
      "https://html.spec.whatwg.org/multipage/",
    ],
  },

  {
    number: 9,
    title: "HTML & CSS - Day -2: HTML & CSS",
    date: "29/03/2023 - Wednesday - 8:00 AM : 11:00 AM",
    contents: [
      "What is CSS?",
      "Ways to use CSS",
      "Property & value",
      "Class vs ID",
      "Use of !important",
      "Display property: inline, block",
    ],
    preRead: [
      "https://www.w3schools.com/html/default.asp",
      "https://github.com/rvsp/html-CSS/",
    ],
  },

  {
    number: 10,
    title: "HTML & CSS - Day -3: HTML & CSS",
    date: "30/03/2023 - Thursday - 8:00 AM : 10:30 AM",
    contents: [
      "Intro to pseudo-classes (link, visited, hover, active)",
      "Box model: padding, margin, border",
      "Grid",
      "Flex - display, direction, wrap, flex-flow, justify-content, align-content",
      "Position property: fixed, static, relative, absolute, sticky",
      "Parent inherit",
      "Gradient",
    ],
    preRead: [
      "https://rvsp.github.io/CSS/",
      "https://web.dev/learn/css/",
      "https://www.w3schools.com/css/",
      "https://css-tricks.com/",
      "https://github.com/rvsp/html-CSS/",
    ],
  },

  {
    number: 11,
    title: "HTML & CSS - Day -4: HTML & CSS",
    date: "31/03/2023 - Friday - 8:00 AM : 11:00 AM",
    contents: [
      "Overflow - hidden, scroll, auto, visible",
      "Dropbox",
      "Measurements",
      "Fonts",
      "Icons",
      "Media query",
    ],
    preRead: [
      "https://rvsp.github.io/CSS/",
      "https://web.dev/learn/css/",
      "https://www.w3schools.com/css/",
      "https://css-tricks.com/",
      "https://github.com/rvsp/html-CSS",
    ],
  },

  {
    number: 12,
    title: "HTML & CSS - Day -5: Responsive Web Design",
    date: "03/04/2023 - Monday - 8:00 AM : 10:30 AM",
    contents: [
      "What is RWD?",
      "What is mobile-first approach?",
      "Bootstrap",
      "- How to set up Bootstrap?",
      "- What is the layout?",
      "- What is container, container-fluid & container with breakpoints?",
      "- What is a grid in Bootstrap?",
      "- What is column prefix & its use and maximum columns for a row?",
      "- How to do nested columns, column ordering?",
    ],
    preRead: "https://getbootstrap.com/docs/4.6/getting-started/introduction/",
  },

  {
    number: 13,
    title: "DOM - Day -1: DOM Intro",
    date: "05/04/2023 - Wednesday - 8:00 AM : 10:30 AM",
    contents: [
      "What is DOM?",
      "createElement",
      "setAttribute",
      "getElementById",
      "querySelector vs querySelectorAll",
      "innerHTML vs innerText",
      "appendChild vs append",
    ],
    preRead:
      "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
  },

  {
    number: 14,
    title: "DOM - Day -2: Document vs Window",
    date: "10/04/2023 - Monday - 8:00 AM : 10:30 AM",
    contents: [
      "Window - Common Util functions",
      "setTimeout vs setInterval",
      "prompt, Alert, confirm",
      "Working with events",
    ],
    preRead:
      "https://stackoverflow.com/questions/9895202/what-is-the-difference-between-window-screen-and-document-in-javascript",
  },

  {
    number: 15,
    title: "DOM - Day -3: Recap of Topics",
    date: "11/04/2023 - Tuesday - 8:00 AM : 11:00 AM",
    contents: [
      "Recap of DOM topics",
      "Mandatory session practice task",
      "https://github.com/rvsp/HTML-CSS/blob/master/Mini-tasks/003-JS-DOM.md",
    ],
    preRead: "No preread available",
  },

  {
    number: 16,
    title: "Pre-Placement Session",
    date: "12/04/2023 - Wednesday - 3:00 PM : 4:30 PM",
    contents: ["Mandatory session on placement readiness factors"],
    preRead: "No preread available",
  },

  {
    number: 17,
    title: "Async Programming - Day -1: Callback",
    date: "17/04/2023 - Monday - 8:00 AM : 10:30 AM",
    contents: [
      "Callback",
      "What's the callback? - callstack, webapi, eventloop, queue",
      "Use & the purpose of the callback",
      "Pain of callback",
    ],
    sessionReference: "http://latentflip.com/loupe/",
    preRead:
      "https://www.freecodecamp.org/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/",
  },

  {
    number: 18,
    title: "Async Programming - Day -2: Promise",
    date: "18/04/2023 - Tuesday - 8:00 AM : 11:00 AM",
    contents: [
      "Promise",
      "- What is a promise?",
      "- Promise States",
      "- Promise chain",
      "- promise.all()",
      "- Use of fetch() & then()",
    ],
    preRead:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
  },

  {
    number: 19,
    title: "Async Programming - Day -3: Fetch API",
    date: "20/04/2023 - Thursday - 8:00 AM : 10:30 AM",
    contents: ["Promise chaining", "Async/Await with error handling"],
    preRead: "No preread available",
  },

  {
    number: 20,
    title:
      "Async Programming - Day -4: Promise Fetch - Request Info & Request Init",
    date: "24/04/2023 - Monday - 8:00 AM : 10:30 AM",
    contents: ["Implementing CRUD with HTML, CSS, JavaScript"],
    preRead:
      "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
  },

  {
    number: 21,
    title: "Async Programming - Day -5: Recap of Topics",
    date: "25/04/2023 - Tuesday - 8:00 AM : 10:30 AM",
    contents: ["Recap of callback, Promise Topics"],
    preRead: "No preread available",
  },

  {
    number: 22,
    title: "React - Day 1: ES5 vs ES6",
    date: "05/05/2023 - Friday - 8:00 AM : 10:30 AM",
    contents: [
      "ES5 vs ES6",
      "Scoping - var vs let vs const",
      "Arrow functions",
      "Use of this keyword (lexical scoping)",
      "Template literals",
      "Spread & rest parameter",
      "Array & object destructuring",
      "Property shorthand",
      "Module import & export",
      "Class in JavaScript",
    ],
    preRead: [
      "http://es6-features.org/",
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment",
    ],
  },

  {
    number: 23,
    title: "React - Day -2: React",
    date: "08/05/2023 - Monday - 8:00 AM : 10:30 AM",
    contents: [
      "Why React",
      "Setup React project",
      "Understanding JSX",
      "Components (simple HTML layout to reusable React components)",
      "Understanding the components",
      "Passing data through props",
      "Deploying React to Netlify",
    ],
    preRead: "https://reactjs.org/",
  },

  {
    number: 24,
    title: "React - Day -3: React Hooks & States",
    date: "09/05/2023 - Tuesday - 8:00 AM : 10:30 AM",
    contents: [
      "Working with array lists",
      "Usage of keys",
      "Conditional rendering",
      "Handling events",
      "Props vs state",
    ],
    preRead: [
      "https://reactjs.org/docs/hooks-overview.html",
      "https://reactjs.org/docs/hooks-rules.html",
    ],
  },

  {
    number: 25,
    title: "React - Day -4: React Components",
    date: "11/05/2023 - Thursday - 8:00 AM : 11:00 AM",
    contents: [
      "Components - In depth",
      "Component lifecycle",
      "Stateful and stateless components",
      "Reusable components",
      "Passing dynamic data to component",
      "Introduction to Hooks",
    ],
    preRead: "https://www.npmjs.com/package/react-router-dom",
  },

  {
    number: 26,
    title: "React - Day -5: React Hooks",
    date: "12/05/2023 - Friday - 8:00 AM : 10:30 AM",
    contents: [
      "What is a hook?",
      "Lifecycle of Hook",
      "useState, useEffect",
      "Props drilling",
      "Passing data from child to parent component",
    ],
    preRead: "https://www.npmjs.com/package/react-router-dom",
  },

  {
    number: 27,
    title: "React - Day -6: React Router",
    date: "16/05/2023 - Tuesday - 8:00 AM : 10:30 AM",
    contents: [
      "react-router-dom",
      "BrowserRouter, Switch, Link, Route, URL params",
    ],
    preRead: [
      "Session task on admin dashboard",
      "https://startbootstrap.com/previews/sb-admin-2",
    ],
  },

  {
    number: 28,
    title: "React - Day -7: React Session Practice",
    date: "17/05/2023 - Wednesday - 8:00 AM : 10:30 AM",
    contents: ["Session-based Hands-on Practice Task with any Admin Dashboard"],
    preRead: "No preread available",
  },

  {
    number: 29,
    title: "React - Day -8: Context API",
    date: "18/05/2023 - Thursday - 8:00 AM : 11:00 AM",
    contents: [
      "Context API",
      "What is context, provide, createContext",
      "Avoid props drilling",
      "Session task – profile name changes",
    ],
    preRead: [
      "https://reactjs.org/docs/context.html",
      "https://reactjs.org/docs/hooks-reference.html#usestate",
    ],
  },

  {
    number: 30,
    title: "React - Day -9: Hook-useRef, useReducer",
    date: "22/05/2023 - Monday - 8:00 AM : 10:30 AM",
    contents: [
      "useRef, useReducer",
      "Front-end game demonstration - Hangman / Tic Tac Toe / Tile Match",
    ],
    preRead: "https://www.npmjs.com/package/axios",
  },

  {
    number: 31,
    title: "React - Day -10: React with CRUD",
    date: "23/05/2023 - Tuesday - 8:00 AM : 10:30 AM",
    contents: [
      "Playing around with API",
      "fetch() or axios",
      "Implementing simple CRUD",
    ],
    preRead: "https://www.npmjs.com/package/axios",
  },

  {
    number: 32,
    title: "React - Day -11: React Practice",
    date: "24/05/2023 - Wednesday - 8:00 AM : 10:30 AM",
    contents: [
      "Completed recap by implementing any Front-end game/CRUD to understand the importance of hooks",
      "Ex: Hangman / Tic Tac Toe / Tile Match",
    ],
    preRead: "https://www.npmjs.com/package/formik",
  },

  {
    number: 33,
    title: "React - Day -12: React Redux",
    date: "25/05/2023 - Thursday - 11:00 AM : 1:30 PM",
    contents: [
      "Intro to Redux - to understand state management with a React application",
    ],
    preRead: "No preread available",
  },

  {
    number: 34,
    title: "Pre-Placement Session",
    date: "26/05/2023 - Friday - 9:00 AM : 11:30 AM",
    contents: ["Mandatory session on placement readiness factors"],
    preRead: "No preread available",
  },

  {
    number: 35,
    title: "Database - MySQL",
    date: "30/05/2023 - Tuesday - 8:00 AM : 10:30 AM",
    contents: [
      "Introduction to database",
      "What is MySQL?",
      "Intro to MySQL engines",
      "Basic queries - create database, create table",
      "Insert, update, alter",
      "Select - where clause, distinct, group by, order by, offset, limit",
    ],
    preRead: "https://dev.mysql.com/doc/",
  },

  {
    number: 36,
    title: "Database - MySQL",
    date: "31/05/2023 - Wednesday - 8:00 AM : 10:30 AM",
    contents: [
      "Normalization",
      "Select queries",
      "Joins",
      "DB model design",
      "Intro to MongoDB & installation of MongoDB",
    ],
    preRead: "https://dev.mysql.com/doc/",
  },

  {
    number: 37,
    title: "Database - MongoDB",
    date: "01/06/2023 - Thursday - 8:00 AM : 10:30 AM",
    contents: [
      "Intro to MongoDB",
      "Why MongoDB?",
      "What is a document?",
      "What is a collection?",
      "MongoDB vs MySQL",
      "Installation of MongoDB",
      "Creation of database, collections, documents",
      "Find - query & projection",
    ],
    preRead: "https://docs.mongodb.com/manual/",
  },

  {
    number: 38,
    title: "MongoDB",
    date: "02/06/2023 - Friday - 8:00 AM : 10:30 AM",
    contents: [
      "Use of operators in find()",
      "Basic cursor methods - map, toArray, pretty, forEach, limit, count, sort",
      "Aggregation",
    ],
    preRead: "https://docs.mongodb.com/manual/",
  },

  {
    number: 39,
    title: "Node.js - Day -1: Node.js",
    date: "05/06/2023 - Monday - 8:00 AM : 10:30 AM",
    contents: [
      "What is Node.js?",
      "NPM packages",
      "- In-built",
      "- Third-party",
      "- Custom",
    ],
    preRead: "https://nodejs.org/",
  },

  {
    number: 40,
    title: "Node.js - Day -2: Node.js & Express.js",
    date: "06/06/2023 - Tuesday - 8:00 AM : 11:00 AM",
    contents: [
      "What is Express",
      "API methods - GET, POST, PUT, DELETE",
      "Request & response objects",
      "URL & Query parameters",
    ],
    preRead: "https://expressjs.com/",
  },

  {
    number: 41,
    title: "Node.js - Day -3: Node & MongoDB Connectivity",
    date: "07/06/2023 - Wednesday - 8:00 AM : 11:00 AM",
    contents: [
      "Connection to MongoDB (local & Atlas)",
      "Simultaneous frontend + backend connectivity",
    ],
    preRead: "No preread available",
  },

  {
    number: 42,
    title: "Node.js - Day -4: Node.js Deployment",
    date: "08/06/2023 - Thursday - 8:00 AM : 11:00 AM",
    contents: [
      "Dotenv",
      "Deployment",
      "Simultaneous frontend + backend connectivity",
    ],
    preRead: "https://www.npmjs.com/package/dotenv",
  },

  {
    number: 43,
    title: "Node.js - Day -5: Authentication",
    date: "09/06/2023 - Friday - 8:00 AM : 10:30 AM",
    contents: [
      "Authentication",
      "Bcrypt",
      "Simultaneous frontend + backend connectivity",
    ],
    preRead: "https://www.npmjs.com/package/bcrypt",
  },

  {
    number: 44,
    title: "Node.js - Day -6: JWT",
    date: "12/06/2023 - Monday - 8:00 AM : 10:30 AM",
    contents: [
      "JWT",
      "Custom middleware",
      "Authorization",
      "Simultaneous frontend + backend connectivity",
    ],
    preRead: "https://www.npmjs.com/package/jsonwebtoken",
  },
];

module.exports = sessionData;
