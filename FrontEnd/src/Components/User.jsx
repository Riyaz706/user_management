import React from 'react'
import { useLocation } from 'react-router'

function User() {
  let { state } = useLocation();
  if (!state) {
    return <div>No user data found.</div>;
  }

  return (
    <div className="user-detail">
      <h1>User Details</h1>
      <p><strong>Name:</strong> {state.name}</p>
      <p><strong>Email:</strong> {state.email}</p>
      <p><strong>Date of Birth:</strong> {state.dateOfBirth}</p>
      <p><strong>Mobile:</strong> {state.mobileNumber}</p>
    </div>
  )
}

export default User