# Backend Database Models (Models Directory)

This directory contains the Mongoose schema definitions and validators representing collections inside the MongoDB instance.

## Table of Contents

- [About the Directory](#about-the-directory)
- [User Document Schema (`userModel.js`)](#user-document-schema-usermodeljs)
- [Validation Boundaries](#validation-boundaries)
- [Schema Setup Configurations](#schema-setup-configurations)

## About the Directory

Database interactions are managed using Mongoose schemas. Models define validation constraints to verify request payloads before database insertion.

---

## User Document Schema (`userModel.js`)

Defines the structure of documents within the `users` collection:

| Schema Path | Schema Type | Required | Unique | Default Value | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `name` | `String` | Yes | No | None | Full name of the user profile. |
| `email` | `String` | Yes | Yes | None | Primary email address. |
| `dateOfBirth` | `Date` | Yes | No | None | Date of birth. |
| `mobileNumber`| `Number` | No | No | None | Telephone contact digits. |
| `status` | `Boolean` | No | No | `true` | Activation flag. Used to implement soft deletion. |
| `createdAt` | `Date` | Generated| No | System Date | Automatically handled by Mongoose. |
| `updatedAt` | `Date` | Generated| No | System Date | Automatically handled by Mongoose. |

---

## Validation Boundaries

Mongoose validates documents using custom boundaries:

- **Name field validation**: If the field is omitted, Mongoose returns:
  ```
  enter the name
  ```
- **Email field validation**: If empty, Mongoose returns:
  ```
  email is required
  ```
  If email uniqueness is violated, MongoDB index triggers code `11000` duplicate key exception:
  ```
  email already exists
  ```
- **Date of Birth validation**: If omitted, Mongoose returns:
  ```
  DOB is required
  ```

---

## Schema Setup Configurations

The user schema is initialized with key configuration attributes:

- **`timestamps: true`**: Automatically updates `createdAt` and `updatedAt` date stamps.
- **`versionKey: false`**: Excludes the `__v` internal document version key from JSON responses.
- **`strict: "throw"`**: Enforces schema strictness. Supplying properties that are not defined in the schema causes an exception rather than silently ignoring the input.
