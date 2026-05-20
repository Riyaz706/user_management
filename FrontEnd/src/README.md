# Source Directory

This directory contains the bootstrapping sequence, root router configuration, global styles, and dynamic layouts for the React client.

## Table of Contents

- [About the Directory](#about-the-directory)
- [Application Entry Sequence](#application-entry-sequence)
- [File Index](#file-index)
- [Router Configuration](#router-configuration)

## About the Directory

The `src/` directory holds the modules, layouts, page containers, and stylesheets compiled and optimized by Vite during production builds.

---

## Application Entry Sequence

The bootstrapping sequence of the React application proceeds as follows:

1. **`index.html`**: Entry page referencing `src/main.jsx`.
2. **`src/main.jsx`**: The React client entry script. Imports `index.css` (which loads Tailwind) and mounts the `App` component into the DOM tree at `div#root` under `React.StrictMode`.
3. **`src/App.jsx`**: Bootstraps the application routes using React Router 7.

---

## File Index

| File | Type | Purpose | Imports / Dependencies |
| :--- | :--- | :--- | :--- |
| `main.jsx` | React Entry | Bootstraps the React virtual DOM tree and mounts it to `div#root`. | `react`, `react-dom`, `App.jsx`, `index.css` |
| `App.jsx` | Root Router | Sets up path mappings and layouts for the client app. | `react-router`, components (`RootLayout`, `Home`, `AddUser`, `UsersList`, `User`) |
| `index.css` | Stylesheet | Imports Tailwind CSS framework. | Tailwind directives |
| `App.css` | Stylesheet | Custom global styles and page container alignments. | None |

---

## Router Configuration

The routing system is set up in `src/App.jsx` using React Router 7's `createBrowserRouter`:

```jsx
const routerObj = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'add-user', element: <AddUser /> },
      { path: 'users-list', element: <UsersList /> },
      { path: 'user', element: <User /> }
    ]
  }
])
```

- **Root Layout wrapper**: All components are rendered inside `<RootLayout />` through a nested React Router outlet, keeping the navbar header and footer persistent across views.
- **Dynamic Routing paths**: Directs traffic to root home views, user creations, listing layouts, and user details configurations.
