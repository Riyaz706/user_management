import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

function UsersList() {
    let [users, setUsers] = useState([]);
    let [error, setError] = useState(null);
    let [loading, setLoading] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {
        async function getUsers() {
            try {
                setLoading(true);
                let res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/user-api/users`, {
                    method: "GET",
                });
                if (res.status === 201) {
                    let data = await res.json();
                    setUsers(data.payload);
                } else {
                    throw new Error("data failed to fetch")
                }
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false);
            }
        }
        getUsers();
    }, [])

    const goToUser = (userObj) => {
        navigate('/user', { state: userObj })
    }

    const handleDelete = async (id, e) => {
        if (e) e.stopPropagation();
        if (!window.confirm("Are you sure you want to delete this user?")) return;
        try {
            let res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/user-api/user/${id}`, {
                method: "DELETE",
            });
            if (res.status === 201) {
                setUsers(users.filter(u => u._id !== id));
            } else {
                throw new Error("Failed to delete user");
            }
        } catch (err) {
            alert(err.message);
        }
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>

    return (
        <div className="container">
            <h1>List of Users</h1>
            {users.map((userObj) => (
                <div 
                    key={userObj._id} 
                    className="user-card" 
                    onClick={() => goToUser(userObj)} 
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <div>
                        <p>{userObj.name}</p>
                        <p>{userObj.email}</p>
                    </div>
                    <button 
                        onClick={(e) => handleDelete(userObj._id, e)} 
                        style={{
                            padding: '6px 12px',
                            backgroundColor: '#ef4444',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '13px'
                        }}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )
}

export default UsersList