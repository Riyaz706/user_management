# Frontend Client Application

This directory contains the frontend Single Page Application (SPA) client built with React, Vite, and Tailwind CSS. It communicates with the backend Express server to manage user data.

## Table of Contents

- [About the Project](#about-the-project)
- [Local Configurations and Environments](#local-configurations-and-environments)
- [Client Build Commands](#client-build-commands)
- [Directory Structure](#directory-structure)

## About the Project

The client application displays user forms, user listings, and user details in a responsive layout using custom card styling and form input validation.

---

## Local Configurations and Environments

The React application connects to backend Express endpoints using a base URL configuration variable:

Create a `.env` file in the root of the `FrontEnd/` directory:

```env
VITE_API_BASE_URL=http://localhost:4000
```

- **`VITE_API_BASE_URL`**: Base URL of the running backend Express server. This variable is read at runtime using Vite's configuration system: `import.meta.env.VITE_API_BASE_URL`.

---

## Client Build Commands

Run these npm commands inside the `FrontEnd/` directory to manage development, compilation, and linting tasks:

| Command | Purpose | Action |
| :--- | :--- | :--- |
| `npm run dev` | Development Server | Starts the Vite hot-reloading development server. |
| `npm run build` | Compile Build | Compiles files into optimized static assets in the `dist/` folder. |
| `npm run lint` | ESLint Check | Runs lint rules to check for code formatting issues. |
| `npm run preview` | Review Output | Serves the compiled production build locally for testing. |

---

## Directory Structure

- **[`public/`](file:///Users/mdriyaz/.gemini/antigravity/scratch/user_management/FrontEnd/public)**: Contains static, uncompiled assets that bypass bundlers.
- **[`src/`](file:///Users/mdriyaz/.gemini/antigravity/scratch/user_management/FrontEnd/src)**: Application code:
  - **[`Components/`](file:///Users/mdriyaz/.gemini/antigravity/scratch/user_management/FrontEnd/src/Components)**: React visual layouts, headers, footers, forms, and pages.
  - **`App.jsx`**: Bootstraps routes using React Router 7.
  - **`main.jsx`**: Main client entry point.
  - **`index.css`**: Mounts Tailwind CSS compiler directives.
  - **`App.css`**: Houses layout-specific styles.
- **`vite.config.js`**: Core Vite configuration parameters.
- **`vercel.json`**: Deployment overrides.
