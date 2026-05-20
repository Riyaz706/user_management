# Backend routing APIs (APIs Directory)

This directory houses individual Express.js routing modules separating endpoint logics into distinct sub-controllers.

## Table of Contents

- [About the Directory](#about-the-directory)
- [Router Middleware Registration](#router-middleware-registration)
- [REST API Routes Specifications](#rest-api-routes-specifications)
  - [Create User](#create-user)
  - [Get All Active Users](#get-all-active-users)
  - [Get User By ID](#get-user-by-id)
  - [Soft Delete User](#soft-delete-user)
  - [Restore User Profile](#restore-user-profile)

## About the Directory

Routing definitions are kept clean and modular. The folder exports express routers that connect database models with client requests.

---

## Router Middleware Registration

All routes described here are mounted on the main Express application at the `/user-api` prefix:

```javascript
import { userApp } from "./APIs/userApi.js";
App.use("/user-api", userApp);
```

---

## REST API Routes Specifications

### Create User
Registers a new user profile inside the database collection.

- **Endpoint**: `POST /user-api/user`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "name": "Alex Mercer",
    "email": "alex.mercer@example.com",
    "dateOfBirth": "1994-08-24",
    "mobileNumber": 9876543210
  }
  ```
- **Success Response**: `HTTP 201 Created`
  ```json
  {
    "message": "user added successfully",
    "payload": {
      "_id": "60d5ec49867c4c3b24f3c5b1",
      "name": "Alex Mercer",
      "email": "alex.mercer@example.com",
      "dateOfBirth": "1994-08-24T00:00:00.000Z",
      "mobileNumber": 9876543210,
      "status": true,
      "createdAt": "2026-05-20T11:25:00.000Z",
      "updatedAt": "2026-05-20T11:25:00.000Z"
    }
  }
  ```

---

### Get All Active Users
Retrieves all user records that have an active status.

- **Endpoint**: `GET /user-api/users`
- **Success Response**: `HTTP 201 Created`
  ```json
  {
    "message": "users found",
    "payload": [
      {
        "_id": "60d5ec49867c4c3b24f3c5b1",
        "name": "Alex Mercer",
        "email": "alex.mercer@example.com",
        "dateOfBirth": "1994-08-24T00:00:00.000Z",
        "mobileNumber": 9876543210,
        "status": true
      }
    ]
  }
  ```

---

### Get User By ID
Retrieves details for a specific active user record.

- **Endpoint**: `GET /user-api/user/:id`
- **Parameters**: `id` (Mongoose ObjectId)
- **Success Response**: `HTTP 201 Created`
  ```json
  {
    "message": "user found",
    "payload": {
      "_id": "60d5ec49867c4c3b24f3c5b1",
      "name": "Alex Mercer",
      "email": "alex.mercer@example.com",
      "status": true
    }
  }
  ```
- **Error Response**: `HTTP 404 Not Found`
  ```json
  {
    "message": "User not found"
  }
  ```

---

### Soft Delete User
Deactivates a user account by setting their status to false.

- **Endpoint**: `DELETE /user-api/user/:id`
- **Parameters**: `id` (Mongoose ObjectId)
- **Success Response**: `HTTP 201 Created`
  ```json
  {
    "message": "user deleted"
  }
  ```
- **Error Response**: `HTTP 404 Not Found` (if user is already deleted or does not exist)

---

### Restore User Profile
Re-activates a soft-deleted user account.

- **Endpoint**: `PATCH /user-api/user/:id`
- **Parameters**: `id` (Mongoose ObjectId)
- **Success Response**: `HTTP 201 Created`
  ```json
  {
    "message": "user activated",
    "payload": {
      "_id": "60d5ec49867c4c3b24f3c5b1",
      "status": true
    }
  }
  ```
- **Error Response**: `HTTP 404 Not Found`
