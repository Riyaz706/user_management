import React from 'react';
import { NavLink } from 'react-router';

function Header() {
  return (
    <nav>
        <img src="/logo.png" alt="logo" />
        <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/users-list" className={({ isActive }) => isActive ? "active" : ""}>Users List</NavLink>
            </li>
            <li>
              <NavLink to="/add-user" className={({ isActive }) => isActive ? "active" : ""}>Add User</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Header