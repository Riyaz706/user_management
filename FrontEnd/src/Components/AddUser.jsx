import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router';

function AddUser() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let [error, setError] = useState(null);
    let [loading, setLoading] = useState(false);

    let navigate = useNavigate();

    const onUserCreate = async (newUser) => {
        console.log(newUser);
        try {
            setLoading(true);
            let res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/user-api/user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser),
            });
            if (res.status === 201) {
                navigate('/users-list')
            } else {
                throw new Error("error occured")
            }
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false);
        }
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>

    return (
        <div className="container">
            <h1>Add New User</h1>
            <form onSubmit={handleSubmit(onUserCreate)}>
                <input type="text" placeholder="Enter username" {...register("name")} />
                <input type="email" placeholder="Enter email" {...register("email")} />
                <input type="date" placeholder="Enter DOB" {...register("dateOfBirth")} />
                <input type="number" placeholder="Enter mobile number" {...register("mobileNumber")} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddUser