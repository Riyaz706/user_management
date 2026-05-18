import React from 'react'
import { useLocation, useNavigate } from 'react-router'

function User() {
  let { state } = useLocation();
  let navigate = useNavigate();

  if (!state) {
    return <div>No user data found.</div>;
  }

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      let res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/user-api/user/${state._id}`, {
        method: "DELETE",
      });
      if (res.status === 201) {
        alert("User deleted successfully!");
        navigate("/users-list");
      } else {
        throw new Error("Failed to delete user");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="user-detail">
      <h1>User Details</h1>
      <p><strong>Name:</strong> {state.name}</p>
      <p><strong>Email:</strong> {state.email}</p>
      <p><strong>Date of Birth:</strong> {state.dateOfBirth}</p>
      <p><strong>Mobile:</strong> {state.mobileNumber}</p>
      <button 
        onClick={handleDelete} 
        style={{
          marginTop: '20px',
          width: '100%',
          padding: '10px 20px',
          backgroundColor: '#ef4444',
          color: '#ffffff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '15px'
        }}
      >
        Delete User
      </button>
    </div>
  )
}

export default User