# React Components and Views (Components Directory)

This directory contains individual React view components that build forms, displays cards, render lists, and orchestrate route navigation.

## Table of Contents

- [About the Directory](#about-the-directory)
- [Component Index](#component-index)
- [Detail Navigation State Flow](#detail-navigation-state-flow)
- [Form Management and Validations](#form-management-and-validations)
- [API Interactions (fetch)](#api-interactions-fetch)

## About the Directory

Visual components use structured JSX and Tailwind CSS utilities to layout forms, list items, and details screens. Form inputs integrate with the `react-hook-form` library.

---

## Component Index

| Component | Route Path | Purpose | Key Integrations |
| :--- | :--- | :--- | :--- |
| `RootLayout.jsx` | `/` | Shared layout frame containing the header, sidebar, and footer layout. | `<Header />`, `<Footer />`, `<Outlet />` |
| `Header.jsx` | Static | Global sticky navigation header with navigation state links. | `react-router` `<Link>` elements |
| `Footer.jsx` | Static | Bottom page footer details block. | Static layouts |
| `Home.jsx` | `/` | Introduction landing view showing registration steps. | Routing pathways |
| `AddUser.jsx` | `/add-user` | Post profile registration form with validation rules. | `react-hook-form` hooks, REST `POST /user` |
| `UsersList.jsx`| `/users-list` | Lists all active profiles and handles deletion commands. | REST `GET /users`, `DELETE /user/:id` |
| `User.jsx` | `/user` | Renders user specs from state, with deletion capabilities. | REST `DELETE /user/:id`, `useLocation()` |

---

## Detail Navigation State Flow

Rather than perform a secondary network call to request details by ID when a user is clicked, components use React Router's local state passing mechanisms:

1. **Trigger Details**: In `UsersList.jsx`, clicking a user card dispatches the full JSON user object inside a navigation payload:
   ```javascript
   const goToUser = (userObj) => {
       navigate('/user', { state: userObj })
   }
   ```
2. **Retrieve Details**: In `User.jsx`, the component reads this state directly from the router location context:
   ```javascript
   let { state } = useLocation();
   // state contains: name, email, dateOfBirth, mobileNumber
   ```

---

## Form Management and Validations

The user registration form in `AddUser.jsx` manages its field inputs using `react-hook-form`'s `register` register pattern:

- **Register inputs**: Input elements map to schema keys through the register function:
  ```jsx
  <input type="text" placeholder="Enter username" {...register("name")} />
  <input type="email" placeholder="Enter email" {...register("email")} />
  ```
- **Form submission**: Form submit actions are wrapped by the library's `handleSubmit` handler, checking field states before dispatching network calls:
  ```jsx
  <form onSubmit={handleSubmit(onUserCreate)}>
  ```

---

## API Interactions (fetch)

The components perform asynchronous calls to the backend endpoints using the native browser `fetch` API:

- **Configurable base URL**: Base API paths are read dynamically from runtime environments:
  ```javascript
  let res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/user-api/user`, { ... })
  ```
- **Error checks**: Actions confirm responses return success codes before modifying local states:
  ```javascript
  if (res.status === 201) {
      setUsers(users.filter(u => u._id !== id));
  } else {
      throw new Error("Failed to delete user");
  }
  ```
