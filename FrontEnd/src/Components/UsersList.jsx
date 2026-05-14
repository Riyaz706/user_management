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

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>

    return (
        <div className="container">
            <h1>List of Users</h1>
            {users.map((userObj) => (
                <div key={userObj._id} className="user-card" onClick={() => goToUser(userObj)}>
                    <p>{userObj.name}</p>
                    <p>{userObj.email}</p>
                </div>
            ))}
        </div>
    )
}

export default UsersList