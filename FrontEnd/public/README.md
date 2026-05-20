# Static Assets (Public Directory)

This directory contains static, uncompiled files served at the root URL of the client application.

## Table of Contents

- [About the Directory](#about-the-directory)
- [How Static Files are Served](#how-static-files-are-served)
- [Asset Index](#asset-index)
- [Usage Guidelines](#usage-guidelines)

## About the Directory

Assets stored in the `public/` directory bypass the Vite and Rollup bundlers. They are copied directly as-is to the root of the build output directory (`dist/`) during bundling.

## How Static Files are Served

During local development and production serving, assets are served from the root path:
- `public/vite.svg` is accessible at `/vite.svg`.
- The HTML root file (`index.html`) can reference it using an absolute, root-relative path:
  ```html
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  ```

---

## Asset Index

The directory contains the following static asset:

| Asset | Type | Purpose | Description |
| :--- | :--- | :--- | :--- |
| `vite.svg` | SVG | favicon | Represents the Vite build engine logo. Displayed on the browser tab bar. |

---

## Usage Guidelines

- **Root-Relative Paths**: Reference resources in this directory using root-relative paths:
  ```jsx
  function BrandLogo() {
    return <img src="/vite.svg" alt="Vite Logo" className="w-8 h-8" />;
  }
  ```
- **Vite Bundler Bypass**: Do not use relative imports in your JavaScript or JSX files (e.g., `import logo from '../public/vite.svg'`). Use root-relative paths instead.
